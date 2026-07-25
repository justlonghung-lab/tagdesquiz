window.QUIZ_CONFIG = {
  version: "1.4.0",
  title: "TAG DES QUIZ",
  durationMinutes: 45,
  totalPoints: 100,
  categories: [
    { id: "retouch", name: "Retouch", shortName: "Retouch", questionCount: 8, weight: 10, competency: "execution" },
    { id: "layout", name: "Bố cục, điểm nhìn và chiều sâu", shortName: "Bố cục & chiều sâu", questionCount: 15, weight: 25, competency: "thinking" },
    { id: "visual", name: "Rim light, typography và màu sắc", shortName: "Rim light & Typography", questionCount: 10, weight: 15, competency: "execution" },
    { id: "matching", name: "Matching asset và không gian", shortName: "Matching asset", questionCount: 7, weight: 15, competency: "execution" },
    { id: "workflow", name: "Workflow, brief, asset và AI", shortName: "Workflow & AI", questionCount: 5, weight: 10, competency: "thinking" },
    { id: "situations", name: "Tình huống tổng hợp", shortName: "Tình huống tổng hợp", questionCount: 13, weight: 25, competency: "thinking" }
  ],
  levels: [
    { code: "90+", min: 90, threshold: "90 điểm", name: "vjp", description: "Trình độ vjp." },
    { code: "82+", min: 82, threshold: "82 điểm", name: "khá vjp", description: "Trình độ khá vjp." },
    { code: "74+", min: 74, threshold: "74 điểm", name: "Trung bình", description: "Trình độ Trung bình." },
    { code: "65+", min: 65, threshold: "65 điểm", name: "Hơi gà", description: "Trình độ Hơi gà." },
    { code: "55+", min: 55, threshold: "55 điểm", name: "Gà", description: "Trình độ Gà." },
    { code: "<55", min: 0, threshold: "<55 điểm", name: "viết đơn", description: "Trình độ viết đơn." }
  ]
};

const q = (id, category, prompt, options, correctIndex, explanation) => ({
  id,
  category,
  prompt,
  options: options.map((text, index) => ({ id: `${id}-${index}`, text, correct: index === correctIndex })),
  explanation
});

window.QUIZ_QUESTIONS = [
  q("Q01", "retouch",
    `Một ảnh retouch được xem là đạt chất lượng tốt nhất khi nào?`,
    [
      `Da sạch và đều màu, chấp nhận giảm nhẹ texture ở những vùng dễ gây chú ý.`,
      `Form rõ hơn ảnh gốc, ánh sáng có độ tương phản mạnh và màu da đồng nhất.`,
      `Form, ánh sáng và màu được cải thiện nhưng cấu trúc và texture vẫn thuyết phục.`,
      `Khuyết điểm được xử lý gần hết, còn độ tự nhiên phụ thuộc mục đích sử dụng ảnh.`
    ], 2,
    `Retouch tốt cần cải thiện hình ảnh mà không làm mất cấu trúc, texture và cảm giác thật.`),

  q("Q02", "retouch",
    `Dấu hiệu nào đáng tin cậy nhất cho thấy một vùng cơ thể đã bị chỉnh form quá mức?`,
    [
      `Hai bên cơ thể khác nhau nhẹ do tư thế, góc máy và hướng ánh sáng.`,
      `Đường cong đổi hướng gấp, quá đều hoặc tách rời cấu trúc xung quanh.`,
      `Đường viền gọn hơn ảnh gốc nhưng vẫn giữ được độ bất đối xứng tự nhiên.`,
      `Một phía cơ thể tối hơn vì bề mặt quay xa nguồn sáng chính.`
    ], 1,
    `Form bị chỉnh quá mức thường lộ ở đường cong thiếu chuyển tiếp và không còn liên kết với cấu trúc cơ thể.`),

  q("Q03", "retouch",
    `Khi sử dụng Liquify để chỉnh form, cách làm nào an toàn và hiệu quả nhất?`,
    [
      `Dùng brush nhỏ, sửa từng điểm rồi làm mềm đường viền ở bước cuối.`,
      `Đẩy form rõ ngay từ đầu, sau đó giảm Opacity để lấy lại độ tự nhiên.`,
      `Ưu tiên chỉnh contour ngoài; thể tích bên trong xử lý bằng Dodge & Burn.`,
      `Dùng brush phù hợp, chỉnh nhẹ từng bước và thường xuyên xem tổng thể.`
    ], 3,
    `Brush phù hợp và thao tác nhẹ giúp hạn chế đường viền lồi lõm, méo texture và biến dạng background.`),

  q("Q04", "retouch",
    `Mục đích phù hợp nhất của Dodge & Burn trong retouch là gì?`,
    [
      `Làm sạch chuyển sắc cục bộ và hỗ trợ cảm giác thể tích.`,
      `Cân bằng độ sáng toàn bộ da trước khi xử lý màu và texture.`,
      `Thay đổi cảm giác hình dáng bằng cách vẽ lại vùng sáng tối chính.`,
      `Tăng contrast cục bộ để ảnh sắc hơn mà không cần dùng sharpen.`
    ], 0,
    `Dodge & Burn chủ yếu xử lý sáng tối cục bộ, làm sạch bề mặt và củng cố khối; không thay thế cân sáng hay chỉnh form.`),

  q("Q05", "retouch",
    `Dấu hiệu nào cho thấy Dodge & Burn đã bị xử lý quá tay?`,
    [
      `Highlight rõ hơn ở vùng hướng sáng, shadow vẫn giữ được độ chuyển mềm.`,
      `Da có mảng sáng tối gãy, không ăn theo bề mặt và nguồn sáng.`,
      `Một vài vùng tối được giữ lại để không làm khối trở nên quá phẳng.`,
      `Hai phía khuôn mặt có độ sáng khác nhau theo góc quay của chủ thể.`
    ], 1,
    `Dodge & Burn quá tay thường tạo mảng sáng tối giống bị tô, thay vì chuyển sắc tự nhiên theo bề mặt.`),

  q("Q06", "retouch",
    `Histogram tập trung phần lớn dữ liệu về phía bên trái thường cho biết điều gì?`,
    [
      `Ảnh có nhiều vùng tối; cần kiểm tra nội dung và clipping.`,
      `Ảnh đã mất chi tiết shadow vì dữ liệu dồn sát vùng đen.`,
      `White balance đang lạnh nên các kênh màu lệch về phía trái.`,
      `Contrast thấp vì dữ liệu chưa trải sang vùng highlight.`
    ], 0,
    `Histogram lệch trái chỉ cho biết ảnh có nhiều dữ liệu tối; ảnh low-key hoặc nền tối vẫn có thể hoàn toàn hợp lý.`),

  q("Q07", "retouch",
    `Nhận định nào chính xác nhất về một histogram được xem là “tốt”?`,
    [
      `Phần lớn dữ liệu nằm gần midtone để hạn chế mất chi tiết ở hai đầu.`,
      `Dữ liệu phủ đủ từ shadow đến highlight để ảnh có độ tương phản tốt.`,
      `Hai mép histogram không bị chạm, trừ các vùng đen trắng có chủ ý.`,
      `Phân bố phù hợp nội dung ảnh và không mất chi tiết ngoài chủ ý.`
    ], 3,
    `Không có hình histogram chuẩn cho mọi ảnh; điều quan trọng là nó phù hợp nội dung và không clipping ngoài chủ ý.`),

  q("Q08", "retouch",
    `Khi một ảnh bị mất nét hoặc thiếu chi tiết, nhận định nào đúng nhất?`,
    [
      `Sharpen có thể phục hồi chi tiết nếu ảnh gốc vẫn còn đủ độ phân giải.`,
      `AI tạo chi tiết hợp lý nhưng không bảo đảm đúng dữ liệu gốc.`,
      `Clarity và Texture có thể thay thế upscale ở vùng mất nét nhẹ.`,
      `Upscale trước rồi sharpen giúp tái tạo cấu trúc gần đúng với ảnh gốc.`
    ], 1,
    `Sharpen và AI có thể cải thiện cảm giác sắc nét hoặc tạo chi tiết dự đoán, nhưng không bảo đảm phục hồi dữ liệu thật đã mất.`),

  q("Q09", "layout",
    `Khi nhận một kịch bản dài từ content, designer nên thực hiện bước nào trước tiên?`,
    [
      `Tìm reference gần ngành hàng để xác định giới hạn phong cách có thể dùng.`,
      `Chọn asset chính để biết ý tưởng nào khả thi với nguồn hình hiện có.`,
      `Tinh gọn nội dung, xác định thông điệp chính và thứ tự thông tin.`,
      `Dựng wireframe nhanh để đo lượng chữ và khoảng trống còn lại.`
    ], 2,
    `Phải hiểu và phân cấp nội dung trước; reference, asset và layout chỉ hiệu quả khi bài toán đã được làm rõ.`),

  q("Q10", "layout",
    `Đâu là cách phân biệt đúng nhất giữa mood và asset?`,
    [
      `Mood là cảm giác tổng thể; asset là đối tượng cụ thể.`,
      `Mood là bảng màu và ánh sáng; asset là hình ảnh và typography trong layout.`,
      `Mood là thông điệp chính; asset là các chi tiết hỗ trợ nội dung phụ.`,
      `Mood do content xác định; asset do designer quyết định trong quá trình dựng.`
    ], 0,
    `Mood mô tả cảm giác tổng thể, còn asset là những đối tượng cụ thể dùng để tạo ra cảm giác ấy.`),

  q("Q11", "layout",
    `Reference nào phù hợp nhất với một brief cụ thể?`,
    [
      `Reference có kỹ thuật đẹp và đủ chi tiết để phát triển thành key visual.`,
      `Reference có bảng màu gần thương hiệu và cùng tệp khách hàng mục tiêu.`,
      `Reference cùng ngành hàng, dù cấu trúc nội dung và mood hơi khác.`,
      `Reference có logic bố cục hoặc cách xử lý giải được bài toán hiện tại.`
    ], 3,
    `Reference hữu ích nhất khi cung cấp cách giải quyết phù hợp, không chỉ vì đẹp, cùng màu hoặc cùng ngành.`),

  q("Q12", "layout",
    `Cách sử dụng reference nào phù hợp nhất?`,
    [
      `Giữ cấu trúc hiệu quả, sau đó thay nội dung, màu sắc và asset cho đúng thương hiệu.`,
      `Phân tích nguyên lý hiệu quả rồi chuyển hóa theo brief và bối cảnh mới.`,
      `Kết hợp nhiều reference để mỗi phần thiết kế có một nguồn cảm hứng riêng.`,
      `Chỉ tham khảo màu và chất liệu để tránh bị ảnh hưởng quá nhiều về bố cục.`
    ], 1,
    `Cần học nguyên lý và chuyển hóa; giữ nguyên cấu trúc hoặc ghép nhiều mẫu vẫn dễ dẫn đến sao chép máy móc.`),

  q("Q13", "layout",
    `Bố cục trung tâm phù hợp nhất trong trường hợp nào?`,
    [
      `Thiết kế có nhiều nhóm thông tin cần đọc theo một trật tự rõ ràng.`,
      `Cần nhấn mạnh một chủ thể hoặc biểu tượng theo cách trực diện.`,
      `Cần tạo cảm giác tự nhiên, ít sắp đặt và có nhiều chuyển động.`,
      `Các thành phần quan trọng tương đương và cần được chia đều trong khung.`
    ], 1,
    `Bố cục trung tâm hiệu quả nhất khi có một chủ thể chính rõ ràng cần được nhấn mạnh trực diện.`),

  q("Q14", "layout",
    `Bố cục đối xứng thường mang lại cảm giác nào?`,
    [
      `Cân bằng, trang trọng và có tính nghi thức.`,
      `Chuyển động, tốc độ và cảm giác bất ổn.`,
      `Tự nhiên, gần gũi và ít có sự sắp đặt.`,
      `Nhiều lớp, phức tạp và giàu cảm giác không gian.`
    ], 0,
    `Đối xứng thường gợi sự cân bằng, ổn định, trang trọng và tính biểu tượng.`),

  q("Q15", "layout",
    `Điểm nhìn chính được hiểu đúng nhất là gì?`,
    [
      `Thành phần lớn nhất và có tương phản cao nhất trong thiết kế.`,
      `Thành phần nằm gần tâm thị giác hoặc trục bố cục chính.`,
      `Khu vực người xem chú ý đầu tiên hoặc cần ghi nhớ nhất.`,
      `Nội dung mang giá trị thương mại cao nhất trong brief.`
    ], 2,
    `Điểm nhìn là nơi mắt được dẫn tới trước hoặc cần ghi nhớ nhất; nó không phụ thuộc riêng vào kích thước hay vị trí.`),

  q("Q16", "layout",
    `Điều gì thường xảy ra khi ba thành phần đều có kích thước lớn, độ sáng cao và độ tương phản gần bằng nhau?`,
    [
      `Các nội dung quan trọng được tiếp nhận cùng lúc nên thông tin đầy đủ hơn.`,
      `Thành phần gần trung tâm vẫn tự động trở thành điểm nhìn chính.`,
      `Ba thành phần tạo thành một cụm mạnh và hỗ trợ nhau về thị giác.`,
      `Các thành phần cạnh tranh nhau và làm thứ tự ưu tiên trở nên mơ hồ.`
    ], 3,
    `Khi nhiều thành phần cùng có tín hiệu nổi bật tương đương, người xem khó xác định thứ tự ưu tiên.`),

  q("Q17", "layout",
    `Biện pháp nào ít phù hợp nhất khi muốn làm nổi điểm nhìn chính?`,
    [
      `Tăng tương phản có chọn lọc ở khu vực cần ưu tiên.`,
      `Giảm chi tiết và độ nổi ở những vùng cạnh tranh.`,
      `Tăng hiệu ứng cho asset phụ để bố cục cân bằng hơn.`,
      `Dùng khoảng trống để tách thành phần quan trọng.`
    ], 2,
    `Tăng độ nổi cho asset phụ sẽ khiến chúng cạnh tranh với điểm nhìn chính, dù bố cục có vẻ cân bằng hơn.`),

  q("Q18", "layout",
    `Đặc điểm nào thường giúp một asset có cảm giác nằm xa hơn?`,
    [
      `Nhỏ hơn, ít tương phản hơn và giảm nhẹ độ bão hòa.`,
      `Nét hơn, sáng hơn để vẫn nhận ra khi kích thước nhỏ.`,
      `Có shadow đậm hơn để tăng cảm giác khối và khoảng cách.`,
      `Chuyển sang màu lạnh hơn dù nguồn sáng không thay đổi.`
    ], 0,
    `Vật thể ở xa thường nhỏ hơn và giảm độ rõ, độ tương phản, độ bão hòa do ảnh hưởng của khoảng cách.`),

  q("Q19", "layout",
    `Overlap hỗ trợ tạo chiều sâu bằng cách nào?`,
    [
      `Tạo điểm tiếp xúc để các vật thể có cảm giác cùng một mặt phẳng.`,
      `Vật thể che nhau, từ đó xác định rõ thứ tự trước và sau.`,
      `Thu hẹp khoảng cách để nhóm asset trông chặt chẽ hơn.`,
      `Tạo vùng giao nhau có tương phản cao và thu hút mắt.`
    ], 1,
    `Khi một vật thể che một phần vật thể khác, mắt thường hiểu vật thể che nằm ở phía trước.`),

  q("Q20", "layout",
    `Cách sử dụng blur để tạo chiều sâu nào hợp lý nhất?`,
    [
      `Dùng cùng một mức blur cho background để chủ thể tách rõ.`,
      `Blur các asset phụ, giữ nguyên độ nét của nội dung chính.`,
      `Thay đổi độ blur theo khoảng cách và mặt phẳng lấy nét.`,
      `Blur nhiều hơn ở asset có chất lượng thấp để đồng bộ hình ảnh.`
    ], 2,
    `Blur tạo chiều sâu khi thay đổi theo khoảng cách và mặt phẳng lấy nét, không phải theo mức độ quan trọng hay chất lượng asset.`),

  q("Q21", "layout",
    `Một sản phẩm đặt trên bục nhưng không có contact shadow thường tạo cảm giác gì?`,
    [
      `Sản phẩm lơ lửng hoặc chưa tiếp xúc thật với bề mặt.`,
      `Sản phẩm sạch hơn vì vùng tiếp xúc không bị tối.`,
      `Nguồn sáng mềm nên bóng đổ gần như không nhìn thấy.`,
      `Bục thấp hơn vì thiếu vùng tối nối giữa hai vật thể.`
    ], 0,
    `Contact shadow là tín hiệu trực tiếp cho biết vật thể đang chạm vào bề mặt.`),

  q("Q22", "layout",
    `Khoảng trống trong thiết kế nên được hiểu như thế nào?`,
    [
      `Vùng chưa có nội dung, có thể lấp nếu bố cục chưa đủ nổi bật.`,
      `Không gian có chủ đích để phân nhóm, dẫn mắt và tạo nhịp thở.`,
      `Vùng background không chứa texture, ánh sáng hoặc asset.`,
      `Diện tích còn lại sau khi đặt xong các nội dung bắt buộc.`
    ], 1,
    `Khoảng trống là một thành phần chủ động của bố cục, không phải phần thừa còn lại.`),

  q("Q23", "layout",
    `Khi nhận thấy một góc thiết kế còn trống, designer nên xử lý thế nào?`,
    [
      `Thêm asset nhỏ để cân bằng trọng lượng với phía đối diện.`,
      `Lặp lại một chi tiết đã có để tăng nhịp điệu thị giác.`,
      `Kiểm tra vai trò của khoảng trống trước khi quyết định thêm gì.`,
      `Thêm ánh sáng hoặc texture vì ít gây rối hơn hình ảnh.`
    ], 2,
    `Khoảng trống có thể đang hỗ trợ phân cấp, cân bằng hoặc khả năng đọc; không nên lấp theo phản xạ.`),

  q("Q24", "visual",
    `Rim light được hiểu đúng nhất là gì?`,
    [
      `Ánh sáng viền do nguồn sáng phía sau hoặc bên cạnh chủ thể.`,
      `Đường sáng chạy quanh layer để chủ thể tách khỏi background.`,
      `Ánh sáng phụ dùng để mở shadow và làm rõ cấu trúc chủ thể.`,
      `Hiệu ứng glow đặt sát mép sau khi tách nền sạch.`
    ], 0,
    `Rim light là ánh sáng có nguồn và chịu ảnh hưởng của bề mặt; nó không đơn thuần là Stroke hay Glow.`),

  q("Q25", "visual",
    `Đâu không phải nhiệm vụ chính của rim light?`,
    [
      `Tách chủ thể khỏi vùng background có độ sáng gần nhau.`,
      `Liên kết chủ thể với nguồn sáng đang có trong bối cảnh.`,
      `Thay key light để mô tả toàn bộ khối và chi tiết.`,
      `Tăng cảm giác chiều sâu và độ hoàn thiện của hình ảnh.`
    ], 2,
    `Rim light là ánh sáng viền hỗ trợ, không thay thế ánh sáng chính dùng để mô tả toàn bộ cấu trúc.`),

  q("Q26", "visual",
    `Trước khi tạo rim light, câu hỏi nào cần được trả lời đầu tiên?`,
    [
      `Blend mode nào giữ được màu sáng mà không làm bệt biên?`,
      `Nguồn sáng ở đâu, màu gì và tác động vào cạnh nào?`,
      `Độ dày bao nhiêu để rim light vẫn nhìn rõ trên mobile?`,
      `Nên dùng layer mới hay chỉnh trực tiếp vào layer người mẫu?`
    ], 1,
    `Nguồn sáng và vị trí tác động phải được xác định trước khi chọn công cụ hoặc độ dày viền sáng.`),

  q("Q27", "visual",
    `Vì sao một đường sáng có độ dày và độ sáng bằng nhau chạy quanh toàn bộ người mẫu thường thiếu tự nhiên?`,
    [
      `Rim light chủ yếu chỉ xuất hiện ở tóc, vai và các cạnh cứng.`,
      `Hai phía cùng có rim light sẽ khiến nguồn sáng bị mâu thuẫn.`,
      `Viền sáng đều làm đường cắt mềm và giảm độ nét của chủ thể.`,
      `Ánh sáng thay đổi theo hướng mặt, độ cong, chất liệu và vật cản.`
    ], 3,
    `Ánh sáng thật thay đổi theo hướng bề mặt và mức độ bị che; vì vậy rim light hiếm khi đều quanh toàn bộ chủ thể.`),

  q("Q28", "visual",
    `Đặc điểm quan trọng nhất của typo chính là gì?`,
    [
      `Có mức độ cách điệu cao hơn để tạo cá tính cho key visual.`,
      `Truyền tải key message và giữ thứ tự ưu tiên đầu tiên.`,
      `Có kích thước lớn nhất và nằm gần trung tâm bố cục.`,
      `Dùng font display khác với nhóm thông tin hỗ trợ.`
    ], 1,
    `Typo chính được xác định bởi vai trò truyền tải và thứ tự ưu tiên, không chỉ bởi kích thước hay loại font.`),

  q("Q29", "visual",
    `Typo phụ nên ưu tiên yếu tố nào?`,
    [
      `Khả năng đọc và chức năng hỗ trợ nội dung chính.`,
      `Độ khác biệt đủ rõ để tách khỏi phong cách của title.`,
      `Kích thước đủ lớn để không mất khi xem trên điện thoại.`,
      `Một điểm nhấn riêng nhưng tiết chế hơn typo chính.`
    ], 0,
    `Typo phụ cần đọc rõ và bổ sung thông tin, đồng thời không cạnh tranh với key message.`),

  q("Q30", "visual",
    `Nguyên tắc sử dụng font nào quan trọng nhất?`,
    [
      `Mỗi cấp nội dung dùng một font riêng để phân biệt nhanh.`,
      `Chỉ dùng một font family và thay weight cho đồng bộ.`,
      `Giới hạn số font, thường hai family và không quá ba font.`,
      `Có thể dùng nhiều font nếu cùng màu và cùng cách căn lề.`
    ], 2,
    `Điều quan trọng là kiểm soát tính nhất quán; nhiều cấp độ vẫn có thể tạo bằng size, weight và spacing thay vì thêm font.`),

  q("Q31", "visual",
    `Khi phân cấp chữ chưa rõ, nên thử điều gì trước khi thêm một font mới?`,
    [
      `Tăng tương phản màu giữa các nhóm nội dung chính và phụ.`,
      `Điều chỉnh size, weight, spacing, line break và vị trí.`,
      `Thêm Stroke hoặc shadow để tách từng nhóm chữ.`,
      `Chuyển nội dung quan trọng sang chữ in hoa.`
    ], 1,
    `Phân cấp chữ thường được giải quyết trước bằng tỷ lệ, weight, spacing, line break và vị trí, không phải bằng cách thêm font.`),

  q("Q32", "visual",
    `Màu bổ túc thường có đặc điểm nào?`,
    [
      `Nằm gần nhau trên vòng tròn màu và tạo cảm giác liền mạch.`,
      `Có độ sáng tương tự nhưng khác nhau về độ bão hòa.`,
      `Nằm đối diện nhau trên vòng tròn màu và tạo tương phản mạnh.`,
      `Gồm một màu nóng và một màu trung tính để dễ cân bằng.`
    ], 2,
    `Màu bổ túc nằm đối diện nhau trên vòng tròn màu, tạo tương phản mạnh nhưng cần kiểm soát tỷ lệ và độ bão hòa.`),

  q("Q33", "visual",
    `Khi sử dụng đỏ rượu vang và vàng kim cho thiết kế Tết, yếu tố nào quan trọng nhất?`,
    [
      `Giữ độ bão hòa cao để màu không mất cảm giác lễ hội.`,
      `Dùng vàng cho điểm chính và đỏ cho các vùng nền còn lại.`,
      `Chia tỷ lệ hai màu tương đối đều để bố cục cân bằng.`,
      `Kiểm soát tỷ lệ, độ sáng, tương phản và chất liệu.`
    ], 3,
    `Độ cao cấp phụ thuộc cách phân bổ, tương phản và xử lý chất liệu, không chỉ phụ thuộc việc chọn đúng bảng màu.`),

  q("Q34", "matching",
    `Matching asset trong manipulation bao gồm những yếu tố nào?`,
    [
      `Hue, độ bão hòa và một lớp màu chung cho toàn bộ hình.`,
      `Ánh sáng, màu, tương phản, noise, độ nét, shadow và màu môi trường.`,
      `Góc máy, kích thước, chất lượng file và mức độ tách nền.`,
      `Độ phân giải, chất liệu và cùng một preset Camera Raw.`
    ], 1,
    `Matching là tổng hợp nhiều tín hiệu thị giác, đặc biệt là ánh sáng, màu, độ nét, noise và shadow.`),

  q("Q35", "matching",
    `Một asset sáng từ bên trái nhưng background có nguồn sáng chính từ bên phải. Nên ưu tiên xử lý gì?`,
    [
      `Sửa hướng sáng của asset trước rồi mới cân màu.`,
      `Áp LUT chung để hai thành phần có cùng tone tổng thể.`,
      `Giảm độ sáng asset để hướng sáng bớt gây chú ý.`,
      `Thêm rim light bên phải để tạo một nguồn sáng bổ sung.`
    ], 0,
    `Sai hướng sáng là lỗi không gian cơ bản; cần xử lý logic ánh sáng trước rồi mới tinh chỉnh màu.`),

  q("Q36", "matching",
    `Một asset có độ bão hòa màu cao hơn hẳn các thành phần còn lại thường gây ra vấn đề gì?`,
    [
      `Asset có vẻ gần hơn, phù hợp nếu được đặt ở lớp trước.`,
      `Asset dễ tách khỏi không gian và giành điểm nhìn ngoài ý muốn.`,
      `Asset rõ hơn nhưng vẫn hòa nếu hue đã được matching.`,
      `Asset tạo tương phản cần thiết để bảng màu bớt đơn điệu.`
    ], 1,
    `Độ bão hòa là tín hiệu về điểm nhìn và khoảng cách; chênh lệch không chủ đích dễ làm asset bị “dán lên”.`),

  q("Q37", "matching",
    `Background có sương mờ nhưng một asset được đặt ở xa lại có black point sâu, độ nét và độ tương phản rất cao. Vấn đề chính là gì?`,
    [
      `Asset không tuân theo phối cảnh xa–gần nên bị cảm nhận ở gần hơn.`,
      `Background thiếu tương phản nên không giữ được độ sâu của bố cục.`,
      `Asset quá nhỏ nên cần độ rõ cao để vẫn nhận biết được hình dạng.`,
      `Asset thiếu màu môi trường nên chưa hòa với bảng màu chung.`
    ], 0,
    `Trong phối cảnh xa–gần, vật thể ở xa thường giảm độ rõ, độ tương phản và độ bão hòa màu.`),

  q("Q38", "matching",
    `Vì sao cần match noise hoặc grain giữa các asset?`,
    [
      `Noise giúp che đường cắt và bổ sung chi tiết cho ảnh mềm.`,
      `Grain làm các asset có độ nét cảm nhận tương đương nhau.`,
      `Chênh lệch kết cấu hạt có thể làm lộ nguồn ảnh khác nhau.`,
      `Noise giúp manipulation có cảm giác điện ảnh và thống nhất hơn.`
    ], 2,
    `Một asset quá sạch cạnh một ảnh nhiều noise, hoặc ngược lại, dễ làm lộ việc ghép từ nhiều nguồn.`),

  q("Q39", "matching",
    `Một asset phụ được sharpen mạnh hơn chủ thể chính có thể gây hậu quả gì?`,
    [
      `Asset phụ giành điểm nhìn và phá logic xa–gần.`,
      `Chủ thể chính mềm hơn nên có cảm giác tự nhiên hơn.`,
      `Thiết kế rõ hơn ở kích thước nhỏ mà vẫn giữ hierarchy.`,
      `Chỉ gây vấn đề khi asset phụ có diện tích lớn.`
    ], 0,
    `Độ nét là một tín hiệu điểm nhìn và khoảng cách; asset phụ quá nét có thể trở nên nổi hơn chủ thể chính.`),

  q("Q40", "matching",
    `Nhận định nào đúng nhất về các công cụ auto match màu?`,
    [
      `Có thể dùng làm kết quả cuối nếu hai ảnh có điều kiện sáng gần nhau.`,
      `Chỉ phù hợp để thử nhanh, không nên xuất hiện trong quy trình chính thức.`,
      `Có thể sửa phần lớn lỗi ghép nếu thêm LUT và grain tổng thể.`,
      `Hữu ích làm điểm khởi đầu nhưng vẫn cần kiểm tra thủ công.`
    ], 3,
    `Auto match hỗ trợ tạo nền ban đầu, nhưng không hiểu đầy đủ vai trò asset, nguồn sáng và thứ tự điểm nhìn.`),

  q("Q41", "workflow",
    `Cách tìm asset từ brief hiệu quả nhất là gì?`,
    [
      `Tìm bằng nguyên câu brief để giữ đầy đủ ngữ cảnh và sắc thái.`,
      `Tách thành đối tượng, hành động, chất liệu, góc nhìn và phong cách.`,
      `Tìm reference hoàn chỉnh rồi lấy tên các asset xuất hiện trong đó.`,
      `Chọn asset chính đẹp trước rồi phát triển hướng còn lại theo asset.`
    ], 1,
    `Tách brief thành các nhóm keyword cụ thể giúp tìm kiếm linh hoạt và sát nhu cầu ghép hơn.`),

  q("Q42", "workflow",
    `Nhóm nền tảng nào phù hợp hơn để tìm reference và mood?`,
    [
      `Pinterest, Behance và Huaban.`,
      `Freepik, Envato Elements và Shutterstock.`,
      `Midjourney, Firefly và Generative Fill.`,
      `Google Images, Freepik và Pinterest.`
    ], 0,
    `Pinterest, Behance và Huaban thiên về tìm hướng hình ảnh; các nền tảng stock và AI thiên về tìm hoặc tạo asset.`),

  q("Q43", "workflow",
    `Khi yêu cầu AI tạo một asset để ghép vào key visual, nhóm thông tin nào quan trọng nhất?`,
    [
      `Tên vật thể, màu thương hiệu và tỷ lệ khung hình.`,
      `Vật thể, góc máy, chất liệu, hướng sáng và phong cách.`,
      `Tên chiến dịch, khách hàng mục tiêu và nội dung ưu đãi.`,
      `Độ phân giải, định dạng file và kích thước đầu ra.`
    ], 1,
    `Góc máy, chất liệu và hướng sáng quyết định trực tiếp khả năng ghép asset vào không gian đang dựng.`),

  q("Q44", "workflow",
    `Content gửi brief: “Làm cho sang, đẹp, bắt mắt và có chiều sâu.” Designer nên làm gì?`,
    [
      `Tìm một reference cao cấp để cả hai bên thống nhất cách hiểu.`,
      `Dựng bản nháp nhanh rồi dựa vào phản hồi để làm rõ yêu cầu.`,
      `Hỏi rõ đối tượng, key message, mood, kênh dùng và điều cần tránh.`,
      `Tự chọn hướng vì các tiêu chí trên thuộc chuyên môn của designer.`
    ], 2,
    `Những từ như “sang” hay “bắt mắt” quá chủ quan; cần chuyển chúng thành tiêu chí cụ thể trước khi triển khai.`),

  q("Q45", "workflow",
    `Khi content cung cấp quá nhiều nội dung cho một poster, cách xử lý phù hợp nhất là gì?`,
    [
      `Giữ đủ nội dung rồi phân cấp bằng size, màu và khoảng cách.`,
      `Chỉ giữ thông tin ảnh hưởng trực tiếp đến quyết định của khách hàng.`,
      `Đề xuất rút gọn hoặc chuyển một phần sang caption hay frame phụ.`,
      `Giảm hình ảnh và ưu tiên diện tích cho nội dung chữ bắt buộc.`
    ], 2,
    `Designer cần đề xuất hệ thống truyền tải và xác nhận với content, thay vì tự ý bỏ hoặc nhồi toàn bộ thông tin.`),

  q("Q46", "situations",
    `Người mẫu đã được chỉnh về cùng tone đỏ vàng với background nhưng vẫn có cảm giác bị “dán lên”. Nguyên nhân có khả năng lớn nhất là gì?`,
    [
      `Người mẫu chưa nhận đủ màu đỏ phản xạ từ môi trường.`,
      `Độ bão hòa của người mẫu vẫn cao hơn vùng background.`,
      `Ánh sáng, shadow, độ nét hoặc phối cảnh chưa đồng nhất.`,
      `Background chưa có đủ grain để đồng bộ texture.`
    ], 2,
    `Cùng tone màu chưa đủ; các tín hiệu không gian như ánh sáng, shadow, độ nét và phối cảnh mới quyết định độ hòa nhập.`),

  q("Q47", "situations",
    `Một key visual có đầy đủ người mẫu, title, hoa, quà tặng, đèn lồng và nhiều hiệu ứng nhưng vẫn không có cảm giác cao cấp. Nguyên nhân hợp lý nhất là gì?`,
    [
      `Khoảng trống chưa được chia đều giữa bốn cạnh của khung.`,
      `Phân cấp, khoảng trống và cường độ hiệu ứng chưa được kiểm soát.`,
      `Các asset vàng kim chưa có cùng một sắc độ và độ bóng.`,
      `Số lượng chi tiết trang trí chưa cân bằng giữa hai phía.`
    ], 1,
    `Cảm giác cao cấp đến từ sự kiểm soát và tiết chế, không phải chỉ từ số lượng asset hay màu vàng kim.`),

  q("Q48", "situations",
    `Trước khi xuất file, cách kiểm tra tổng thể nào hiệu quả nhất?`,
    [
      `Kiểm tra ảnh ở 100%, texture và đường cắt.`,
      `Kiểm tra thumbnail, brief và bố cục.`,
      `Kiểm tra màu, font và kích thước xuất.`,
      `Kiểm tra tên file, layer và định dạng.`
    ], 1,
    `Thumbnail giúp nhìn thứ tự điểm nhìn, brief giúp xác nhận đúng mục tiêu, còn bố cục giúp kiểm tra tổng thể trước khi xuất.`),

  q("Q49", "situations",
    `Title là thành phần có kích thước lớn nhất nhưng người xem vẫn chú ý đến hộp quà trước. Nguyên nhân hợp lý nhất là gì?`,
    [
      `Hộp quà mạnh hơn về sáng, màu, vị trí hoặc tương phản.`,
      `Title chưa nằm đúng tâm thị giác nên kích thước không phát huy tác dụng.`,
      `Hộp quà là vật thể ba chiều nên tự nhiên thu hút hơn typography.`,
      `Title chưa có hiệu ứng đủ mạnh để cân bằng với asset.`
    ], 0,
    `Kích thước chỉ là một tín hiệu; màu, tương phản, vị trí và độ chi tiết vẫn có thể khiến hộp quà nổi hơn.`),

  q("Q50", "situations",
    `Một thiết kế đã có overlap và blur nhưng vẫn tạo cảm giác phẳng. Nên kiểm tra yếu tố nào tiếp theo?`,
    [
      `Tăng blur ở vật thể xa để chênh lệch khoảng cách rõ hơn.`,
      `Kiểm tra tỷ lệ, phối cảnh, ánh sáng, tương phản và shadow.`,
      `Thêm lớp tiền cảnh lớn để chia thiết kế thành ba tầng rõ ràng.`,
      `Giảm độ nét background để chủ thể được tách mạnh hơn.`
    ], 1,
    `Chiều sâu cần nhiều tín hiệu phối hợp; overlap và blur đơn lẻ không thể bù cho tỷ lệ, ánh sáng hoặc shadow sai.`),

  q("Q51", "situations",
    `Người mẫu có rim light vàng rất mạnh nhưng vẫn không tách được khỏi background nhiều chi tiết. Cách xử lý phù hợp nhất là gì?`,
    [
      `Tăng rim light đến khi đường viền đủ rõ ở kích thước nhỏ.`,
      `Thêm glow mềm phía sau để tạo vùng đệm quanh người mẫu.`,
      `Giảm chi tiết hoặc tương phản background sát đường bao chủ thể.`,
      `Thêm rim light màu đối lập ở cạnh còn lại để tăng độ tách.`
    ], 2,
    `Nếu background cạnh đường bao quá cạnh tranh, cần giảm chính vùng đó thay vì tiếp tục tăng ánh sáng trên người mẫu.`),

  q("Q52", "situations",
    `Một dải đèn lồng nằm ở xa nhưng nét và có độ tương phản mạnh hơn khuôn mặt người mẫu. Cách xử lý nào hợp lý nhất?`,
    [
      `Sharpen khuôn mặt để hai vùng có độ rõ tương đương.`,
      `Giảm độ rõ, tương phản và độ bão hòa của đèn lồng.`,
      `Tăng kích thước người mẫu để lấy lại ưu thế về điểm nhìn.`,
      `Blur toàn bộ background để bảo đảm người mẫu luôn nét nhất.`
    ], 1,
    `Nên giảm tín hiệu cạnh tranh của vật thể xa theo logic không gian, thay vì tăng mọi thứ quanh chủ thể chính.`),

  q("Q53", "situations",
    `Designer đã thử nhiều font nhưng title vẫn chưa thuyết phục. Bước kiểm tra hợp lý nhất là gì?`,
    [
      `Kiểm tra nội dung, xuống dòng, tỷ lệ, tracking và vị trí.`,
      `Chọn font có nhiều nét trang trí hơn để tăng cá tính.`,
      `Thêm texture và hiệu ứng để title hòa vào key visual.`,
      `Đổi màu title sang màu tương phản mạnh hơn background.`
    ], 0,
    `Vấn đề có thể nằm ở cách tổ chức chữ và tỷ lệ, không nằm ở việc chưa tìm đúng font.`),

  q("Q54", "situations",
    `AI tạo được một asset rất đẹp nhưng góc máy khác hoàn toàn bố cục hiện tại. Phương án phù hợp nhất là gì?`,
    [
      `Dùng Perspective Warp để đưa asset về đúng góc bố cục.`,
      `Đặt asset ở vùng phụ để sự khác biệt ít bị chú ý.`,
      `Gen lại với góc máy cụ thể hoặc tìm asset phù hợp hơn.`,
      `Dùng blur và shadow để asset hòa vào không gian hiện tại.`
    ], 2,
    `Warp mạnh dễ phá hình khối và chất liệu; asset đẹp nhưng sai góc vẫn không phù hợp với bài toán.`),

  q("Q55", "situations",
    `Một thiết kế có khoảng trống lớn bên phải, trong khi toàn bộ người mẫu và title nằm bên trái. Nhận định nào hợp lý nhất?`,
    [
      `Khoảng trống là lỗi vì trọng lượng thị giác bị lệch sang một phía.`,
      `Cần thêm asset phía phải để đưa bố cục về cân bằng đối xứng.`,
      `Khoảng trống có thể đúng nếu phục vụ hướng nhìn hoặc mục đích.`,
      `Nên căn giữa nhóm nội dung để tránh phụ thuộc vào vùng trống.`
    ], 2,
    `Cân bằng không đồng nghĩa chia đều; khoảng trống có thể dẫn mắt, tạo hướng hoặc dành cho nội dung ở định dạng khác.`),

  q("Q56", "situations",
    `Background có nguồn sáng vàng từ phía sau bên trái, nhưng rim light vàng lại xuất hiện mạnh ở toàn bộ cạnh phải người mẫu. Cách đánh giá nào đúng nhất?`,
    [
      `Vẫn hợp lý nếu rim light giúp đường bao người mẫu rõ hơn.`,
      `Có thể chấp nhận nếu background có nhiều bề mặt phản sáng.`,
      `Thiếu logic với nguồn sáng chính và cần kiểm tra lại hướng sáng.`,
      `Chỉ cần giảm Opacity để sai lệch không còn nổi bật.`
    ], 2,
    `Rim light phải được giải thích bằng nguồn sáng trực tiếp hoặc phản xạ hợp lý; hiệu quả tách nền không đủ để biện minh cho sai hướng.`),

  q("Q57", "situations",
    `Content yêu cầu title, quà tặng, thời gian và CTA đều phải nổi bật ngang nhau. Designer nên xử lý thế nào?`,
    [
      `Dùng bốn màu tương phản để mỗi nhóm đều có nhận diện riêng.`,
      `Đề xuất thứ tự đọc và phân cấp theo mục tiêu truyền thông.`,
      `Gom cả bốn nhóm vào một khối để người xem tiếp nhận đồng thời.`,
      `Tăng kích thước chữ và giảm bớt asset trang trí xung quanh.`
    ], 1,
    `Dù mọi nội dung đều quan trọng, thiết kế vẫn cần thứ tự đọc và mức ưu tiên để người xem tiếp nhận hiệu quả.`),

  q("Q58", "situations",
    `Một asset đã có đúng màu, đúng hướng sáng và đúng phối cảnh nhưng vẫn chưa hòa vào thiết kế. Yếu tố nào nên được kiểm tra tiếp?`,
    [
      `Độ nét, noise, đường cắt, shadow tiếp xúc và màu môi trường.`,
      `Định dạng file và profile màu của asset so với background.`,
      `Số lượng Adjustment Layer và thứ tự blend mode đang sử dụng.`,
      `Cấu trúc group và vị trí layer trong file thiết kế.`
    ], 0,
    `Sau màu, ánh sáng và phối cảnh, các khác biệt về biên cắt, noise, độ nét, shadow và màu môi trường thường làm lộ việc ghép.`)
];
