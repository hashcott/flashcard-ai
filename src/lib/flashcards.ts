export interface FlashcardType {
  id: number;
  question: string;
  options?: string[];
  correctAnswer?: string;
  answer: string; // Keep for backward compatibility
  explanation?: string;
}

export const flashcards: FlashcardType[] = [
  // ĐỀ KIỂM TRA 01
  {
    id: 1,
    question: "Câu 1: Theo ma trận quản lý thời gian Eisenhower, việc phát triển cá nhân là việc:",
    options: [
      "a) Không quan trọng và không khẩn cấp",
      "b) Quan trọng nhưng không khẩn cấp",
      "c) Khẩn cấp nhưng không quan trọng",
      "d) Vừa khẩn cấp vừa quan trọng"
    ],
    correctAnswer: "b",
    answer: "b) Quan trọng nhưng không khẩn cấp",
    explanation: "Phát triển cá nhân là việc quan trọng về lâu dài nhưng không có tính cấp bách tức thì."
  },
  {
    id: 2,
    question: "Câu 2: Thứ tự các bước quản lý thời gian theo công thức 5 chữ A bao gồm:",
    answer: "d) Nhận biết - Phân tích điều cần làm - Kẻ cắp thời gian - Lập thứ tự ưu tiên - Hoàn thiện kỹ năng, lập kế hoạch",
    explanation: "Công thức 5A: Awareness (Nhận biết), Analyze (Phân tích), Assassin (Kẻ cắp thời gian), Arrange (Lập thứ tự ưu tiên), Action (Hoàn thiện kỹ năng)"
  },
  {
    id: 3,
    question: "Câu 3: Theo ma trận quản lý thời gian Eisenhower, bạn nên dành khoảng bao nhiêu % thời gian cho việc quan trọng, không khẩn cấp?",
    answer: "c) 60 - 65%",
    explanation: "Phần lớn thời gian nên dành cho những việc quan trọng nhưng không khẩn cấp để có kết quả dài hạn tốt nhất."
  },
  {
    id: 4,
    question: "Câu 4: Hiệu quả làm việc nhóm sẽ bị ảnh hưởng nếu:",
    answer: "b) Mỗi thành viên theo đuổi một mục tiêu khác nhau",
    explanation: "Việc không có mục tiêu chung sẽ làm giảm hiệu quả làm việc nhóm."
  },
  {
    id: 5,
    question: "Câu 5: Bước đầu tiên trong công cụ RBS là gì?",
    answer: "c) Xác định người có thể nhận xét về mình",
    explanation: "RBS (Reflected Best Self) bắt đầu bằng việc tìm những người có thể đưa ra phản hồi về điểm mạnh của bạn."
  },
  {
    id: 6,
    question: "Câu 6: Dành thời gian cho việc học tiếng Anh, tin học, bổ sung các kỹ năng xã hội, đọc sách hoặc tham gia các hoạt động xã hội thuộc cấp độ nào trong ma trận quản lý thời gian Eisenhower?",
    answer: "c) Quan trọng, không khẩn cấp",
    explanation: "Các hoạt động phát triển bản thân là quan trọng về lâu dài nhưng không cấp bách."
  },
  {
    id: 7,
    question: "Câu 7: Theo mô hình cửa sổ Johari, nếu một người sống quá khép kín, ngại giao tiếp thì người đó có thể gặp những bất lợi gì?",
    answer: "c) Thiếu thông tin, bỏ lỡ cơ hội hợp tác, phát triển",
    explanation: "Sống khép kín làm giảm khả năng học hỏi và phát triển từ người khác."
  },
  {
    id: 8,
    question: "Câu 8: Phương pháp quản lý thời gian Pomodoro, giữa các Pomodoro chúng ta nên nghỉ:",
    answer: "a) 3 - 5 phút",
    explanation: "Pomodoro khuyến nghị nghỉ ngắn 3-5 phút giữa các phiên làm việc 25 phút."
  },
  {
    id: 9,
    question: "Câu 9: Theo ma trận quản lý thời gian Eisenhower, bạn nên dành khoảng bao nhiêu % thời gian cho việc quan trọng, khẩn cấp?",
    answer: "d) 25 - 30%",
    explanation: "Việc quan trọng và khẩn cấp nên được giới hạn để tránh stress và làm việc dập lửa liên tục."
  },
  {
    id: 10,
    question: "Câu 10: Cách mà chúng ta nghĩ về cơ thể của mình như chiều cao, cân nặng, hình dáng, màu tóc, màu da, các bộ phận trên cơ thể… là nhận thức về yếu tố nào?",
    answer: "b) Yếu tố thể chất",
    explanation: "Những đặc điểm vật lý của cơ thể thuộc về yếu tố thể chất."
  },
  {
    id: 11,
    question: "Câu 11: Giá trị lớn nhất của tự nhận thức hướng đến là?",
    answer: "d) Thay đổi bản thân theo hướng tích cực",
    explanation: "Mục đích cuối cùng của tự nhận thức là để cải thiện và phát triển bản thân."
  },
  {
    id: 12,
    question: "Câu 12: Trong trắc nghiệm DISC, chữ I dùng để chỉ nhóm người có tính cách:",
    answer: "d) Ảnh hưởng (Influence)",
    explanation: "I trong DISC là Influence - những người có khả năng ảnh hưởng và giao tiếp tốt."
  },
  {
    id: 13,
    question: "Câu 13: Các thành viên chưa cởi mở với nhau và nhóm vẫn còn lộn xộn thuộc giai đoạn nào?",
    answer: "a) Hình thành (Forming)",
    explanation: "Giai đoạn Forming là khi nhóm mới thành lập, các thành viên còn dò dẫm và chưa quen nhau."
  },
  {
    id: 14,
    question: "Câu 14: Để quản lý thời gian được tốt hơn, chúng ta nên:",
    answer: "c) Đặt mục tiêu dài hạn, ngắn hạn và thứ tự ưu tiên cho công việc",
    explanation: "Lập kế hoạch và ưu tiên công việc là nền tảng của quản lý thời gian hiệu quả."
  },
  {
    id: 15,
    question: "Câu 15: Các thành viên chưa cởi mở với nhau và nhóm vẫn còn lộn xộn thuộc giai đoạn nào? (lặp lại)",
    answer: "a) Hình thành (Forming)",
    explanation: "Giai đoạn đầu tiên trong mô hình phát triển nhóm Tuckman."
  },
  {
    id: 16,
    question: "Câu 16: Để quản lý thời gian được tốt hơn, chúng ta nên: (lặp lại)",
    answer: "c) Đặt mục tiêu dài hạn, ngắn hạn và thứ tự ưu tiên cho công việc",
    explanation: "Quản lý thời gian hiệu quả cần có mục tiêu rõ ràng và ưu tiên hợp lý."
  },
  {
    id: 17,
    question: "Câu 17: Các bước tổ chức cuộc họp nhóm:",
    answer: "a) Lập kế hoạch và chuẩn bị, triển khai cuộc họp, thảo luận và ra quyết định, kết thúc cuộc họp",
    explanation: "Quy trình chuẩn cho một cuộc họp hiệu quả."
  },
  {
    id: 18,
    question: "Câu 18: Nội dung nào dưới đây không phải là ý nghĩa của tự nhận thức?",
    answer: "b) Tự nhận thức chịu ảnh hưởng những đánh giá từ bên ngoài",
    explanation: "Tự nhận thức xuất phát từ bên trong, không chỉ dựa vào đánh giá bên ngoài."
  },
  {
    id: 19,
    question: "Câu 19: Chia sẻ và giải tỏa cảm xúc là bước thứ mấy trong các bước quản trị cảm xúc?",
    answer: "c) Bước 3",
    explanation: "Sau khi nhận diện và tìm nguyên nhân, bước tiếp theo là chia sẻ và giải tỏa."
  },
  {
    id: 20,
    question: "Câu 20: Xác định các mục tiêu quan trọng của bản thân là bước thứ mấy trong các bước quản lý thời gian?",
    answer: "a) Bước 1",
    explanation: "Xác định mục tiêu là bước đầu tiên trong quản lý thời gian."
  },
  {
    id: 21,
    question: "Câu 21: Công cụ SWOT phân tích những yếu tố nào?",
    answer: "d) Điểm mạnh, điểm yếu, cơ hội, nguy cơ",
    explanation: "SWOT là Strengths, Weaknesses, Opportunities, Threats."
  },
  {
    id: 22,
    question: "Câu 22: Người lãnh đạo cho phép các thành viên được quyền ra quyết định nhưng vẫn chịu trách nhiệm đối với những quyết định của mình là đặc điểm của phong cách lãnh đạo nào?",
    answer: "a) Phong cách lãnh đạo ủy thác",
    explanation: "Lãnh đạo ủy thác (Delegating) trao quyền cho thành viên nhưng vẫn giữ trách nhiệm cuối cùng."
  },
  {
    id: 23,
    question: "Câu 23: Trong trắc nghiệm DISC, chữ C dùng để chỉ nhóm người có tính cách:",
    answer: "a) Tuân thủ (Compliance)",
    explanation: "C trong DISC là Compliance - những người tuân thủ quy tắc và chú trọng chi tiết."
  },
  {
    id: 24,
    question: "Câu 24: Khi bị sếp phê bình, bạn cảm thấy buồn bã. Bạn nên áp dụng bước nào để quản trị cảm xúc?",
    answer: "a) Nhận diện cảm xúc buồn bã và tìm nguyên nhân",
    explanation: "Bước đầu tiên trong quản trị cảm xúc là nhận diện và tìm hiểu nguyên nhân."
  },
  {
    id: 25,
    question: "Câu 25: Vì sao con người cần nhận thức được điểm mạnh và điểm yếu của bản thân mình?",
    answer: "c) Vì con người chỉ có thể tự tin khi biết được điểm mạnh và điểm yếu của bản thân để phát triển và khắc phục nó",
    explanation: "Tự nhận thức giúp phát huy điểm mạnh và khắc phục điểm yếu một cách có ý thức."
  },
  {
    id: 26,
    question: "Câu 26: Quản trị cảm xúc khác với việc đè nén cảm xúc ở điểm nào?",
    answer: "c) Quản trị cảm xúc là để cảm xúc biểu hiện ở mức độ phù hợp",
    explanation: "Quản trị cảm xúc không phải là đè nén mà là biểu hiện một cách phù hợp."
  },
  {
    id: 27,
    question: "Câu 27: Nguyên tắc SMART trong xác định mục tiêu gồm:",
    answer: "b) Cụ thể, có thể đo lường được, có thể thực hiện được, có tính thực tiễn, có giới hạn thời gian",
    explanation: "SMART: Specific, Measurable, Achievable, Relevant, Time-bound."
  },
  {
    id: 28,
    question: "Câu 28: Theo phương pháp quản lý thời gian Pomodoro, sau 4 phiên Pomodoro, chúng ta nên nghỉ bao nhiêu phút?",
    answer: "b) 15 – 30 phút",
    explanation: "Sau 4 Pomodoro (khoảng 2 tiếng làm việc), cần nghỉ dài hơn để phục hồi."
  },
  {
    id: 29,
    question: "Câu 29: Ô 'Mù' trong cửa sổ Johari là gì?",
    answer: "a) Những thông tin cả bản thân và người khác đều không biết",
    explanation: "Vùng Mù (Unknown) là những điều chưa ai biết về bản thân."
  },
  {
    id: 30,
    question: "Câu 30: Tiêu chí nào sau đây thể hiện được vai trò của người lãnh đạo hiện đại?",
    answer: "a) Người lãnh đạo có vai trò quan sát, thúc đẩy các hoạt động và làm tăng thêm giá trị cho nhóm",
    explanation: "Lãnh đạo hiện đại là người hỗ trợ và tạo điều kiện, không phải kiểm soát mọi thứ."
  },
  {
    id: 31,
    question: "Câu 31: Điểm quan trọng nhất để tự hoàn thiện bản thân là cần xác định được:",
    answer: "a) Điểm mạnh, điểm yếu của bản thân",
    explanation: "Biết điểm mạnh và yếu là nền tảng để phát triển bản thân."
  },
  {
    id: 32,
    question: "Câu 32: Kết quả của việc không quản trị được cảm xúc là:",
    answer: "b) Dẫn đến hành động thiếu suy nghĩ và ứng xử không phù hợp",
    explanation: "Không kiểm soát cảm xúc dẫn đến những hành động và quyết định sai lầm."
  },
  {
    id: 33,
    question: "Câu 33: Các cách để quản trị cảm xúc trong thời gian dài là:",
    answer: "d) Tìm hiểu nguyên nhân cảm xúc và hợp thức hóa nguyên nhân, rèn luyện sự tự tin, tập suy nghĩ lạc quan, chia sẻ và giải tỏa cảm xúc",
    explanation: "Quản trị cảm xúc dài hạn cần nhiều kỹ năng và thói quen tích cực."
  },
  {
    id: 34,
    question: "Câu 34: Nội dung nào không phải là vai trò của quản trị cảm xúc?",
    answer: "b) Quản trị cảm xúc giúp ta làm chủ được bản thân trong mọi tình huống",
    explanation: "Quản trị cảm xúc giúp kiểm soát tốt hơn nhưng không phải làm chủ hoàn toàn trong mọi tình huống."
  },
  {
    id: 35,
    question: "Câu 35: Người lãnh đạo tôn trọng ý kiến cấp dưới, tạo điều kiện để họ tham gia vào việc đưa ra các quyết định là đặc điểm của phong cách lãnh đạo nào?",
    answer: "c) Phong cách lãnh đạo dân chủ",
    explanation: "Lãnh đạo dân chủ khuyến khích sự tham gia và đóng góp ý kiến từ thành viên."
  },
  {
    id: 36,
    question: "Câu 36: Ô 'Mở' trong cửa sổ Johari đề cập đến điều gì?",
    answer: "b) Những thông tin cả bản thân và người khác đều biết",
    explanation: "Vùng Mở (Open/Arena) là những gì cả bạn và người khác đều biết về bạn."
  },
  {
    id: 37,
    question: "Câu 37: Một trong những cách để hạn chế mâu thuẫn trong nhóm là:",
    answer: "a) Xây dựng các tiêu chí, quy định về quyền lợi của thành viên",
    explanation: "Quy tắc rõ ràng giúp giảm xung đột và mâu thuẫn trong nhóm."
  },
  {
    id: 38,
    question: "Câu 38: Nhận định nào dưới đây đúng nhất về quản trị thời gian?",
    answer: "b) Lên kế hoạch sử dụng thời gian cho những mục tiêu trong công việc và cuộc sống",
    explanation: "Quản trị thời gian là lập kế hoạch và sử dụng thời gian hiệu quả để đạt mục tiêu."
  },
  {
    id: 39,
    question: "Câu 39: Công việc mà bạn có thể bàn giao hoặc nhờ người khác làm giúp thuộc cấp độ nào trong ma trận quản lý thời gian Eisenhower?",
    answer: "c) Không quan trọng, khẩn cấp",
    explanation: "Những việc khẩn cấp nhưng không quan trọng có thể ủy thác cho người khác."
  },
  {
    id: 40,
    question: "Câu 40: Con người cần kiểm soát được cảm xúc của mình để chúng bộc lộ một cách thích hợp đúng lúc đúng chỗ vì:",
    answer: "d) Đó là cách tôn trọng đối tượng giao tiếp và những người xung quanh",
    explanation: "Kiểm soát cảm xúc thể hiện sự tôn trọng và văn hóa giao tiếp."
  },
  {
    id: 41,
    question: "Câu 41: Bạn đang tranh luận gay gắt với bạn bè và cảm thấy căng thẳng. Cách nào sau đây giúp hạ nhiệt cảm xúc?",
    answer: "a) Tạm dừng và đi dạo một lúc",
    explanation: "Tạm dừng giúp bạn lấy lại bình tĩnh trước khi tiếp tục."
  },
  {
    id: 42,
    question: "Câu 42: Cảm xúc, động cơ, tính cách, nhu cầu, sở thích, lý tưởng, niềm tin, giá trị… là nhận thức về yếu tố nào?",
    answer: "c) Yếu tố tâm lý",
    explanation: "Các đặc điểm nội tâm và tinh thần thuộc về yếu tố tâm lý."
  },
  {
    id: 43,
    question: "Câu 43: Đi dạo, luyện tập thể dục là hoạt động nên làm ở bước quản trị cảm xúc nào?",
    answer: "b) Hạ nhiệt cảm xúc",
    explanation: "Vận động thể chất giúp giải tỏa và hạ nhiệt cảm xúc tiêu cực."
  },
  {
    id: 44,
    question: "Câu 44: Chỉ số nào có ảnh hưởng lớn nhất đến sự thành công và hạnh phúc của con người?",
    answer: "b) Chỉ số thông minh cảm xúc (EQ)",
    explanation: "EQ được nghiên cứu chứng minh có vai trò quan trọng hơn IQ trong thành công."
  },
  {
    id: 45,
    question: "Câu 45: Người lãnh đạo không khuyến khích ý kiến của các thành viên trong nhóm là đặc điểm của phong cách lãnh đạo nào?",
    answer: "c) Phong cách lãnh đạo độc đoán",
    explanation: "Lãnh đạo độc đoán (Autocratic) tự mình quyết định mà không lắng nghe ý kiến."
  },
  {
    id: 46,
    question: "Câu 46: Cảm xúc 'tình yêu' được tạo ra từ sự kết hợp của hai cảm xúc nào theo bánh xe cảm xúc?",
    answer: "a) Hân hoan và tin tưởng",
    explanation: "Theo Plutchik, tình yêu là sự kết hợp của vui mừng (joy) và tin tưởng (trust)."
  },
  {
    id: 47,
    question: "Câu 47: Số lượng thành viên tối ưu cho một nhóm làm việc là bao nhiêu?",
    answer: "d) Từ 5 đến 7 thành viên, vì dễ phối hợp và tương tác hiệu quả",
    explanation: "Nhóm 5-7 người cân bằng giữa đa dạng ý kiến và khả năng phối hợp."
  },
  {
    id: 48,
    question: "Câu 48: Ai là nhà tâm lý học đầu tiên đưa ra thuật ngữ 'trí tuệ cảm xúc'?",
    answer: "d) Jack Meyer (và Peter Salovey)",
    explanation: "John Mayer và Peter Salovey là người đầu tiên định nghĩa EQ năm 1990."
  },
  {
    id: 50,
    question: "Câu 50: Người lãnh đạo tôn trọng ý kiến cấp dưới, tạo điều kiện để họ tham gia vào việc đưa ra các quyết định là đặc điểm của phong cách lãnh đạo nào?",
    answer: "b) Phong cách lãnh đạo dân chủ",
    explanation: "Lãnh đạo dân chủ khuyến khích sự tham gia và tôn trọng ý kiến của thành viên."
  },
  {
    id: 51,
    question: "Câu 51: Con người cần kiểm soát được cảm xúc của mình để chúng bộc lộ một cách thích hợp đúng lúc đúng chỗ vì:",
    answer: "c) Đó là cách tôn trọng đối tượng giao tiếp và những người xung quanh",
    explanation: "Kiểm soát cảm xúc là dấu hiệu của sự trưởng thành và tôn trọng người khác."
  },

  // ĐỀ KIỂM TRA 02
  {
    id: 52,
    question: "Câu 1 (Đề 02): Vai trò của tạo động lực đối với tổ chức là gì?",
    answer: "C. Tăng hiệu quả sử dụng nguồn nhân lực",
    explanation: "Động lực giúp nhân viên làm việc hiệu quả hơn, tăng năng suất."
  },
  {
    id: 53,
    question: "Câu 2 (Đề 02): Khi viết mục tiêu nghề nghiệp trong CV, bạn nên tránh điều gì?",
    answer: "D. Sao chép mục tiêu chung chung từ mạng",
    explanation: "Mục tiêu cần cụ thể và phù hợp với vị trí ứng tuyển, không nên chung chung."
  },
  {
    id: 54,
    question: "Câu 3 (Đề 02): Sự khác biệt chính giữa mâu thuẫn và xung đột là gì?",
    answer: "A. Mâu thuẫn xảy ra trước và có mức độ thấp hơn xung đột",
    explanation: "Mâu thuẫn chưa giải quyết có thể leo thang thành xung đột."
  },
  {
    id: 55,
    question: "Câu 4 (Đề 02): Trong một cuộc họp, hai thành viên tranh cãi gay gắt về chiến lược kinh doanh. Bạn nên áp dụng chiến lược nào?",
    answer: "B. Hợp tác để tìm giải pháp đôi bên cùng lợi",
    explanation: "Chiến lược hợp tác (win-win) là tốt nhất cho các vấn đề quan trọng."
  },
  {
    id: 56,
    question: "Câu 5 (Đề 02): Tạo động lực là gì?",
    answer: "A. Việc vận dụng các biện pháp để cá nhân hài lòng hơn trong công việc",
    explanation: "Tạo động lực là quá trình khuyến khích người khác làm việc tốt hơn."
  },
  {
    id: 57,
    question: "Câu 6 (Đề 02): Thái độ làm việc nào được doanh nghiệp đánh giá cao nhất?",
    answer: "A. Tôn trọng kỷ luật, nguyên tắc làm việc và đồng nghiệp",
    explanation: "Thái độ chuyên nghiệp và tôn trọng là nền tảng của môi trường làm việc tốt."
  },
  {
    id: 58,
    question: "Câu 7 (Đề 02): Vai trò của tạo động lực đối với cá nhân là gì?",
    answer: "C. Giúp kiểm soát cảm xúc và tinh thần khi gặp khó khăn",
    explanation: "Động lực giúp cá nhân vượt qua thử thách và duy trì tinh thần tích cực."
  },
  {
    id: 59,
    question: "Câu 8 (Đề 02): Chiến lược 'nhượng bộ' trong quản trị xung đột có đặc điểm gì?",
    answer: "C. Một bên từ bỏ quyền lợi để bên kia đạt mục tiêu",
    explanation: "Nhượng bộ (Accommodating) là ưu tiên mối quan hệ hơn quyền lợi cá nhân."
  },
  {
    id: 60,
    question: "Câu 9 (Đề 02): Nguyên tắc quản trị xung đột theo Thomas-Kilmann là gì?",
    answer: "D. Nên bắt đầu bằng chiến lược hợp tác để cùng thắng",
    explanation: "Hợp tác là chiến lược tốt nhất khi cả hai bên đều quan trọng."
  },
  {
    id: 61,
    question: "Câu 10 (Đề 02): Câu hỏi thử thách trong phỏng vấn nhằm mục đích gì?",
    answer: "C. Đánh giá khả năng phản ứng nhanh và giải quyết vấn đề",
    explanation: "Câu hỏi khó kiểm tra cách ứng viên xử lý áp lực và tình huống bất ngờ."
  },
  {
    id: 62,
    question: "Câu 11 (Đề 02): Nếu bạn nhận thấy một đồng nghiệp không đồng ý với cách phân công công việc, bạn sẽ làm gì đầu tiên?",
    answer: "B. Lắng nghe ý kiến của đồng nghiệp để hiểu nguyên nhân",
    explanation: "Lắng nghe là bước đầu tiên để hiểu và giải quyết bất đồng."
  },
  {
    id: 63,
    question: "Câu 12 (Đề 02): Vì sao xung đột nhóm thường khó giải quyết hơn xung đột cá nhân?",
    answer: "C. Vì nó liên quan đến lợi ích và mục tiêu của nhiều người",
    explanation: "Xung đột nhóm phức tạp hơn do nhiều bên liên quan với lợi ích khác nhau."
  },
  {
    id: 64,
    question: "Câu 13 (Đề 02): Phần kết bài của đơn/thư ứng tuyển nên thể hiện điều gì?",
    answer: "A. Sự nhiệt huyết và mong muốn được phỏng vấn",
    explanation: "Kết thúc thư ứng tuyển nên thể hiện sự quan tâm và mong muốn tiếp tục."
  },
  {
    id: 65,
    question: "Câu 14 (Đề 02): Bạn nên trả lời thế nào khi nhà tuyển dụng hỏi về mức lương mong muốn?",
    answer: "D. Hỏi về mức lương công ty đề xuất và đưa ra khoảng mong muốn",
    explanation: "Cách khéo léo là hỏi ngược và đưa ra một khoảng linh hoạt."
  },
  {
    id: 66,
    question: "Câu 15 (Đề 02): Quản trị xung đột được hiểu là gì?",
    answer: "B. Quá trình phát hiện và hạn chế khía cạnh tiêu cực của xung đột",
    explanation: "Quản trị xung đột là giảm thiểu tác hại và tận dụng khía cạnh tích cực."
  },
  {
    id: 67,
    question: "Câu 16 (Đề 02): Tác động tích cực của xung đột đối với tổ chức là gì?",
    answer: "C. Tăng cường sự liên kết và mối quan hệ tích cực",
    explanation: "Xung đột được quản lý tốt có thể làm rõ vấn đề và cải thiện mối quan hệ."
  },
  {
    id: 68,
    question: "Câu 17 (Đề 02): Bước cuối cùng trong mô hình ADKAR là gì?",
    answer: "B. Củng cố (Reinforcement)",
    explanation: "ADKAR: Awareness, Desire, Knowledge, Ability, Reinforcement."
  },
  {
    id: 69,
    question: "Câu 18 (Đề 02): Tại sao sự tự mãn được coi là rào cản lớn trong mô hình Kotter?",
    answer: "C. Vì nó ngăn cản nhân viên ra khỏi vùng an toàn",
    explanation: "Tự mãn làm mọi người không thấy cần thiết phải thay đổi."
  },
  {
    id: 70,
    question: "Câu 19 (Đề 02): Một công ty muốn sử dụng mô hình Kotter để cải thiện hiệu suất. Hành động nào phù hợp với bước 'tạo những chiến thắng ngắn hạn'?",
    answer: "A. Khen thưởng các thành công nhỏ",
    explanation: "Quick wins giúp duy trì động lực và chứng minh sự thay đổi đang có hiệu quả."
  },
  {
    id: 71,
    question: "Câu 20 (Đề 02): Nguyên nhân nào liên quan đến tổ chức lao động gây ra xung đột?",
    answer: "B. Thiếu định hướng và chiến lược trong tổ chức",
    explanation: "Thiếu chiến lược rõ ràng dẫn đến bất đồng về hướng đi."
  },
  {
    id: 72,
    question: "Câu 21 (Đề 02): Vì sao xung đột ngầm có thể nguy hiểm hơn xung đột công khai?",
    answer: "A. Vì nó không thể hiện ra ngoài nên khó nhận diện và giải quyết",
    explanation: "Xung đột ngầm âm ỉ và có thể bùng phát mạnh mẽ khi tích tụ."
  },
  {
    id: 73,
    question: "Câu 22 (Đề 02): Bước thứ tư trong mô hình tám bước của Kotter là gì?",
    answer: "D. Truyền đạt tầm nhìn",
    explanation: "Kotter 8 bước: 1.Khẩn trương, 2.Liên minh, 3.Tầm nhìn, 4.Truyền đạt, 5.Trao quyền, 6.Quick wins, 7.Củng cố, 8.Thể chế hóa."
  },
  {
    id: 74,
    question: "Câu 23 (Đề 02): Nếu nhà tuyển dụng yêu cầu danh sách người tham khảo, bạn nên làm gì?",
    answer: "A. Xin phép và trao đổi trước với người tham khảo",
    explanation: "Luôn xin phép người tham khảo trước để họ sẵn sàng và đưa ra phản hồi tốt."
  },
  {
    id: 75,
    question: "Câu 24 (Đề 02): Để tạo động lực trong bước 'mong muốn' của mô hình ADKAR, nhà quản lý nên làm gì?",
    answer: "C. Thuyết phục nhân viên về lợi ích thay đổi",
    explanation: "Desire (Mong muốn) cần được tạo ra bằng cách giải thích lợi ích của thay đổi."
  },
  {
    id: 76,
    question: "Câu 25 (Đề 02): Học thuyết X và Y được phát triển bởi ai?",
    answer: "B. Douglas McGregor",
    explanation: "McGregor đưa ra lý thuyết X và Y về bản chất con người trong công việc."
  },
  {
    id: 77,
    question: "Câu 26 (Đề 02): Bạn nên trả lời thế nào khi được hỏi: 'Tại sao bạn nghỉ việc ở công ty cũ?'",
    answer: "B. Nêu lý do định hướng nghề nghiệp mới",
    explanation: "Nên tích cực và hướng về tương lai thay vì phàn nàn về quá khứ."
  },
  {
    id: 78,
    question: "Câu 27 (Đề 02): Nếu bạn chưa có kinh nghiệm làm việc, bạn nên nhấn mạnh điều gì trong CV?",
    answer: "B. Kiến thức chuyên ngành và chứng chỉ liên quan",
    explanation: "Khi thiếu kinh nghiệm, tập trung vào học vấn, kỹ năng và tiềm năng."
  },
  {
    id: 79,
    question: "Câu 28 (Đề 02): Một công ty muốn lập kế hoạch quản trị sự thay đổi. Hành động nào nên thực hiện đầu tiên?",
    answer: "C. Phân tích bối cảnh tổ chức",
    explanation: "Cần hiểu tình hình hiện tại trước khi lập kế hoạch thay đổi."
  },
  {
    id: 80,
    question: "Câu 29 (Đề 02): Một nhà quản lý muốn áp dụng mô hình ADKAR để thay đổi dịch vụ khách hàng. Hành động nào phù hợp với bước 'khả năng'?",
    answer: "D. Cung cấp cơ hội thực hành kỹ năng mới",
    explanation: "Ability (Khả năng) cần được phát triển thông qua đào tạo và thực hành."
  },
  {
    id: 81,
    question: "Câu 30 (Đề 02): Nếu nhà tuyển dụng hỏi: 'Bạn có câu hỏi nào?', bạn nên hỏi gì?",
    answer: "D. Cơ hội đào tạo và thăng tiến trong công ty là gì?",
    explanation: "Hỏi về phát triển nghề nghiệp cho thấy bạn nghiêm túc và tham vọng."
  },
  {
    id: 82,
    question: "Câu 31 (Đề 02): Theo Maslow, nhu cầu nào xuất hiện khi nhu cầu sinh lý được thỏa mãn?",
    answer: "D. Nhu cầu an toàn",
    explanation: "Tháp Maslow: Sinh lý → An toàn → Xã hội → Tôn trọng → Tự hoàn thiện."
  },
  {
    id: 83,
    question: "Câu 32 (Đề 02): Một công ty muốn áp dụng mô hình ADKAR để thay đổi quy trình sản xuất. Bước đầu tiên nên làm gì?",
    answer: "C. Tạo nhận thức về nhu cầu thay đổi",
    explanation: "Awareness (Nhận thức) là bước đầu tiên trong ADKAR."
  },
  {
    id: 84,
    question: "Câu 33 (Đề 02): Để phá vỡ sự đông cứng của hiện trạng theo mô hình Lewin, tổ chức nên làm gì?",
    answer: "D. Tăng cường áp lực thúc đẩy thay đổi",
    explanation: "Unfreeze (Rã đông) cần tạo động lực và áp lực để người ta sẵn sàng thay đổi."
  },
  {
    id: 85,
    question: "Câu 34 (Đề 02): Làm thế nào để áp dụng học thuyết X của McGregor trong quản lý?",
    answer: "A. Giám sát chặt chẽ và áp dụng thưởng phạt nghiêm ngặt",
    explanation: "Học thuyết X cho rằng người lao động lười biếng nên cần kiểm soát chặt."
  },
  {
    id: 86,
    question: "Câu 35 (Đề 02): Yếu tố nào không thuộc học thuyết kỳ vọng của Vroom?",
    answer: "A. Sự sáng tạo trong công việc",
    explanation: "Vroom: Expectancy (Kỳ vọng) → Instrumentality (Tin vào thưởng) → Valence (Giá trị thưởng)."
  },
  {
    id: 87,
    question: "Câu 36 (Đề 02): Học thuyết Y của McGregor khác với học thuyết X ở điểm nào?",
    answer: "C. Học thuyết Y tin rằng con người có khả năng tự khích lệ",
    explanation: "Học thuyết Y tin con người tự động viên và tìm kiếm trách nhiệm."
  },
  {
    id: 88,
    question: "Câu 37 (Đề 02): Nhân tố nào thuộc nhóm nhân tố động viên của Herzberg?",
    answer: "B. Sự ghi nhận thành tích và trách nhiệm",
    explanation: "Herzberg: Hygiene factors (Lương, điều kiện) vs Motivators (Thành tích, trách nhiệm, phát triển)."
  },
  {
    id: 89,
    question: "Câu 38 (Đề 02): Nếu bạn ứng tuyển vào công ty kế toán, bạn nên mặc trang phục gì khi phỏng vấn?",
    answer: "B. Complet lịch sự với áo sơ mi",
    explanation: "Ngành tài chính kế toán yêu cầu trang phục công sở chuyên nghiệp."
  },
  {
    id: 90,
    question: "Câu 39 (Đề 02): Nhu cầu nào không thuộc học thuyết ba nhu cầu của McClelland?",
    answer: "C. Nhu cầu an toàn",
    explanation: "McClelland: Need for Achievement, Affiliation, Power (Thành tích, Hòa nhập, Quyền lực)."
  },
  {
    id: 91,
    question: "Câu 40 (Đề 02): Để thực hiện bước 'truyền đạt tầm nhìn' trong mô hình Kotter, nhà quản lý nên làm gì?",
    answer: "B. Tổ chức các buổi họp để giải thích chiến lược",
    explanation: "Truyền đạt tầm nhìn cần giao tiếp rõ ràng và liên tục."
  },
  {
    id: 92,
    question: "Câu 41 (Đề 02): Nếu bạn được hỏi: 'Bạn khó làm việc với người như thế nào?', bạn sẽ trả lời thế nào?",
    answer: "A. Nêu một tính cách cụ thể và cách bạn hợp tác với họ",
    explanation: "Thể hiện sự linh hoạt và khả năng làm việc với nhiều kiểu người."
  },
  {
    id: 93,
    question: "Câu 42 (Đề 02): Xung đột nội dung là gì?",
    answer: "B. Xung đột về quan điểm trái ngược nhau giữa các bên",
    explanation: "Xung đột nội dung liên quan đến ý kiến và quan điểm khác nhau về công việc."
  },
  {
    id: 94,
    question: "Câu 43 (Đề 02): Mô hình thay đổi tổ chức của Kurt Lewin có mấy giai đoạn?",
    answer: "D. Ba giai đoạn",
    explanation: "Lewin: Unfreeze (Rã đông) → Change (Thay đổi) → Refreeze (Đông cứng lại)."
  },
  {
    id: 95,
    question: "Câu 44 (Đề 02): Bạn nên làm gì khi nhà tuyển dụng hỏi: 'Điểm yếu của bạn là gì?'",
    answer: "B. Nêu một điểm yếu và cách bạn khắc phục",
    explanation: "Thể hiện tự nhận thức và cam kết cải thiện bản thân."
  },
  {
    id: 96,
    question: "Câu 45 (Đề 02): Chiến lược 'thỏa hiệp' trong quản trị xung đột có đặc điểm gì?",
    answer: "D. Các bên từ bỏ một phần quyền lợi để đạt giải pháp chung",
    explanation: "Thỏa hiệp (Compromising) là giải pháp giữa, cả hai bên đều nhường một phần."
  },
  {
    id: 97,
    question: "Câu 46 (Đề 02): Quản trị sự thay đổi là quá trình gì?",
    answer: "D. Hoạch định, tổ chức, lãnh đạo và kiểm tra sự đổi mới",
    explanation: "Change management là quá trình quản lý có hệ thống việc chuyển đổi tổ chức."
  },
  {
    id: 98,
    question: "Câu 47 (Đề 02): Nếu một nhân viên có nhu cầu hòa nhập, bạn nên làm gì?",
    answer: "B. Tạo cơ hội tham gia các hoạt động nhóm",
    explanation: "Nhu cầu hòa nhập (Affiliation) được thỏa mãn qua tương tác và làm việc nhóm."
  },
  {
    id: 99,
    question: "Câu 48 (Đề 02): Chiến lược thỏa hiệp áp dụng khi nào?",
    answer: "C. Nỗ lực trước đó thất bại và cần hy sinh",
    explanation: "Thỏa hiệp được dùng khi các chiến lược khác không hiệu quả và cần giải quyết nhanh."
  },
  {
    id: 100,
    question: "Câu 49 (Đề 02): Mục đích của vòng phỏng vấn sàng lọc là gì?",
    answer: "C. Loại bỏ các ứng viên không đủ trình độ hoặc kỹ năng cơ bản",
    explanation: "Vòng sàng lọc nhằm thu hẹp số lượng ứng viên xuống những người đủ tiêu chuẩn."
  },
  {
    id: 101,
    question: "Câu 50 (Đề 02): Làm thế nào để đánh giá kết quả công việc thúc đẩy động lực?",
    answer: "A. Đảm bảo sự công bằng và ghi nhận thành tích",
    explanation: "Đánh giá công bằng và ghi nhận kịp thời là yếu tố quan trọng tạo động lực."
  }
];
