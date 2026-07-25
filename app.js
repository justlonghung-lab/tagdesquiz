(() => {
  "use strict";

  const CONFIG = window.QUIZ_CONFIG;
  const QUESTIONS = window.QUIZ_QUESTIONS;
  const STORAGE_KEY = `tag-des-quiz:${CONFIG.version}`;
  const TOTAL_DURATION_MS = CONFIG.durationMinutes * 60 * 1000;
  const CORE_CATEGORY_IDS = ["layout", "matching", "situations"];
  const THINKING_MAX = 60;
  const EXECUTION_MAX = 40;
  const AUTO_ADVANCE_DELAY_MS = 1400;

  const $ = (selector) => document.querySelector(selector);
  const elements = {
    landingView: $("#landingView"),
    quizView: $("#quizView"),
    startForm: $("#startForm"),
    participantName: $("#participantName"),
    nameError: $("#nameError"),
    landingScoreGrid: $("#landingScoreGrid"),
    landingLevelGrid: $("#landingLevelGrid"),
    participantLabel: $("#participantLabel"),
    overallProgressText: $("#overallProgressText"),
    answeredProgressText: $("#answeredProgressText"),
    overallProgressBar: $("#overallProgressBar"),
    timerBox: $("#timerBox"),
    timerText: $("#timerText"),
    topicNavigation: $("#topicNavigation"),
    topicBadge: $("#topicBadge"),
    topicQuestionCount: $("#topicQuestionCount"),
    questionText: $("#questionText"),
    answerList: $("#answerList"),
    answerHint: $("#answerHint"),
    resultModal: $("#resultModal"),
    resultDialog: $(".result-modal"),
    resultOverviewTab: $("#resultOverviewTab"),
    resultReviewTab: $("#resultReviewTab"),
    resultOverviewPanel: $("#resultOverviewPanel"),
    resultReviewPanel: $("#resultReviewPanel"),
    reviewSummaryBadge: $("#reviewSummaryBadge"),
    reviewFilterBar: $("#reviewFilterBar"),
    reviewFilterButtons: [...document.querySelectorAll(".review-filter")],
    reviewWrongCount: $("#reviewWrongCount"),
    reviewCorrectCount: $("#reviewCorrectCount"),
    reviewAllCount: $("#reviewAllCount"),
    resultReviewList: $("#resultReviewList"),
    resultEyebrow: $("#resultEyebrow"),
    resultTitle: $("#resultTitle"),
    resultSubtitle: $("#resultSubtitle"),
    passBadge: $("#passBadge"),
    scoreRing: $("#scoreRing"),
    totalScore: $("#totalScore"),
    levelBadge: $("#levelBadge"),
    levelName: $("#levelName"),
    levelDescription: $("#levelDescription"),
    correctMetric: $("#correctMetric"),
    timeMetric: $("#timeMetric"),
    unansweredMetric: $("#unansweredMetric"),
    thinkingScore: $("#thinkingScore"),
    thinkingBar: $("#thinkingBar"),
    executionScore: $("#executionScore"),
    executionBar: $("#executionBar"),
    coreScoreLabel: $("#coreScoreLabel"),
    scoreBreakdown: $("#scoreBreakdown"),
    resultNote: $("#resultNote"),
    copyResultButton: $("#copyResultButton"),
    restartButton: $("#restartButton"),
    toast: $("#toast")
  };

  const questionById = new Map(QUESTIONS.map((question) => [question.id, question]));
  const categoryById = new Map(CONFIG.categories.map((category) => [category.id, category]));

  let state = null;
  let timerInterval = null;
  let toastTimeout = null;
  let autoAdvanceTimeout = null;
  let activeReviewFilter = "wrong";

  validateQuizData();
  renderLandingSummary();
  bindEvents();
  restoreOrShowLanding();


  function renderLandingSummary() {
    elements.landingScoreGrid.innerHTML = CONFIG.categories.map((category) => `
      <div class="landing-score-item">
        <span>${escapeHtml(category.name)}</span>
        <strong>${category.weight} điểm</strong>
        <small>${category.questionCount} câu</small>
      </div>
    `).join("");

    elements.landingLevelGrid.innerHTML = CONFIG.levels.map((level) => `
      <div class="landing-level-item">
        <strong>${escapeHtml(level.threshold)}</strong>
        <span>${escapeHtml(level.name)}</span>
      </div>
    `).join("");
  }

  function validateQuizData() {
    const errors = [];
    const ids = new Set();
    const expectedTotal = CONFIG.categories.reduce((sum, category) => sum + category.questionCount, 0);
    const expectedPoints = CONFIG.categories.reduce((sum, category) => sum + category.weight, 0);

    if (QUESTIONS.length !== expectedTotal) {
      errors.push(`Tổng số câu là ${QUESTIONS.length}, cấu hình yêu cầu ${expectedTotal}.`);
    }
    if (expectedPoints !== CONFIG.totalPoints) {
      errors.push(`Tổng trọng số là ${expectedPoints}, cấu hình yêu cầu ${CONFIG.totalPoints}.`);
    }

    for (const question of QUESTIONS) {
      if (ids.has(question.id)) errors.push(`Trùng mã câu ${question.id}.`);
      ids.add(question.id);
      if (!categoryById.has(question.category)) errors.push(`${question.id} có chủ đề không tồn tại.`);
      if (!Array.isArray(question.options) || question.options.length !== 4) errors.push(`${question.id} không có đúng 4 phương án.`);
      if (question.options.filter((option) => option.correct).length !== 1) errors.push(`${question.id} không có đúng 1 đáp án đúng.`);
    }

    for (const category of CONFIG.categories) {
      const actual = QUESTIONS.filter((question) => question.category === category.id).length;
      if (actual !== category.questionCount) {
        errors.push(`${category.name}: có ${actual} câu, cấu hình yêu cầu ${category.questionCount}.`);
      }
    }

    if (errors.length) {
      console.error("Dữ liệu quiz không hợp lệ:", errors);
      throw new Error(errors.join("\n"));
    }
  }

  function bindEvents() {
    elements.startForm.addEventListener("submit", handleStart);
    elements.participantName.addEventListener("input", () => {
      elements.nameError.hidden = true;
    });
    elements.copyResultButton.addEventListener("click", copyResult);
    elements.restartButton.addEventListener("click", restartQuiz);
    elements.resultOverviewTab.addEventListener("click", () => setResultTab("overview"));
    elements.resultReviewTab.addEventListener("click", () => setResultTab("review"));
    elements.reviewFilterButtons.forEach((button) => {
      button.addEventListener("click", () => setReviewFilter(button.dataset.reviewFilter));
    });
    document.addEventListener("keydown", handleKeyboard);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && state?.status === "active") updateTimer();
    });
  }

  function restoreOrShowLanding() {
    state = loadState();

    if (!state || state.version !== CONFIG.version || !isStateCompatible(state)) {
      clearState();
      showLanding();
      return;
    }

    if (state.status === "active") {
      if (Date.now() >= state.endsAt) {
        showQuiz();
        finalizeQuiz("timeout");
      } else {
        showQuiz();
        renderCurrentQuestion();
        startTimer();
      }
      return;
    }

    if (state.status === "completed") {
      showLanding();
      showResult(state.result || calculateResult(state), state.finishReason || "completed");
      return;
    }

    showLanding();
  }

  function handleStart(event) {
    event.preventDefault();
    const participantName = elements.participantName.value.trim().replace(/\s+/g, " ");
    if (!participantName) {
      elements.nameError.hidden = false;
      elements.participantName.focus();
      return;
    }

    state = createNewState(participantName);
    saveState();
    showQuiz();
    renderCurrentQuestion();
    startTimer();
  }

  function createNewState(participantName) {
    const questionOrder = [];
    const optionOrders = {};

    for (const category of CONFIG.categories) {
      const categoryQuestionIds = QUESTIONS
        .filter((question) => question.category === category.id)
        .map((question) => question.id);
      questionOrder.push(...secureShuffle(categoryQuestionIds));
    }

    for (const question of QUESTIONS) {
      optionOrders[question.id] = secureShuffle(question.options.map((option) => option.id));
    }

    const now = Date.now();
    return {
      version: CONFIG.version,
      status: "active",
      participantName,
      startedAt: now,
      endsAt: now + TOTAL_DURATION_MS,
      completedAt: null,
      finishReason: null,
      currentIndex: 0,
      questionOrder,
      optionOrders,
      answers: {},
      result: null
    };
  }

  function showLanding() {
    stopTimer();
    clearAutoAdvance();
    elements.quizView.hidden = true;
    elements.landingView.hidden = false;
  }

  function showQuiz() {
    elements.landingView.hidden = true;
    elements.quizView.hidden = false;
    elements.participantLabel.textContent = state.participantName;
  }

  function renderCurrentQuestion() {
    if (!state || state.status !== "active") return;
    clearAutoAdvance();

    const questionId = state.questionOrder[state.currentIndex];
    const question = questionById.get(questionId);
    const category = categoryById.get(question.category);
    const categoryIdsInOrder = state.questionOrder.filter((id) => questionById.get(id).category === category.id);
    const questionPositionInCategory = categoryIdsInOrder.indexOf(question.id) + 1;
    const answer = state.answers[question.id];
    const answeredCount = Object.keys(state.answers).length;

    elements.overallProgressText.textContent = `Câu ${state.currentIndex + 1} / ${QUESTIONS.length}`;
    elements.answeredProgressText.textContent = `${answeredCount} đã trả lời`;
    elements.overallProgressBar.style.width = `${(answeredCount / QUESTIONS.length) * 100}%`;
    elements.topicBadge.textContent = category.name;
    elements.topicQuestionCount.textContent = `${questionPositionInCategory} / ${category.questionCount}`;
    elements.questionText.textContent = question.prompt;
    elements.answerList.innerHTML = "";

    const orderedOptionIds = state.optionOrders[question.id];
    const orderedOptions = orderedOptionIds.map((id) => question.options.find((option) => option.id === id));

    orderedOptions.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", answer?.selectedOptionId === option.id ? "true" : "false");
      button.dataset.optionId = option.id;
      button.innerHTML = `
        <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
        <span class="answer-text">${escapeHtml(option.text)}</span>
        <span class="answer-state" aria-hidden="true"></span>
      `;

      if (answer) {
        button.disabled = true;
        button.classList.add(option.correct ? "is-correct" : "is-wrong");
        button.querySelector(".answer-state").textContent = option.correct ? "✓" : "×";
        if (answer.selectedOptionId === option.id) button.classList.add("selected");
      } else {
        button.addEventListener("click", () => selectAnswer(question.id, option.id));
      }

      elements.answerList.appendChild(button);
    });

    if (answer) {
      const selectedOption = question.options.find((option) => option.id === answer.selectedOptionId);
      elements.answerHint.textContent = selectedOption.correct
        ? "Chính xác. Đang chuyển sang câu tiếp theo..."
        : "Chưa chính xác. Đang chuyển sang câu tiếp theo...";
      scheduleAutoAdvance(question.id, answer.answeredAt);
    } else {
      elements.answerHint.textContent = "Chọn một phương án để tiếp tục.";
    }

    renderTopicNavigation(question.category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderTopicNavigation(activeCategoryId) {
    elements.topicNavigation.innerHTML = CONFIG.categories.map((category, index) => {
      const categoryQuestionIds = state.questionOrder.filter((id) => questionById.get(id).category === category.id);
      const answered = categoryQuestionIds.filter((id) => Boolean(state.answers[id])).length;
      const complete = answered === category.questionCount;
      const classes = ["topic-nav-item"];
      if (category.id === activeCategoryId) classes.push("active");
      if (complete) classes.push("complete");
      return `
        <div class="${classes.join(" ")}">
          <span class="topic-nav-index">${complete ? "✓" : index + 1}</span>
          <span>${escapeHtml(category.shortName)}</span>
          <span class="topic-nav-status">${answered}/${category.questionCount}</span>
        </div>
      `;
    }).join("");
  }

  function selectAnswer(questionId, optionId) {
    if (!state || state.status !== "active") return;
    if (Date.now() >= state.endsAt) {
      finalizeQuiz("timeout");
      return;
    }
    if (state.answers[questionId]) return;

    const question = questionById.get(questionId);
    const option = question.options.find((item) => item.id === optionId);
    state.answers[questionId] = {
      selectedOptionId: optionId,
      correct: option.correct,
      answeredAt: Date.now()
    };
    saveState();
    renderCurrentQuestion();
  }

  function scheduleAutoAdvance(questionId, answeredAt) {
    const elapsed = Math.max(0, Date.now() - Number(answeredAt || Date.now()));
    const delay = Math.max(80, AUTO_ADVANCE_DELAY_MS - elapsed);
    autoAdvanceTimeout = window.setTimeout(() => {
      if (!state || state.status !== "active") return;
      const currentQuestionId = state.questionOrder[state.currentIndex];
      if (currentQuestionId !== questionId || !state.answers[questionId]) return;
      handleNext();
    }, delay);
  }

  function clearAutoAdvance() {
    if (autoAdvanceTimeout !== null) {
      window.clearTimeout(autoAdvanceTimeout);
      autoAdvanceTimeout = null;
    }
  }

  function handleNext() {
    if (!state || state.status !== "active") return;
    const questionId = state.questionOrder[state.currentIndex];
    if (!state.answers[questionId]) return;

    if (state.currentIndex >= QUESTIONS.length - 1) {
      finalizeQuiz("completed");
      return;
    }

    state.currentIndex += 1;
    saveState();
    renderCurrentQuestion();
  }

  function handleKeyboard(event) {
    if (!state || state.status !== "active" || elements.quizView.hidden) return;
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;

    const questionId = state.questionOrder[state.currentIndex];
    const answered = Boolean(state.answers[questionId]);

    if (!answered && ["1", "2", "3", "4"].includes(event.key)) {
      const buttons = [...elements.answerList.querySelectorAll(".answer-option")];
      const button = buttons[Number(event.key) - 1];
      if (button) button.click();
      return;
    }

  }

  function startTimer() {
    stopTimer();
    updateTimer();
    timerInterval = window.setInterval(updateTimer, 250);
  }

  function stopTimer() {
    if (timerInterval !== null) {
      window.clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimer() {
    if (!state || state.status !== "active") return;
    const remaining = Math.max(0, state.endsAt - Date.now());
    elements.timerText.textContent = formatDuration(remaining, true);
    elements.timerBox.classList.toggle("warning", remaining <= 10 * 60 * 1000 && remaining > 60 * 1000);
    elements.timerBox.classList.toggle("danger", remaining <= 60 * 1000);

    if (remaining <= 0) finalizeQuiz("timeout");
  }

  function finalizeQuiz(reason) {
    if (!state) return;
    if (state.status === "completed") {
      showResult(state.result || calculateResult(state), state.finishReason || reason);
      return;
    }

    stopTimer();
    clearAutoAdvance();
    state.status = "completed";
    state.finishReason = reason;
    state.completedAt = reason === "timeout" ? state.endsAt : Date.now();
    state.result = calculateResult(state);
    saveState();
    showResult(state.result, reason);
  }

  function calculateResult(sourceState) {
    const breakdown = {};
    let totalScore = 0;
    let correctCount = 0;

    for (const category of CONFIG.categories) {
      const categoryQuestions = QUESTIONS.filter((question) => question.category === category.id);
      const categoryCorrect = categoryQuestions.reduce((sum, question) => {
        const isCorrect = Boolean(sourceState.answers[question.id]?.correct);
        return sum + (isCorrect ? 1 : 0);
      }, 0);
      const points = (categoryCorrect / category.questionCount) * category.weight;
      const percent = (categoryCorrect / category.questionCount) * 100;
      breakdown[category.id] = {
        correct: categoryCorrect,
        total: category.questionCount,
        points,
        maxPoints: category.weight,
        percent,
        passedFloor: percent >= 50
      };
      correctCount += categoryCorrect;
      totalScore += points;
    }

    const coreScore = CORE_CATEGORY_IDS.reduce((sum, id) => sum + breakdown[id].points, 0);
    const allSectionsPassed = CONFIG.categories.every((category) => breakdown[category.id].passedFloor);
    const passed = totalScore >= 65 && coreScore >= 42 && allSectionsPassed;
    const thinkingRaw = breakdown.layout.points + breakdown.workflow.points + breakdown.situations.points;
    const executionRaw = breakdown.retouch.points + breakdown.visual.points + breakdown.matching.points;
    const thinkingPercent = (thinkingRaw / THINKING_MAX) * 100;
    const executionPercent = (executionRaw / EXECUTION_MAX) * 100;
    const unansweredCount = QUESTIONS.length - Object.keys(sourceState.answers).length;
    const elapsedMs = Math.min(
      TOTAL_DURATION_MS,
      Math.max(0, (sourceState.completedAt || Date.now()) - sourceState.startedAt)
    );
    const level = CONFIG.levels.find((item) => totalScore >= item.min) || CONFIG.levels.at(-1);

    return {
      totalScore,
      correctCount,
      unansweredCount,
      coreScore,
      allSectionsPassed,
      passed,
      thinkingRaw,
      thinkingPercent,
      executionRaw,
      executionPercent,
      elapsedMs,
      level,
      breakdown
    };
  }

  function showResult(result, reason) {
    const score = round1(result.totalScore);
    const degree = Math.max(0, Math.min(360, (result.totalScore / 100) * 360));
    const lowSections = CONFIG.categories.filter((category) => result.breakdown[category.id].percent < 50);

    elements.resultEyebrow.textContent = reason === "timeout" ? "HẾT THỜI GIAN" : "KẾT QUẢ BÀI THI";
    elements.resultTitle.textContent = reason === "timeout" ? "Kết quả đã được tự động chốt" : "Hoàn thành bài kiểm tra";
    elements.resultSubtitle.textContent = `${state.participantName} · ${formatDateTime(state.completedAt)}`;

    elements.passBadge.textContent = result.passed ? "ĐẠT" : "CHƯA ĐẠT";
    elements.passBadge.className = `pass-badge ${result.passed ? "pass" : "fail"}`;
    elements.totalScore.textContent = score.toFixed(1);
    elements.scoreRing.style.background = `conic-gradient(var(--accent) ${degree}deg, rgba(255,255,255,.08) ${degree}deg)`;
    elements.levelBadge.textContent = result.level.code;
    elements.levelName.textContent = `${result.level.threshold} — ${result.level.name}`;
    elements.levelDescription.textContent = result.level.description;
    elements.correctMetric.textContent = `${result.correctCount} / ${QUESTIONS.length}`;
    elements.timeMetric.textContent = formatElapsedDuration(result.elapsedMs);
    elements.unansweredMetric.textContent = String(result.unansweredCount);

    elements.thinkingScore.textContent = `${round1(result.thinkingPercent).toFixed(1)}%`;
    elements.thinkingBar.style.width = `${Math.min(100, result.thinkingPercent)}%`;
    elements.executionScore.textContent = `${round1(result.executionPercent).toFixed(1)}%`;
    elements.executionBar.style.width = `${Math.min(100, result.executionPercent)}%`;
    elements.coreScoreLabel.textContent = `Phần cốt lõi: ${round1(result.coreScore).toFixed(1)} / 65`;

    elements.scoreBreakdown.innerHTML = CONFIG.categories.map((category) => {
      const item = result.breakdown[category.id];
      return `
        <div class="breakdown-row">
          <span class="breakdown-name">${escapeHtml(category.name)} · ${item.correct}/${item.total} đúng</span>
          <span class="breakdown-score">${round1(item.points).toFixed(1)} / ${category.weight}</span>
          <span class="breakdown-track"><span style="width:${Math.min(100, item.percent)}%"></span></span>
        </div>
      `;
    }).join("");

    if (result.passed) {
      elements.resultNote.innerHTML = `<strong>Đạt đầy đủ điều kiện.</strong> Tổng điểm từ 65, phần cốt lõi từ 42/65 và không có phần nào dưới 50%.`;
    } else {
      const reasons = [];
      if (result.totalScore < 65) reasons.push(`tổng điểm dưới 65`);
      if (result.coreScore < 42) reasons.push(`phần cốt lõi dưới 42/65`);
      if (lowSections.length) reasons.push(`dưới 50% ở ${lowSections.map((category) => category.shortName).join(", ")}`);
      elements.resultNote.innerHTML = `<strong>Chưa đạt đủ điều kiện.</strong> ${capitalize(reasons.join("; "))}.`;
    }

    activeReviewFilter = "wrong";
    renderReviewHistory(result, activeReviewFilter);
    setResultTab("overview", false);
    elements.resultModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function setResultTab(tabName, scrollToTop = true) {
    const showReview = tabName === "review";
    elements.resultOverviewTab.classList.toggle("active", !showReview);
    elements.resultReviewTab.classList.toggle("active", showReview);
    elements.resultOverviewTab.setAttribute("aria-selected", String(!showReview));
    elements.resultReviewTab.setAttribute("aria-selected", String(showReview));
    elements.resultOverviewPanel.hidden = showReview;
    elements.resultReviewPanel.hidden = !showReview;
    if (scrollToTop && elements.resultDialog) {
      elements.resultDialog.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function setReviewFilter(filterName) {
    const allowed = new Set(["wrong", "correct", "all"]);
    activeReviewFilter = allowed.has(filterName) ? filterName : "wrong";

    elements.reviewFilterButtons.forEach((button) => {
      const isActive = button.dataset.reviewFilter === activeReviewFilter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (state?.result) renderReviewHistory(state.result, activeReviewFilter);
    elements.resultDialog?.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderReviewHistory(result, filterName = activeReviewFilter) {
    const order = Array.isArray(state?.questionOrder) && state.questionOrder.length === QUESTIONS.length
      ? state.questionOrder
      : QUESTIONS.map((question) => question.id);
    const wrongCount = QUESTIONS.length - result.correctCount - result.unansweredCount;
    const wrongAndBlankCount = wrongCount + result.unansweredCount;

    elements.reviewWrongCount.textContent = String(wrongAndBlankCount);
    elements.reviewCorrectCount.textContent = String(result.correctCount);
    elements.reviewAllCount.textContent = String(QUESTIONS.length);
    elements.reviewFilterButtons.forEach((button) => {
      const isActive = button.dataset.reviewFilter === filterName;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const entries = order.map((questionId, index) => {
      const question = questionById.get(questionId);
      if (!question) return null;
      const answer = state.answers[question.id];
      const status = !answer ? "unanswered" : answer.correct ? "correct" : "wrong";
      return { question, answer, status, index };
    }).filter(Boolean).filter((entry) => {
      if (filterName === "correct") return entry.status === "correct";
      if (filterName === "wrong") return entry.status !== "correct";
      return true;
    });

    if (filterName === "correct") {
      elements.reviewSummaryBadge.textContent = `${result.correctCount} câu đúng`;
    } else if (filterName === "wrong") {
      elements.reviewSummaryBadge.textContent = `${wrongCount} sai · ${result.unansweredCount} bỏ trống`;
    } else {
      elements.reviewSummaryBadge.textContent = `${result.correctCount} đúng · ${wrongCount} sai · ${result.unansweredCount} bỏ trống`;
    }

    if (!entries.length) {
      elements.resultReviewList.innerHTML = `
        <div class="review-empty-state">
          <strong>Không có câu hỏi trong nhóm này.</strong>
          <span>Chọn một bộ lọc khác để xem lịch sử bài làm.</span>
        </div>
      `;
      return;
    }

    const fragments = [];
    let activeCategoryId = null;

    for (const entry of entries) {
      const { question, answer, status, index } = entry;
      const category = categoryById.get(question.category);
      const correctOption = question.options.find((option) => option.correct);
      const selectedOption = answer
        ? question.options.find((option) => option.id === answer.selectedOptionId)
        : null;
      const optionOrder = state.optionOrders?.[question.id] || question.options.map((option) => option.id);
      const optionLabel = (optionId) => {
        const position = optionOrder.indexOf(optionId);
        return position >= 0 ? `${String.fromCharCode(65 + position)}. ` : "";
      };
      const statusText = status === "unanswered" ? "Bỏ trống" : status === "correct" ? "Đúng" : "Sai";

      if (activeCategoryId !== category.id) {
        activeCategoryId = category.id;
        const visibleInCategory = entries.filter((item) => item.question.category === category.id).length;
        fragments.push(`
          <div class="review-topic-heading">
            <span>${escapeHtml(category.name)}</span>
            <small>${visibleInCategory} câu đang hiển thị</small>
          </div>
        `);
      }

      fragments.push(`
        <article class="review-question-card is-${status}">
          <div class="review-question-header">
            <span class="review-question-number">Câu ${index + 1}</span>
            <span class="review-status is-${status}">${statusText}</span>
          </div>
          <h4>${escapeHtml(question.prompt)}</h4>
          <div class="review-answer-grid">
            <div class="review-answer-row user-answer ${status === "correct" ? "is-correct" : status === "wrong" ? "is-wrong" : "is-unanswered"}">
              <span>Bạn chọn</span>
              <p>${selectedOption ? escapeHtml(optionLabel(selectedOption.id) + selectedOption.text) : "Không có câu trả lời"}</p>
            </div>
            <div class="review-answer-row correct-answer">
              <span>Đáp án đúng</span>
              <p>${escapeHtml(optionLabel(correctOption.id) + correctOption.text)}</p>
            </div>
          </div>
          <div class="review-explanation">
            <strong>Giải thích</strong>
            <p>${escapeHtml(question.explanation)}</p>
          </div>
        </article>
      `);
    }

    elements.resultReviewList.innerHTML = fragments.join("");
  }

  async function copyResult() {
    if (!state?.result) return;
    const text = buildPlainTextResult(state.result);
    try {
      await navigator.clipboard.writeText(text);
      showToast("Đã sao chép kết quả.");
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      showToast("Đã sao chép kết quả.");
    }
  }

  function buildPlainTextResult(result) {
    const lines = [
      "TAG DES QUIZ — KẾT QUẢ",
      `Nhân sự: ${state.participantName}`,
      `Thời điểm: ${formatDateTime(state.completedAt)}`,
      `Tổng điểm: ${round1(result.totalScore).toFixed(1)}/100`,
      `Phân loại: ${result.level.threshold} — ${result.level.name}`,
      `Trạng thái: ${result.passed ? "ĐẠT" : "CHƯA ĐẠT"}`,
      `Số câu đúng: ${result.correctCount}/${QUESTIONS.length}`,
      `Thời gian: ${formatElapsedDuration(result.elapsedMs)}`,
      `Tư duy thiết kế: ${round1(result.thinkingPercent).toFixed(1)}%`,
      `Kỹ thuật thực thi: ${round1(result.executionPercent).toFixed(1)}%`,
      `Phần cốt lõi: ${round1(result.coreScore).toFixed(1)}/65`,
      "",
      "Điểm theo phần:"
    ];

    for (const category of CONFIG.categories) {
      const item = result.breakdown[category.id];
      lines.push(`- ${category.name}: ${round1(item.points).toFixed(1)}/${category.weight} (${item.correct}/${item.total} đúng)`);
    }

    return lines.join("\n");
  }

  function restartQuiz() {
    const confirmed = window.confirm("Xóa kết quả hiện tại và bắt đầu một bài thi mới?");
    if (!confirmed) return;
    clearState();
    state = null;
    document.body.style.overflow = "";
    elements.resultModal.hidden = true;
    elements.participantName.value = "";
    showLanding();
    elements.participantName.focus();
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Không thể lưu trạng thái bài thi:", error);
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn("Không thể đọc trạng thái bài thi:", error);
      return null;
    }
  }

  function clearState() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn("Không thể xóa trạng thái bài thi:", error);
    }
  }

  function isStateCompatible(candidate) {
    if (!candidate || !Array.isArray(candidate.questionOrder) || candidate.questionOrder.length !== QUESTIONS.length) return false;
    if (!candidate.questionOrder.every((id) => questionById.has(id))) return false;
    if (!candidate.optionOrders || !candidate.answers || !candidate.participantName) return false;
    return QUESTIONS.every((question) => {
      const order = candidate.optionOrders[question.id];
      return Array.isArray(order) && order.length === 4 && order.every((id) => question.options.some((option) => option.id === id));
    });
  }

  function secureShuffle(items) {
    const array = [...items];
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = randomInt(i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function randomInt(maxExclusive) {
    if (window.crypto?.getRandomValues) {
      const limit = Math.floor(0x100000000 / maxExclusive) * maxExclusive;
      const values = new Uint32Array(1);
      do {
        window.crypto.getRandomValues(values);
      } while (values[0] >= limit);
      return values[0] % maxExclusive;
    }
    return Math.floor(Math.random() * maxExclusive);
  }

  function formatDuration(milliseconds, clampToMinutes) {
    const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (clampToMinutes || minutes < 60) return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    const hours = Math.floor(minutes / 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function formatElapsedDuration(milliseconds) {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (minutes < 60) return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    const hours = Math.floor(minutes / 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function formatDateTime(timestamp) {
    return new Intl.DateTimeFormat("vi-VN", {
      dateStyle: "short",
      timeStyle: "medium"
    }).format(new Date(timestamp));
  }

  function round1(value) {
    return Math.round((value + Number.EPSILON) * 10) / 10;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function capitalize(value) {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
  }

  function showToast(message) {
    if (toastTimeout) window.clearTimeout(toastTimeout);
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    toastTimeout = window.setTimeout(() => {
      elements.toast.hidden = true;
    }, 2200);
  }
})();
