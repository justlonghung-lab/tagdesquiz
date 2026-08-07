window.QUIZ_CONFIG = {
  "version": "1.4.1",
  "title": "TAG DES QUIZ",
  "durationMinutes": 45,
  "totalPoints": 100,
  "categories": [
    {
      "id": "retouch",
      "name": "Retouch",
      "shortName": "Retouch",
      "questionCount": 8,
      "weight": 10,
      "competency": "execution"
    },
    {
      "id": "layout",
      "name": "Bố cục, điểm nhìn và chiều sâu",
      "shortName": "Bố cục & chiều sâu",
      "questionCount": 15,
      "weight": 25,
      "competency": "thinking"
    },
    {
      "id": "visual",
      "name": "Rim light, typography và màu sắc",
      "shortName": "Rim light & Typography",
      "questionCount": 10,
      "weight": 15,
      "competency": "execution"
    },
    {
      "id": "matching",
      "name": "Matching asset và không gian",
      "shortName": "Matching asset",
      "questionCount": 7,
      "weight": 15,
      "competency": "execution"
    },
    {
      "id": "workflow",
      "name": "Workflow, brief, asset và AI",
      "shortName": "Workflow & AI",
      "questionCount": 5,
      "weight": 10,
      "competency": "thinking"
    },
    {
      "id": "situations",
      "name": "Tình huống tổng hợp",
      "shortName": "Tình huống tổng hợp",
      "questionCount": 13,
      "weight": 25,
      "competency": "thinking"
    }
  ],
  "levels": [
    {
      "code": "90+",
      "min": 90,
      "threshold": "90 điểm",
      "name": "vjp",
      "description": "Trình độ vjp."
    },
    {
      "code": "82+",
      "min": 82,
      "threshold": "82 điểm",
      "name": "khá vjp",
      "description": "Trình độ khá vjp."
    },
    {
      "code": "74+",
      "min": 74,
      "threshold": "74 điểm",
      "name": "Trung bình",
      "description": "Trình độ Trung bình."
    },
    {
      "code": "65+",
      "min": 65,
      "threshold": "65 điểm",
      "name": "Hơi gà",
      "description": "Trình độ Hơi gà."
    },
    {
      "code": "55+",
      "min": 55,
      "threshold": "55 điểm",
      "name": "Gà",
      "description": "Trình độ Gà."
    },
    {
      "code": "<55",
      "min": 0,
      "threshold": "<55 điểm",
      "name": "viết đơn",
      "description": "Trình độ viết đơn."
    }
  ]
};

window.QUIZ_QUESTIONS = [
  {
    "id": "Q01",
    "category": "retouch",
    "prompt": "Một ảnh retouch đạt yêu cầu khi nào?",
    "options": [
      {
        "id": "Q01-0",
        "text": "Da sạch hơn nhưng vẫn còn texture và chuyển sắc tự nhiên.",
        "correct": true
      },
      {
        "id": "Q01-1",
        "text": "Da càng mịn và đều màu càng chứng tỏ retouch kỹ.",
        "correct": false
      },
      {
        "id": "Q01-2",
        "text": "Form thay đổi rõ rệt để người xem thấy ảnh đã được chỉnh.",
        "correct": false
      },
      {
        "id": "Q01-3",
        "text": "Tăng tương phản toàn ảnh để các chi tiết trông sắc hơn.",
        "correct": false
      }
    ],
    "explanation": "Retouch đạt yêu cầu khi ảnh được cải thiện nhưng vẫn giữ texture, cấu trúc và cảm giác tự nhiên."
  },
  {
    "id": "Q02",
    "category": "retouch",
    "prompt": "Dấu hiệu nào cho thấy form cơ thể có khả năng đã bị Liquify quá tay?",
    "options": [
      {
        "id": "Q02-0",
        "text": "Hai bên cơ thể hơi khác nhau do tư thế, góc chụp và hướng nguồn sáng ban đầu.",
        "correct": false
      },
      {
        "id": "Q02-1",
        "text": "Đường cong bị gãy hoặc phình lõm không ăn với cấu trúc xung quanh.",
        "correct": true
      },
      {
        "id": "Q02-2",
        "text": "Một bên cơ thể tối hơn do quay xa nguồn sáng.",
        "correct": false
      },
      {
        "id": "Q02-3",
        "text": "Đường viền được làm gọn nhưng vẫn có chuyển tiếp tự nhiên.",
        "correct": false
      }
    ],
    "explanation": "Liquify quá tay thường để lại đường cong gãy, phình lõm hoặc cấu trúc thiếu liên kết."
  },
  {
    "id": "Q03",
    "category": "retouch",
    "prompt": "Khi chỉnh form bằng Liquify, cách thao tác nào nên dùng?",
    "options": [
      {
        "id": "Q03-0",
        "text": "Dùng brush rất nhỏ để nắn từng điểm, sau đó Smooth đường viền cho đều và sạch.",
        "correct": false
      },
      {
        "id": "Q03-1",
        "text": "Đẩy mạnh một lần rồi giảm Opacity để làm mềm kết quả.",
        "correct": false
      },
      {
        "id": "Q03-2",
        "text": "Chỉnh contour trước, không cần quan tâm phần khối bên trong.",
        "correct": false
      },
      {
        "id": "Q03-3",
        "text": "Dùng brush phù hợp, đẩy nhẹ từng bước và thường xuyên zoom ra kiểm tra.",
        "correct": true
      }
    ],
    "explanation": "Liquify nên được thực hiện nhẹ, có kiểm tra tổng thể để tránh méo nền, texture và đường viền."
  },
  {
    "id": "Q04",
    "category": "retouch",
    "prompt": "Dodge & Burn thường được dùng để xử lý việc gì trong retouch?",
    "options": [
      {
        "id": "Q04-0",
        "text": "Làm sạch sáng tối cục bộ và củng cố cảm giác thể tích.",
        "correct": true
      },
      {
        "id": "Q04-1",
        "text": "Cân Exposure cho toàn bộ ảnh trước khi retouch.",
        "correct": false
      },
      {
        "id": "Q04-2",
        "text": "Thay đổi hình dáng cơ thể bằng cách tăng sáng tối ở những vùng cần chỉnh form.",
        "correct": false
      },
      {
        "id": "Q04-3",
        "text": "Tăng độ nét cho texture mà không cần Sharpen.",
        "correct": false
      }
    ],
    "explanation": "Dodge & Burn chủ yếu xử lý sáng tối cục bộ, giúp bề mặt sạch hơn và khối rõ hơn."
  },
  {
    "id": "Q05",
    "category": "retouch",
    "prompt": "Dấu hiệu nào cho thấy Dodge & Burn đã bị xử lý quá tay?",
    "options": [
      {
        "id": "Q05-0",
        "text": "Highlight rõ hơn ở vùng hướng sáng, shadow vẫn giữ được độ chuyển mềm.",
        "correct": false
      },
      {
        "id": "Q05-1",
        "text": "Da có mảng sáng tối gãy, không ăn theo bề mặt và nguồn sáng.",
        "correct": true
      },
      {
        "id": "Q05-2",
        "text": "Một vài vùng tối được giữ lại để không làm khối trở nên quá phẳng.",
        "correct": false
      },
      {
        "id": "Q05-3",
        "text": "Hai phía khuôn mặt có độ sáng khác nhau theo góc quay của chủ thể.",
        "correct": false
      }
    ],
    "explanation": "Dodge & Burn quá tay thường tạo mảng sáng tối giống bị tô, thay vì chuyển sắc tự nhiên theo bề mặt."
  },
  {
    "id": "Q06",
    "category": "retouch",
    "prompt": "Histogram tập trung phần lớn dữ liệu về phía bên trái thường cho biết điều gì?",
    "options": [
      {
        "id": "Q06-0",
        "text": "Ảnh có nhiều vùng tối; cần kiểm tra nội dung và clipping.",
        "correct": true
      },
      {
        "id": "Q06-1",
        "text": "Ảnh đã mất chi tiết shadow vì dữ liệu dồn sát vùng đen.",
        "correct": false
      },
      {
        "id": "Q06-2",
        "text": "White balance đang lạnh nên các kênh màu lệch về phía trái.",
        "correct": false
      },
      {
        "id": "Q06-3",
        "text": "Contrast thấp vì dữ liệu chưa trải sang vùng highlight.",
        "correct": false
      }
    ],
    "explanation": "Histogram lệch trái chỉ cho biết ảnh có nhiều dữ liệu tối; ảnh low-key hoặc nền tối vẫn có thể hoàn toàn hợp lý."
  },
  {
    "id": "Q07",
    "category": "retouch",
    "prompt": "Khi đọc histogram, nhận định nào đúng?",
    "options": [
      {
        "id": "Q07-0",
        "text": "Histogram đẹp luôn phải tập trung ở vùng midtone.",
        "correct": false
      },
      {
        "id": "Q07-1",
        "text": "Histogram càng trải đều từ vùng tối đến vùng sáng thì ảnh càng cân bằng và đủ chi tiết.",
        "correct": false
      },
      {
        "id": "Q07-2",
        "text": "Histogram không bao giờ được chạm hai mép.",
        "correct": false
      },
      {
        "id": "Q07-3",
        "text": "Histogram phải được đánh giá theo nội dung ảnh và tình trạng mất chi tiết.",
        "correct": true
      }
    ],
    "explanation": "Không có một hình histogram chuẩn cho mọi ảnh; cần xét nội dung và clipping thực tế."
  },
  {
    "id": "Q08",
    "category": "retouch",
    "prompt": "Ảnh đã mất nét hoặc thiếu chi tiết thì Sharpen/AI có thể làm được gì?",
    "options": [
      {
        "id": "Q08-0",
        "text": "Khôi phục gần như chính xác chi tiết thật nếu file gốc đủ lớn và dùng Sharpen đúng thông số.",
        "correct": false
      },
      {
        "id": "Q08-1",
        "text": "Cải thiện cảm giác sắc nét hoặc tạo chi tiết dự đoán, nhưng không bảo đảm đúng dữ liệu gốc.",
        "correct": true
      },
      {
        "id": "Q08-2",
        "text": "Chỉ cần tăng Clarity là có thể phục hồi cấu trúc đã mất.",
        "correct": false
      },
      {
        "id": "Q08-3",
        "text": "Upscale trước sẽ bảo đảm Sharpen tái tạo đúng chi tiết.",
        "correct": false
      }
    ],
    "explanation": "Sharpen và AI có thể cải thiện cảm nhận thị giác, nhưng không thể bảo đảm tái tạo đúng thông tin thật đã mất."
  },
  {
    "id": "Q09",
    "category": "layout",
    "prompt": "Khi nhận một kịch bản dài từ content, designer nên thực hiện bước nào trước tiên?",
    "options": [
      {
        "id": "Q09-0",
        "text": "Tìm reference gần ngành hàng để xác định giới hạn phong cách có thể dùng.",
        "correct": false
      },
      {
        "id": "Q09-1",
        "text": "Chọn asset chính để biết ý tưởng nào khả thi với nguồn hình hiện có.",
        "correct": false
      },
      {
        "id": "Q09-2",
        "text": "Tinh gọn nội dung, xác định thông điệp chính và thứ tự thông tin.",
        "correct": true
      },
      {
        "id": "Q09-3",
        "text": "Dựng wireframe nhanh để đo lượng chữ và khoảng trống còn lại.",
        "correct": false
      }
    ],
    "explanation": "Phải hiểu và phân cấp nội dung trước; reference, asset và layout chỉ hiệu quả khi bài toán đã được làm rõ."
  },
  {
    "id": "Q10",
    "category": "layout",
    "prompt": "Mood và asset khác nhau như thế nào?",
    "options": [
      {
        "id": "Q10-0",
        "text": "Mood là cảm giác tổng thể; asset là đối tượng cụ thể dùng để tạo cảm giác đó.",
        "correct": true
      },
      {
        "id": "Q10-1",
        "text": "Mood là bảng màu và hướng ánh sáng tổng thể; asset là hình ảnh và typography dùng trong bố cục.",
        "correct": false
      },
      {
        "id": "Q10-2",
        "text": "Mood là nội dung chính; asset chỉ là các chi tiết trang trí.",
        "correct": false
      },
      {
        "id": "Q10-3",
        "text": "Mood do content chọn; asset chỉ do designer tự quyết định.",
        "correct": false
      }
    ],
    "explanation": "Mood mô tả cảm giác tổng thể, còn asset là các đối tượng cụ thể dùng để thể hiện mood."
  },
  {
    "id": "Q11",
    "category": "layout",
    "prompt": "Khi chọn reference cho một brief, tiêu chí nào nên được ưu tiên?",
    "options": [
      {
        "id": "Q11-0",
        "text": "Reference có nhiều lượt thích và kỹ thuật phức tạp.",
        "correct": false
      },
      {
        "id": "Q11-1",
        "text": "Reference có màu gần giống màu thương hiệu.",
        "correct": false
      },
      {
        "id": "Q11-2",
        "text": "Reference cùng ngành hàng và có phong cách đẹp, dù bố cục không phù hợp lượng nội dung hiện tại.",
        "correct": false
      },
      {
        "id": "Q11-3",
        "text": "Reference có mood hoặc cách tổ chức bố cục có thể áp dụng cho brief hiện tại.",
        "correct": true
      }
    ],
    "explanation": "Reference nên giúp giải bài toán hiện tại về mood, bố cục hoặc cách xử lý, không chỉ vì đẹp hay cùng ngành."
  },
  {
    "id": "Q12",
    "category": "layout",
    "prompt": "Khi đã có reference phù hợp, designer nên sử dụng nó theo cách nào?",
    "options": [
      {
        "id": "Q12-0",
        "text": "Giữ nguyên bố cục chính rồi thay asset và nội dung.",
        "correct": false
      },
      {
        "id": "Q12-1",
        "text": "Phân tích nguyên lý hiệu quả rồi chuyển hóa theo brief của mình.",
        "correct": true
      },
      {
        "id": "Q12-2",
        "text": "Ghép nhiều reference vào một thiết kế để tránh giống một mẫu.",
        "correct": false
      },
      {
        "id": "Q12-3",
        "text": "Chỉ lấy màu sắc, không nên tham khảo cách tổ chức bố cục.",
        "correct": false
      }
    ],
    "explanation": "Reference nên được phân tích và chuyển hóa, thay vì sao chép hoặc ghép máy móc."
  },
  {
    "id": "Q13",
    "category": "layout",
    "prompt": "Một key visual chỉ có một sản phẩm chính cần tạo cảm giác mạnh và trực diện. Bố cục nào phù hợp?",
    "options": [
      {
        "id": "Q13-0",
        "text": "Bố cục chia nhiều cột để có thêm khu vực chứa thông tin.",
        "correct": false
      },
      {
        "id": "Q13-1",
        "text": "Bố cục trung tâm với sản phẩm là điểm nhìn chính.",
        "correct": true
      },
      {
        "id": "Q13-2",
        "text": "Bố cục ngẫu nhiên để tạo cảm giác tự nhiên hơn.",
        "correct": false
      },
      {
        "id": "Q13-3",
        "text": "Bố cục dàn đều để mọi asset có trọng lượng tương đương.",
        "correct": false
      }
    ],
    "explanation": "Bố cục trung tâm phù hợp khi cần nhấn mạnh một hero object hoặc chủ thể chính theo cách trực diện."
  },
  {
    "id": "Q14",
    "category": "layout",
    "prompt": "Bố cục đối xứng thường mang lại cảm giác nào?",
    "options": [
      {
        "id": "Q14-0",
        "text": "Cân bằng, trang trọng và có tính nghi thức.",
        "correct": true
      },
      {
        "id": "Q14-1",
        "text": "Chuyển động, tốc độ và cảm giác bất ổn.",
        "correct": false
      },
      {
        "id": "Q14-2",
        "text": "Tự nhiên, gần gũi và ít có sự sắp đặt.",
        "correct": false
      },
      {
        "id": "Q14-3",
        "text": "Nhiều lớp, phức tạp và giàu cảm giác không gian.",
        "correct": false
      }
    ],
    "explanation": "Đối xứng thường gợi sự cân bằng, ổn định, trang trọng và tính biểu tượng."
  },
  {
    "id": "Q15",
    "category": "layout",
    "prompt": "Trong thiết kế, “điểm nhìn chính” là gì?",
    "options": [
      {
        "id": "Q15-0",
        "text": "Thành phần có kích thước lớn nhất và độ tương phản mạnh nhất trong toàn bộ bố cục hiện tại.",
        "correct": false
      },
      {
        "id": "Q15-1",
        "text": "Thành phần nằm gần tâm khung hình nhất.",
        "correct": false
      },
      {
        "id": "Q15-2",
        "text": "Khu vực người xem được dẫn mắt tới đầu tiên hoặc cần ghi nhớ nhất.",
        "correct": true
      },
      {
        "id": "Q15-3",
        "text": "Thông tin có giá trị thương mại cao nhất trong brief.",
        "correct": false
      }
    ],
    "explanation": "Điểm nhìn chính là khu vực được ưu tiên về thị giác, không bắt buộc phải lớn nhất hoặc nằm giữa."
  },
  {
    "id": "Q16",
    "category": "layout",
    "prompt": "Điều gì thường xảy ra khi ba thành phần đều có kích thước lớn, độ sáng cao và độ tương phản gần bằng nhau?",
    "options": [
      {
        "id": "Q16-0",
        "text": "Các nội dung quan trọng được tiếp nhận cùng lúc nên thông tin đầy đủ hơn.",
        "correct": false
      },
      {
        "id": "Q16-1",
        "text": "Thành phần gần trung tâm vẫn tự động trở thành điểm nhìn chính.",
        "correct": false
      },
      {
        "id": "Q16-2",
        "text": "Ba thành phần tạo thành một cụm mạnh và hỗ trợ nhau về thị giác.",
        "correct": false
      },
      {
        "id": "Q16-3",
        "text": "Các thành phần cạnh tranh nhau và làm thứ tự ưu tiên trở nên mơ hồ.",
        "correct": true
      }
    ],
    "explanation": "Khi nhiều thành phần cùng có tín hiệu nổi bật tương đương, người xem khó xác định thứ tự ưu tiên."
  },
  {
    "id": "Q17",
    "category": "layout",
    "prompt": "Muốn điểm nhìn chính nổi bật hơn, thao tác nào đi ngược mục tiêu?",
    "options": [
      {
        "id": "Q17-0",
        "text": "Tăng tương phản có chọn lọc ở khu vực chính.",
        "correct": false
      },
      {
        "id": "Q17-1",
        "text": "Giảm độ chi tiết của background gần chủ thể.",
        "correct": false
      },
      {
        "id": "Q17-2",
        "text": "Tăng hiệu ứng và độ nổi của các asset phụ.",
        "correct": true
      },
      {
        "id": "Q17-3",
        "text": "Tạo khoảng trống xung quanh chủ thể chính.",
        "correct": false
      }
    ],
    "explanation": "Làm asset phụ nổi hơn sẽ tăng cạnh tranh và làm điểm nhìn chính yếu đi."
  },
  {
    "id": "Q18",
    "category": "layout",
    "prompt": "Đặc điểm nào thường giúp một asset có cảm giác nằm xa hơn?",
    "options": [
      {
        "id": "Q18-0",
        "text": "Nhỏ hơn, ít tương phản hơn và giảm nhẹ độ bão hòa.",
        "correct": true
      },
      {
        "id": "Q18-1",
        "text": "Nét hơn, sáng hơn để vẫn nhận ra khi kích thước nhỏ.",
        "correct": false
      },
      {
        "id": "Q18-2",
        "text": "Có shadow đậm hơn để tăng cảm giác khối và khoảng cách.",
        "correct": false
      },
      {
        "id": "Q18-3",
        "text": "Chuyển sang màu lạnh hơn dù nguồn sáng không thay đổi.",
        "correct": false
      }
    ],
    "explanation": "Vật thể ở xa thường nhỏ hơn và giảm độ rõ, độ tương phản, độ bão hòa do ảnh hưởng của khoảng cách."
  },
  {
    "id": "Q19",
    "category": "layout",
    "prompt": "Overlap hỗ trợ tạo chiều sâu bằng cách nào?",
    "options": [
      {
        "id": "Q19-0",
        "text": "Tạo điểm tiếp xúc để các vật thể có cảm giác cùng một mặt phẳng.",
        "correct": false
      },
      {
        "id": "Q19-1",
        "text": "Vật thể che nhau, từ đó xác định rõ thứ tự trước và sau.",
        "correct": true
      },
      {
        "id": "Q19-2",
        "text": "Thu hẹp khoảng cách để nhóm asset trông chặt chẽ hơn.",
        "correct": false
      },
      {
        "id": "Q19-3",
        "text": "Tạo vùng giao nhau có tương phản cao và thu hút mắt.",
        "correct": false
      }
    ],
    "explanation": "Khi một vật thể che một phần vật thể khác, mắt thường hiểu vật thể che nằm ở phía trước."
  },
  {
    "id": "Q20",
    "category": "layout",
    "prompt": "Khi dùng blur để tạo chiều sâu, nên xử lý như thế nào?",
    "options": [
      {
        "id": "Q20-0",
        "text": "Blur toàn bộ background cùng một mức.",
        "correct": false
      },
      {
        "id": "Q20-1",
        "text": "Blur mọi asset phụ vì chúng không phải nội dung chính cần người xem đọc rõ.",
        "correct": false
      },
      {
        "id": "Q20-2",
        "text": "Thay đổi mức blur theo khoảng cách và mặt phẳng lấy nét.",
        "correct": true
      },
      {
        "id": "Q20-3",
        "text": "Blur mạnh asset chất lượng thấp để che lỗi.",
        "correct": false
      }
    ],
    "explanation": "Blur nên tuân theo logic khoảng cách và mặt phẳng lấy nét, không theo vai trò chính-phụ hay chất lượng file."
  },
  {
    "id": "Q21",
    "category": "layout",
    "prompt": "Một sản phẩm đặt trên bục nhưng không có contact shadow thường tạo cảm giác gì?",
    "options": [
      {
        "id": "Q21-0",
        "text": "Sản phẩm lơ lửng hoặc chưa tiếp xúc thật với bề mặt.",
        "correct": true
      },
      {
        "id": "Q21-1",
        "text": "Sản phẩm sạch hơn vì vùng tiếp xúc không bị tối.",
        "correct": false
      },
      {
        "id": "Q21-2",
        "text": "Nguồn sáng mềm nên bóng đổ gần như không nhìn thấy.",
        "correct": false
      },
      {
        "id": "Q21-3",
        "text": "Bục thấp hơn vì thiếu vùng tối nối giữa hai vật thể.",
        "correct": false
      }
    ],
    "explanation": "Contact shadow là tín hiệu trực tiếp cho biết vật thể đang chạm vào bề mặt."
  },
  {
    "id": "Q22",
    "category": "layout",
    "prompt": "Khoảng trống trong thiết kế nên được hiểu như thế nào?",
    "options": [
      {
        "id": "Q22-0",
        "text": "Vùng chưa có nội dung, có thể lấp nếu bố cục chưa đủ nổi bật.",
        "correct": false
      },
      {
        "id": "Q22-1",
        "text": "Không gian có chủ đích để phân nhóm, dẫn mắt và tạo nhịp thở.",
        "correct": true
      },
      {
        "id": "Q22-2",
        "text": "Vùng background không chứa texture, ánh sáng hoặc asset.",
        "correct": false
      },
      {
        "id": "Q22-3",
        "text": "Diện tích còn lại sau khi đặt xong các nội dung bắt buộc.",
        "correct": false
      }
    ],
    "explanation": "Khoảng trống là một thành phần chủ động của bố cục, không phải phần thừa còn lại."
  },
  {
    "id": "Q23",
    "category": "layout",
    "prompt": "Khi nhận thấy một góc thiết kế còn trống, designer nên xử lý thế nào?",
    "options": [
      {
        "id": "Q23-0",
        "text": "Thêm asset nhỏ để cân bằng trọng lượng với phía đối diện.",
        "correct": false
      },
      {
        "id": "Q23-1",
        "text": "Lặp lại một chi tiết đã có để tăng nhịp điệu thị giác.",
        "correct": false
      },
      {
        "id": "Q23-2",
        "text": "Kiểm tra vai trò của khoảng trống trước khi quyết định thêm gì.",
        "correct": true
      },
      {
        "id": "Q23-3",
        "text": "Thêm ánh sáng hoặc texture vì ít gây rối hơn hình ảnh.",
        "correct": false
      }
    ],
    "explanation": "Khoảng trống có thể đang hỗ trợ phân cấp, cân bằng hoặc khả năng đọc; không nên lấp theo phản xạ."
  },
  {
    "id": "Q24",
    "category": "visual",
    "prompt": "Rim light là gì?",
    "options": [
      {
        "id": "Q24-0",
        "text": "Ánh sáng viền xuất hiện ở cạnh chủ thể do nguồn sáng phía sau hoặc bên cạnh.",
        "correct": true
      },
      {
        "id": "Q24-1",
        "text": "Một đường Stroke sáng chạy đều quanh toàn bộ layer người mẫu để tách khỏi background rõ hơn.",
        "correct": false
      },
      {
        "id": "Q24-2",
        "text": "Ánh sáng dùng để mở toàn bộ vùng shadow trên mặt.",
        "correct": false
      },
      {
        "id": "Q24-3",
        "text": "Hiệu ứng Glow được thêm sau bước tách nền.",
        "correct": false
      }
    ],
    "explanation": "Rim light là ánh sáng có nguồn và chịu ảnh hưởng của hình khối, không phải Stroke hoặc Glow trang trí."
  },
  {
    "id": "Q25",
    "category": "visual",
    "prompt": "Rim light không có chức năng nào sau đây?",
    "options": [
      {
        "id": "Q25-0",
        "text": "Hỗ trợ tách chủ thể khỏi background.",
        "correct": false
      },
      {
        "id": "Q25-1",
        "text": "Gợi hướng nguồn sáng trong bối cảnh.",
        "correct": false
      },
      {
        "id": "Q25-2",
        "text": "Thay thế key light để làm sáng toàn bộ chủ thể.",
        "correct": true
      },
      {
        "id": "Q25-3",
        "text": "Hỗ trợ cảm giác chiều sâu và làm đường bao chủ thể rõ hơn trong bố cục.",
        "correct": false
      }
    ],
    "explanation": "Rim light là ánh sáng viền bổ trợ, không dùng để thay thế ánh sáng chính trên toàn bộ chủ thể."
  },
  {
    "id": "Q26",
    "category": "visual",
    "prompt": "Trước khi vẽ rim light cho người mẫu, cần xác định điều gì trước?",
    "options": [
      {
        "id": "Q26-0",
        "text": "Blend mode nào sẽ dùng để tạo ánh sáng sạch, sáng và dễ kiểm soát nhất.",
        "correct": false
      },
      {
        "id": "Q26-1",
        "text": "Vị trí, màu và hướng của nguồn sáng tạo rim.",
        "correct": true
      },
      {
        "id": "Q26-2",
        "text": "Độ dày đường viền để nhìn rõ trên mobile.",
        "correct": false
      },
      {
        "id": "Q26-3",
        "text": "Nên dùng brush cứng hay brush mềm.",
        "correct": false
      }
    ],
    "explanation": "Cần xác định nguồn sáng trước; công cụ và blend mode chỉ là bước thực hiện sau đó."
  },
  {
    "id": "Q27",
    "category": "visual",
    "prompt": "Vì sao một đường sáng có độ dày và độ sáng bằng nhau chạy quanh toàn bộ người mẫu thường thiếu tự nhiên?",
    "options": [
      {
        "id": "Q27-0",
        "text": "Rim light chủ yếu chỉ xuất hiện ở tóc, vai và các cạnh cứng.",
        "correct": false
      },
      {
        "id": "Q27-1",
        "text": "Hai phía cùng có rim light sẽ khiến nguồn sáng bị mâu thuẫn.",
        "correct": false
      },
      {
        "id": "Q27-2",
        "text": "Viền sáng đều làm đường cắt mềm và giảm độ nét của chủ thể.",
        "correct": false
      },
      {
        "id": "Q27-3",
        "text": "Ánh sáng thay đổi theo hướng mặt, độ cong, chất liệu và vật cản.",
        "correct": true
      }
    ],
    "explanation": "Ánh sáng thật thay đổi theo hướng bề mặt và mức độ bị che; vì vậy rim light hiếm khi đều quanh toàn bộ chủ thể."
  },
  {
    "id": "Q28",
    "category": "visual",
    "prompt": "Trong hệ thống typography, typo chính cần đảm nhiệm vai trò gì?",
    "options": [
      {
        "id": "Q28-0",
        "text": "Trang trí nhiều nhất để tạo phong cách và cá tính riêng cho toàn bộ key visual.",
        "correct": false
      },
      {
        "id": "Q28-1",
        "text": "Truyền tải key message và được đọc ở thứ tự ưu tiên đầu.",
        "correct": true
      },
      {
        "id": "Q28-2",
        "text": "Luôn có kích thước lớn nhất và đặt ở chính giữa.",
        "correct": false
      },
      {
        "id": "Q28-3",
        "text": "Luôn dùng font khác hoàn toàn với typo phụ.",
        "correct": false
      }
    ],
    "explanation": "Typo chính cần truyền tải key message và giữ thứ tự ưu tiên đọc, không bắt buộc nằm giữa hoặc dùng font riêng."
  },
  {
    "id": "Q29",
    "category": "visual",
    "prompt": "Với typo phụ như thời gian, địa điểm hoặc thông tin bổ sung, cách xử lý nào phù hợp?",
    "options": [
      {
        "id": "Q29-0",
        "text": "Ưu tiên dễ đọc và giữ mức độ nổi thấp hơn typo chính.",
        "correct": true
      },
      {
        "id": "Q29-1",
        "text": "Tạo một phong cách riêng để typo phụ không bị chìm.",
        "correct": false
      },
      {
        "id": "Q29-2",
        "text": "Dùng kích thước gần bằng title để bảo đảm đọc được trên mobile.",
        "correct": false
      },
      {
        "id": "Q29-3",
        "text": "Thêm hiệu ứng nhẹ để mỗi nhóm thông tin đều có điểm nhấn.",
        "correct": false
      }
    ],
    "explanation": "Typo phụ cần đọc rõ nhưng không nên cạnh tranh với nội dung chính."
  },
  {
    "id": "Q30",
    "category": "visual",
    "prompt": "Nguyên tắc sử dụng font nào quan trọng nhất?",
    "options": [
      {
        "id": "Q30-0",
        "text": "Mỗi nhóm nội dung nên dùng một font khác để phân biệt vai trò rõ ràng hơn.",
        "correct": false
      },
      {
        "id": "Q30-1",
        "text": "Chỉ dùng duy nhất một font cho toàn bộ thiết kế.",
        "correct": false
      },
      {
        "id": "Q30-2",
        "text": "Giữ số font có kiểm soát, thường khoảng hai family và không quá ba font.",
        "correct": true
      },
      {
        "id": "Q30-3",
        "text": "Có thể dùng nhiều font miễn là tất cả cùng màu.",
        "correct": false
      }
    ],
    "explanation": "Giữ số font có kiểm soát giúp thiết kế đồng bộ; phân cấp có thể tạo bằng size, weight và spacing."
  },
  {
    "id": "Q31",
    "category": "visual",
    "prompt": "Khi phân cấp chữ chưa rõ, nên thử điều gì trước khi thêm một font mới?",
    "options": [
      {
        "id": "Q31-0",
        "text": "Tăng tương phản màu giữa các nhóm nội dung chính và phụ.",
        "correct": false
      },
      {
        "id": "Q31-1",
        "text": "Điều chỉnh size, weight, spacing, line break và vị trí.",
        "correct": true
      },
      {
        "id": "Q31-2",
        "text": "Thêm Stroke hoặc shadow để tách từng nhóm chữ.",
        "correct": false
      },
      {
        "id": "Q31-3",
        "text": "Chuyển nội dung quan trọng sang chữ in hoa.",
        "correct": false
      }
    ],
    "explanation": "Phân cấp chữ thường được giải quyết trước bằng tỷ lệ, weight, spacing, line break và vị trí, không phải bằng cách thêm font."
  },
  {
    "id": "Q32",
    "category": "visual",
    "prompt": "Màu bổ túc thường có đặc điểm nào?",
    "options": [
      {
        "id": "Q32-0",
        "text": "Nằm gần nhau trên vòng tròn màu và tạo cảm giác liền mạch.",
        "correct": false
      },
      {
        "id": "Q32-1",
        "text": "Có độ sáng tương tự nhưng khác nhau về độ bão hòa.",
        "correct": false
      },
      {
        "id": "Q32-2",
        "text": "Nằm đối diện nhau trên vòng tròn màu và tạo tương phản mạnh.",
        "correct": true
      },
      {
        "id": "Q32-3",
        "text": "Gồm một màu nóng và một màu trung tính để dễ cân bằng.",
        "correct": false
      }
    ],
    "explanation": "Màu bổ túc nằm đối diện nhau trên vòng tròn màu, tạo tương phản mạnh nhưng cần kiểm soát tỷ lệ và độ bão hòa."
  },
  {
    "id": "Q33",
    "category": "visual",
    "prompt": "Muốn bảng màu đỏ rượu vang và vàng kim trông sang thay vì bị phô, nên làm gì?",
    "options": [
      {
        "id": "Q33-0",
        "text": "Tăng saturation cả đỏ và vàng để giữ không khí lễ hội.",
        "correct": false
      },
      {
        "id": "Q33-1",
        "text": "Dùng vàng cho phần lớn asset để tạo cảm giác cao cấp.",
        "correct": false
      },
      {
        "id": "Q33-2",
        "text": "Chia đỏ và vàng theo tỷ lệ gần bằng nhau để cân bằng.",
        "correct": false
      },
      {
        "id": "Q33-3",
        "text": "Kiểm soát tỷ lệ màu, độ sáng, tương phản và chất liệu.",
        "correct": true
      }
    ],
    "explanation": "Cảm giác cao cấp phụ thuộc cách phân bổ màu, ánh sáng và chất liệu, không phải chỉ chọn đúng đỏ-vàng."
  },
  {
    "id": "Q34",
    "category": "matching",
    "prompt": "Khi ghép nhiều asset vào cùng một scene, nhóm yếu tố nào cần được matching?",
    "options": [
      {
        "id": "Q34-0",
        "text": "Chủ yếu Hue và Saturation vì màu quyết định độ hòa nhập.",
        "correct": false
      },
      {
        "id": "Q34-1",
        "text": "Ánh sáng, màu, contrast, noise, độ nét, shadow và màu môi trường.",
        "correct": true
      },
      {
        "id": "Q34-2",
        "text": "Chỉ góc máy, kích thước và độ phân giải của asset.",
        "correct": false
      },
      {
        "id": "Q34-3",
        "text": "Chỉ cần áp cùng một preset Camera Raw cho tất cả asset.",
        "correct": false
      }
    ],
    "explanation": "Matching cần đồng bộ nhiều tín hiệu thị giác, đặc biệt là ánh sáng, màu, độ nét, noise và shadow."
  },
  {
    "id": "Q35",
    "category": "matching",
    "prompt": "Asset sáng từ bên trái nhưng background sáng chính từ bên phải. Cần sửa gì trước?",
    "options": [
      {
        "id": "Q35-0",
        "text": "Sửa hướng sáng của asset cho khớp scene rồi mới cân màu.",
        "correct": true
      },
      {
        "id": "Q35-1",
        "text": "Áp LUT chung để hai thành phần có cùng tone và nhiệt độ màu tổng thể.",
        "correct": false
      },
      {
        "id": "Q35-2",
        "text": "Giảm Exposure asset để hướng sáng bớt lộ.",
        "correct": false
      },
      {
        "id": "Q35-3",
        "text": "Thêm Glow phía phải để che sự khác biệt.",
        "correct": false
      }
    ],
    "explanation": "Sai hướng sáng là lỗi không gian cơ bản; cần sửa trước khi color grading."
  },
  {
    "id": "Q36",
    "category": "matching",
    "prompt": "Một asset có saturation cao bất thường so với toàn bộ scene. Điều gì dễ xảy ra?",
    "options": [
      {
        "id": "Q36-0",
        "text": "Asset sẽ tự nhiên có cảm giác gần camera hơn nhờ màu mạnh và độ rõ cao.",
        "correct": false
      },
      {
        "id": "Q36-1",
        "text": "Asset dễ bị tách khỏi scene và giành điểm nhìn ngoài ý muốn.",
        "correct": true
      },
      {
        "id": "Q36-2",
        "text": "Không ảnh hưởng nếu Hue của asset đã đúng.",
        "correct": false
      },
      {
        "id": "Q36-3",
        "text": "Asset sẽ giúp bảng màu tổng thể bớt đơn điệu.",
        "correct": false
      }
    ],
    "explanation": "Saturation quá lệch có thể làm asset bật ra khỏi không gian và cạnh tranh điểm nhìn."
  },
  {
    "id": "Q37",
    "category": "matching",
    "prompt": "Background có sương mờ nhưng một asset được đặt ở xa lại có black point sâu, độ nét và độ tương phản rất cao. Vấn đề chính là gì?",
    "options": [
      {
        "id": "Q37-0",
        "text": "Asset không tuân theo phối cảnh xa–gần nên bị cảm nhận ở gần hơn.",
        "correct": true
      },
      {
        "id": "Q37-1",
        "text": "Background thiếu tương phản nên không giữ được độ sâu của bố cục.",
        "correct": false
      },
      {
        "id": "Q37-2",
        "text": "Asset quá nhỏ nên cần độ rõ cao để vẫn nhận biết được hình dạng.",
        "correct": false
      },
      {
        "id": "Q37-3",
        "text": "Asset thiếu màu môi trường nên chưa hòa với bảng màu chung.",
        "correct": false
      }
    ],
    "explanation": "Trong phối cảnh xa–gần, vật thể ở xa thường giảm độ rõ, độ tương phản và độ bão hòa màu."
  },
  {
    "id": "Q38",
    "category": "matching",
    "prompt": "Vì sao cần match noise hoặc grain giữa các asset?",
    "options": [
      {
        "id": "Q38-0",
        "text": "Noise giúp che đường cắt và bổ sung chi tiết cho ảnh mềm.",
        "correct": false
      },
      {
        "id": "Q38-1",
        "text": "Grain làm các asset có độ nét cảm nhận tương đương nhau.",
        "correct": false
      },
      {
        "id": "Q38-2",
        "text": "Chênh lệch kết cấu hạt có thể làm lộ nguồn ảnh khác nhau.",
        "correct": true
      },
      {
        "id": "Q38-3",
        "text": "Noise giúp manipulation có cảm giác điện ảnh và thống nhất hơn.",
        "correct": false
      }
    ],
    "explanation": "Một asset quá sạch cạnh một ảnh nhiều noise, hoặc ngược lại, dễ làm lộ việc ghép từ nhiều nguồn."
  },
  {
    "id": "Q39",
    "category": "matching",
    "prompt": "Một asset phụ được sharpen mạnh hơn chủ thể chính có thể gây hậu quả gì?",
    "options": [
      {
        "id": "Q39-0",
        "text": "Asset phụ giành điểm nhìn và phá logic xa–gần.",
        "correct": true
      },
      {
        "id": "Q39-1",
        "text": "Chủ thể chính mềm hơn nên có cảm giác tự nhiên hơn.",
        "correct": false
      },
      {
        "id": "Q39-2",
        "text": "Thiết kế rõ hơn ở kích thước nhỏ mà vẫn giữ hierarchy.",
        "correct": false
      },
      {
        "id": "Q39-3",
        "text": "Chỉ gây vấn đề khi asset phụ có diện tích lớn.",
        "correct": false
      }
    ],
    "explanation": "Độ nét là một tín hiệu điểm nhìn và khoảng cách; asset phụ quá nét có thể trở nên nổi hơn chủ thể chính."
  },
  {
    "id": "Q40",
    "category": "matching",
    "prompt": "Công cụ auto match màu nên được dùng như thế nào?",
    "options": [
      {
        "id": "Q40-0",
        "text": "Dùng làm kết quả cuối nếu hai ảnh có màu khá giống nhau.",
        "correct": false
      },
      {
        "id": "Q40-1",
        "text": "Không nên dùng vì kết quả tự động luôn thiếu chính xác.",
        "correct": false
      },
      {
        "id": "Q40-2",
        "text": "Dùng để sửa luôn cả ánh sáng, shadow và phối cảnh.",
        "correct": false
      },
      {
        "id": "Q40-3",
        "text": "Dùng làm điểm khởi đầu, sau đó kiểm tra và chỉnh thủ công.",
        "correct": true
      }
    ],
    "explanation": "Auto match hữu ích để tạo nền ban đầu nhưng vẫn cần kiểm tra thủ công theo scene thực tế."
  },
  {
    "id": "Q41",
    "category": "workflow",
    "prompt": "Khi tìm asset từ một brief dài, cách tách keyword nào hiệu quả hơn?",
    "options": [
      {
        "id": "Q41-0",
        "text": "Dùng nguyên câu brief để công cụ hiểu đầy đủ ý tưởng.",
        "correct": false
      },
      {
        "id": "Q41-1",
        "text": "Tách thành đối tượng, hành động, chất liệu, góc nhìn và phong cách.",
        "correct": true
      },
      {
        "id": "Q41-2",
        "text": "Tìm một reference rồi copy toàn bộ keyword của reference đó.",
        "correct": false
      },
      {
        "id": "Q41-3",
        "text": "Chỉ tìm tên asset chính, các asset phụ chọn sau theo cảm tính.",
        "correct": false
      }
    ],
    "explanation": "Tách brief thành các nhóm keyword cụ thể giúp tìm asset đúng mục đích và dễ kiểm soát hơn."
  },
  {
    "id": "Q42",
    "category": "workflow",
    "prompt": "Nhóm nền tảng nào phù hợp để tìm reference và mood cho thiết kế?",
    "options": [
      {
        "id": "Q42-0",
        "text": "Pinterest, Behance và Huaban.",
        "correct": true
      },
      {
        "id": "Q42-1",
        "text": "Freepik, Envato Elements và Shutterstock.",
        "correct": false
      },
      {
        "id": "Q42-2",
        "text": "Midjourney, Firefly và Generative Fill.",
        "correct": false
      },
      {
        "id": "Q42-3",
        "text": "Google Drive, Photoshop và Illustrator.",
        "correct": false
      }
    ],
    "explanation": "Pinterest, Behance và Huaban phù hợp để tìm hướng hình ảnh và mood; các nền tảng khác thiên về asset hoặc công cụ."
  },
  {
    "id": "Q43",
    "category": "workflow",
    "prompt": "Khi prompt AI tạo một asset để ghép vào key visual, nên mô tả thêm gì ngoài tên vật thể?",
    "options": [
      {
        "id": "Q43-0",
        "text": "Màu thương hiệu và tên chiến dịch là đủ.",
        "correct": false
      },
      {
        "id": "Q43-1",
        "text": "Góc máy, chất liệu, hướng sáng, background và phong cách.",
        "correct": true
      },
      {
        "id": "Q43-2",
        "text": "Tên khách hàng và đối tượng mục tiêu của chiến dịch.",
        "correct": false
      },
      {
        "id": "Q43-3",
        "text": "Định dạng file và số lượng layer muốn nhận.",
        "correct": false
      }
    ],
    "explanation": "Góc máy, chất liệu và hướng sáng quyết định trực tiếp khả năng ghép asset vào scene."
  },
  {
    "id": "Q44",
    "category": "workflow",
    "prompt": "Brief chỉ ghi: “Làm sang, đẹp, bắt mắt và có chiều sâu”. Trước khi thiết kế, cần làm rõ thêm thông tin nào?",
    "options": [
      {
        "id": "Q44-0",
        "text": "Chỉ cần một reference mà content thấy đẹp.",
        "correct": false
      },
      {
        "id": "Q44-1",
        "text": "Chỉ cần bảng màu thương hiệu, kích thước file và một reference mẫu để triển khai.",
        "correct": false
      },
      {
        "id": "Q44-2",
        "text": "Key message, đối tượng, mood, kênh sử dụng và điều cần tránh.",
        "correct": true
      },
      {
        "id": "Q44-3",
        "text": "Chỉ cần biết asset nào bắt buộc phải xuất hiện.",
        "correct": false
      }
    ],
    "explanation": "Các từ như “sang” hay “bắt mắt” còn quá chung; cần chuyển thành yêu cầu cụ thể trước khi triển khai."
  },
  {
    "id": "Q45",
    "category": "workflow",
    "prompt": "Một poster có quá nhiều nội dung chữ, vượt khả năng đọc ở kích thước sử dụng. Designer nên xử lý thế nào?",
    "options": [
      {
        "id": "Q45-0",
        "text": "Giữ đủ chữ và giảm size đến khi vừa khung.",
        "correct": false
      },
      {
        "id": "Q45-1",
        "text": "Tự bỏ những đoạn mình thấy ít quan trọng.",
        "correct": false
      },
      {
        "id": "Q45-2",
        "text": "Trao đổi để rút gọn, phân cấp hoặc chuyển phần phụ sang caption/frame khác.",
        "correct": true
      },
      {
        "id": "Q45-3",
        "text": "Bỏ bớt hình ảnh để dành gần như toàn bộ diện tích cho chữ.",
        "correct": false
      }
    ],
    "explanation": "Khi lượng text quá lớn, cần trao đổi và tổ chức lại thông tin thay vì tự ý bỏ hoặc ép toàn bộ vào một khung."
  },
  {
    "id": "Q46",
    "category": "situations",
    "prompt": "Người mẫu đã được match tone, saturation và grain với background nhưng vẫn có cảm giác bị “dán lên”. Cần kiểm tra nhóm yếu tố nào tiếp theo?",
    "options": [
      {
        "id": "Q46-0",
        "text": "Tăng thêm màu môi trường lên da người mẫu để hai phần cùng tone với nhau hơn.",
        "correct": false
      },
      {
        "id": "Q46-1",
        "text": "Giảm saturation background để người mẫu bớt nổi.",
        "correct": false
      },
      {
        "id": "Q46-2",
        "text": "Hướng sáng, shadow, độ nét và phối cảnh của người mẫu.",
        "correct": true
      },
      {
        "id": "Q46-3",
        "text": "Thêm grain mạnh hơn lên toàn bộ thiết kế.",
        "correct": false
      }
    ],
    "explanation": "Khi màu và grain đã tương đối khớp, ánh sáng, shadow, độ nét và phối cảnh là các nguyên nhân chính còn lại khiến asset bị dán."
  },
  {
    "id": "Q47",
    "category": "situations",
    "prompt": "Một key visual có nhiều asset và hiệu ứng; gần như thành phần nào cũng sáng, sắc nét và nổi ngang nhau. Vấn đề chính là gì?",
    "options": [
      {
        "id": "Q47-0",
        "text": "Khoảng trống ở hai bên chưa cân bằng.",
        "correct": false
      },
      {
        "id": "Q47-1",
        "text": "Thiếu phân cấp thị giác nên các thành phần đang cạnh tranh nhau.",
        "correct": true
      },
      {
        "id": "Q47-2",
        "text": "Các asset chưa dùng cùng một sắc vàng kim.",
        "correct": false
      },
      {
        "id": "Q47-3",
        "text": "Chưa có đủ chi tiết nhỏ để liên kết các vùng trống và tạo nhịp cho bố cục.",
        "correct": false
      }
    ],
    "explanation": "Khi mọi thành phần đều nổi ngang nhau, phân cấp thị giác bị mất và thiết kế dễ trở nên rối."
  },
  {
    "id": "Q48",
    "category": "situations",
    "prompt": "Trước khi xuất file, cách kiểm tra tổng thể nào nên thực hiện?",
    "options": [
      {
        "id": "Q48-0",
        "text": "Kiểm tra ảnh ở 100%, texture và đường cắt.",
        "correct": false
      },
      {
        "id": "Q48-1",
        "text": "Kiểm tra thumbnail, brief và bố cục.",
        "correct": true
      },
      {
        "id": "Q48-2",
        "text": "Kiểm tra tên file, font và định dạng xuất.",
        "correct": false
      },
      {
        "id": "Q48-3",
        "text": "Kiểm tra riêng màu sắc bằng histogram.",
        "correct": false
      }
    ],
    "explanation": "Thumbnail giúp nhìn điểm nhìn, brief giúp xác nhận đúng yêu cầu và bố cục giúp kiểm tra tổng thể trước khi xuất."
  },
  {
    "id": "Q49",
    "category": "situations",
    "prompt": "Title lớn nhất layout nhưng hộp quà vẫn hút mắt trước. Yếu tố nào có thể gây ra hiện tượng này?",
    "options": [
      {
        "id": "Q49-0",
        "text": "Hộp quà có contrast, độ sáng hoặc màu nổi mạnh hơn title.",
        "correct": true
      },
      {
        "id": "Q49-1",
        "text": "Title bắt buộc phải đặt chính giữa mới trở thành điểm nhìn.",
        "correct": false
      },
      {
        "id": "Q49-2",
        "text": "Vật thể 3D luôn thu hút hơn typography.",
        "correct": false
      },
      {
        "id": "Q49-3",
        "text": "Title chưa dùng đủ hiệu ứng Glow và Shadow.",
        "correct": false
      }
    ],
    "explanation": "Điểm nhìn không chỉ do kích thước; contrast, độ sáng, màu và vị trí có thể làm hộp quà nổi hơn."
  },
  {
    "id": "Q50",
    "category": "situations",
    "prompt": "Thiết kế đã có overlap và blur nhưng vẫn phẳng. Nhóm tín hiệu chiều sâu nào cần kiểm tra thêm?",
    "options": [
      {
        "id": "Q50-0",
        "text": "Chỉ tăng blur cho mọi vật thể ở background.",
        "correct": false
      },
      {
        "id": "Q50-1",
        "text": "Tỷ lệ, phối cảnh, ánh sáng, contrast xa-gần và shadow.",
        "correct": true
      },
      {
        "id": "Q50-2",
        "text": "Thêm một lớp tiền cảnh lớn để che một phần chủ thể.",
        "correct": false
      },
      {
        "id": "Q50-3",
        "text": "Giảm độ nét toàn bộ background về cùng một mức.",
        "correct": false
      }
    ],
    "explanation": "Chiều sâu cần nhiều tín hiệu phối hợp, không chỉ overlap và blur."
  },
  {
    "id": "Q51",
    "category": "situations",
    "prompt": "Người mẫu có rim light vàng mạnh nhưng vùng background sát đường bao chủ thể cũng rất sáng và nhiều chi tiết. Nên xử lý gì?",
    "options": [
      {
        "id": "Q51-0",
        "text": "Tăng rim light mạnh hơn nữa quanh toàn bộ người mẫu để tách nền rõ ràng hơn.",
        "correct": false
      },
      {
        "id": "Q51-1",
        "text": "Thêm Stroke sáng để đường bao luôn rõ.",
        "correct": false
      },
      {
        "id": "Q51-2",
        "text": "Giảm chi tiết hoặc contrast của background sát đường bao chủ thể.",
        "correct": true
      },
      {
        "id": "Q51-3",
        "text": "Thêm rim light màu khác ở cạnh đối diện.",
        "correct": false
      }
    ],
    "explanation": "Nếu background cạnh đường bao đang cạnh tranh, cần giảm chính vùng đó thay vì tiếp tục tăng hiệu ứng trên người mẫu."
  },
  {
    "id": "Q52",
    "category": "situations",
    "prompt": "Đèn lồng nằm ở xa nhưng lại nét và tương phản mạnh hơn khuôn mặt người mẫu. Nên chỉnh thế nào?",
    "options": [
      {
        "id": "Q52-0",
        "text": "Sharpen khuôn mặt đến khi nét ngang đèn lồng.",
        "correct": false
      },
      {
        "id": "Q52-1",
        "text": "Giảm độ rõ, contrast và có thể giảm nhẹ saturation của đèn lồng.",
        "correct": true
      },
      {
        "id": "Q52-2",
        "text": "Tăng kích thước người mẫu để bù lại độ nổi của đèn lồng.",
        "correct": false
      },
      {
        "id": "Q52-3",
        "text": "Blur toàn bộ background bằng cùng một mức.",
        "correct": false
      }
    ],
    "explanation": "Vật thể ở xa nên giảm độ rõ và contrast theo logic không gian, thay vì tăng thêm độ nổi cho chủ thể."
  },
  {
    "id": "Q53",
    "category": "situations",
    "prompt": "Đã đổi nhiều font nhưng title vẫn chưa ổn. Trước khi tìm thêm font, nên kiểm tra gì?",
    "options": [
      {
        "id": "Q53-0",
        "text": "Nội dung title, cách xuống dòng, tỷ lệ, tracking, weight và vị trí.",
        "correct": true
      },
      {
        "id": "Q53-1",
        "text": "Tìm font có nhiều nét trang trí hơn.",
        "correct": false
      },
      {
        "id": "Q53-2",
        "text": "Thêm Bevel, Glow hoặc texture cho chữ.",
        "correct": false
      },
      {
        "id": "Q53-3",
        "text": "Đổi title sang màu tương phản mạnh nhất trong palette để tạo lại điểm nhìn chính.",
        "correct": false
      }
    ],
    "explanation": "Nhiều vấn đề title đến từ cách tổ chức chữ và tỷ lệ, không phải do chưa tìm được thêm font."
  },
  {
    "id": "Q54",
    "category": "situations",
    "prompt": "AI gen một asset đẹp nhưng góc máy sai hoàn toàn so với scene. Cách xử lý nào an toàn hơn?",
    "options": [
      {
        "id": "Q54-0",
        "text": "Warp mạnh asset cho khớp góc hiện tại.",
        "correct": false
      },
      {
        "id": "Q54-1",
        "text": "Đặt asset nhỏ và ở xa để khác biệt góc máy khó bị người xem nhận ra hơn.",
        "correct": false
      },
      {
        "id": "Q54-2",
        "text": "Gen lại với góc máy cụ thể hoặc tìm asset khác phù hợp hơn.",
        "correct": true
      },
      {
        "id": "Q54-3",
        "text": "Blur asset rồi thêm shadow để che khác biệt.",
        "correct": false
      }
    ],
    "explanation": "Góc máy sai thường khó cứu bằng biến dạng mạnh; gen hoặc tìm lại asset phù hợp sẽ an toàn hơn."
  },
  {
    "id": "Q55",
    "category": "situations",
    "prompt": "Người mẫu nằm bên trái và đang nhìn sang phải; phía phải được để trống để dẫn hướng mắt. Khoảng trống này được đánh giá thế nào?",
    "options": [
      {
        "id": "Q55-0",
        "text": "Là lỗi vì bố cục không chia đều trọng lượng thị giác giữa hai bên của khung.",
        "correct": false
      },
      {
        "id": "Q55-1",
        "text": "Cần thêm asset bên phải để lấp phần diện tích trống.",
        "correct": false
      },
      {
        "id": "Q55-2",
        "text": "Là khoảng trống có chủ đích, hỗ trợ hướng nhìn và nhịp thở.",
        "correct": true
      },
      {
        "id": "Q55-3",
        "text": "Nên căn giữa người mẫu để bố cục an toàn hơn.",
        "correct": false
      }
    ],
    "explanation": "Khoảng trống có thể chủ động hỗ trợ hướng nhìn, nhịp thở và cân bằng bất đối xứng."
  },
  {
    "id": "Q56",
    "category": "situations",
    "prompt": "Background chỉ có một nguồn sáng vàng mạnh từ phía sau bên trái, không có nguồn phụ rõ ràng. Rim light vàng lại nằm mạnh ở cạnh phải người mẫu. Lỗi nằm ở đâu?",
    "options": [
      {
        "id": "Q56-0",
        "text": "Không có lỗi nếu rim light giúp người mẫu tách nền.",
        "correct": false
      },
      {
        "id": "Q56-1",
        "text": "Rim light chỉ cần đúng màu, không cần đúng hướng.",
        "correct": false
      },
      {
        "id": "Q56-2",
        "text": "Hướng rim light không khớp nguồn sáng và cần chỉnh lại.",
        "correct": true
      },
      {
        "id": "Q56-3",
        "text": "Chỉ cần giảm Opacity rim light là đủ.",
        "correct": false
      }
    ],
    "explanation": "Rim light phải có logic với nguồn sáng; nếu không có nguồn phụ hoặc phản xạ hợp lý thì viền sáng ở phía đối diện là sai."
  },
  {
    "id": "Q57",
    "category": "situations",
    "prompt": "Content yêu cầu title, quà tặng, thời gian và CTA đều nổi ngang nhau. Designer nên phản hồi thế nào?",
    "options": [
      {
        "id": "Q57-0",
        "text": "Dùng bốn màu khác nhau để mỗi nhóm đều nổi.",
        "correct": false
      },
      {
        "id": "Q57-1",
        "text": "Đề xuất thứ tự đọc và phân cấp theo mục tiêu truyền thông.",
        "correct": true
      },
      {
        "id": "Q57-2",
        "text": "Gom tất cả vào một khối để người xem đọc cùng lúc và không bỏ sót thông tin.",
        "correct": false
      },
      {
        "id": "Q57-3",
        "text": "Tăng size toàn bộ chữ rồi giảm bớt asset trang trí.",
        "correct": false
      }
    ],
    "explanation": "Dù nhiều thông tin đều quan trọng, thiết kế vẫn cần thứ tự đọc rõ để người xem tiếp nhận hiệu quả."
  },
  {
    "id": "Q58",
    "category": "situations",
    "prompt": "Asset đã đúng màu, hướng sáng và phối cảnh nhưng vẫn hơi lạc khỏi scene. Nên kiểm tra gì tiếp?",
    "options": [
      {
        "id": "Q58-0",
        "text": "Độ nét, noise, đường cắt, contact shadow và màu môi trường.",
        "correct": true
      },
      {
        "id": "Q58-1",
        "text": "Kiểm tra định dạng PNG/JPG và profile màu của asset có giống background hay không.",
        "correct": false
      },
      {
        "id": "Q58-2",
        "text": "Số lượng Adjustment Layer đã áp lên asset.",
        "correct": false
      },
      {
        "id": "Q58-3",
        "text": "Asset có nằm cùng group với background hay không.",
        "correct": false
      }
    ],
    "explanation": "Sau màu, ánh sáng và phối cảnh, các khác biệt về độ nét, noise, đường cắt, shadow và màu môi trường thường làm lộ việc ghép."
  }
];
