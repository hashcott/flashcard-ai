import { FlashcardType } from './flashcards';

// Định nghĩa các options cho từng câu hỏi dựa trên user request gốc
export const questionsWithOptions: Record<number, string[]> = {
  // ĐỀ KIỂM TRA 01
  1: [
    "a) Không quan trọng và không khẩn cấp",
    "b) Quan trọng nhưng không khẩn cấp",
    "c) Khẩn cấp nhưng không quan trọng",
    "d) Vừa khẩn cấp vừa quan trọng"
  ],
  2: [
    "a) Lập thứ tự ưu tiên - Nhận biết - Phân tích điều cần làm - Kẻ cắp thời gian - Hoàn thiện kỹ năng, lập kế hoạch",
    "b) Nhận biết - Lập thứ tự ưu tiên - Phân tích điều cần làm - Kẻ cắp thời gian - Hoàn thiện kỹ năng, lập kế hoạch",
    "c) Phân tích điều cần làm - Nhận biết - Lập thứ tự ưu tiên - Hoàn thiện kỹ năng - Kẻ cắp thời gian",
    "d) Nhận biết - Phân tích điều cần làm - Kẻ cắp thời gian - Lập thứ tự ưu tiên - Hoàn thiện kỹ năng, lập kế hoạch"
  ],
  3: [
    "a) 40 - 50%",
    "b) 30 - 40%",
    "c) 60 - 65%",
    "d) 20 - 30%"
  ],
  4: [
    "a) Nguyên tắc làm việc nhóm rõ ràng",
    "b) Mỗi thành viên theo đuổi một mục tiêu khác nhau",
    "c) Mỗi thành viên có một điểm mạnh khác nhau",
    "d) Sự phân công trách nhiệm cho các thành viên rõ ràng"
  ],
  5: [
    "a) Vẽ chân dung bản thân hoàn hảo",
    "b) Nhận ra các khuôn mẫu trong phản hồi",
    "c) Xác định người có thể nhận xét về mình",
    "d) Xây dựng lại bản thân dựa trên điểm mạnh"
  ],
  6: [
    "a) Quan trọng, khẩn cấp",
    "b) Không quan trọng, không khẩn cấp",
    "c) Quan trọng, không khẩn cấp",
    "d) Không quan trọng, khẩn cấp"
  ],
  7: [
    "a) Giữ được nhiều bí mật của bản thân",
    "b) Dành được nhiều thời gian cho bản thân",
    "c) Thiếu thông tin, bỏ lỡ cơ hội hợp tác, phát triển",
    "d) Được đánh giá là người thâm trầm, kín đáo"
  ],
  8: [
    "a) 3 - 5 phút",
    "b) 10 - 15 phút",
    "c) 15 - 20 phút",
    "d) 5 - 10 phút"
  ],
  9: [
    "a) Trên 30%",
    "b) 15 - 20%",
    "c) 5 - 10%",
    "d) 25 - 30%"
  ],
  10: [
    "a) Yếu tố tinh thần",
    "b) Yếu tố thể chất",
    "c) Yếu tố hoàn cảnh, môi trường",
    "d) Yếu tố tâm lý"
  ],
  11: [
    "a) Nhận biết những tổn thương của bản thân và tìm cách ứng phó với chúng",
    "b) Biết rõ mặt mạnh và mặt hạn chế của bản thân",
    "c) Hiểu rõ cảm xúc và tình cảm của của bản thân",
    "d) Thay đổi bản thân theo hướng tích cực"
  ],
  12: [
    "a) Tuân thủ",
    "b) Thống trị",
    "c) Kiên Định",
    "d) Ảnh hưởng"
  ],
  13: [
    "a) Hình thành",
    "b) Thực hiện",
    "c) Ổn định",
    "d) Xung đột"
  ],
  14: [
    "a) Hành động ngay, đừng mất quá nhiều thời gian suy nghĩ",
    "b) Thường xuyên kiểm tra email, tin nhắn",
    "c) Đặt mục tiêu dài hạn, ngắn hạn và thứ tự ưu tiên cho công việc",
    "d) Làm rất nhiều việc một lúc để có thời gian nghỉ ngơi nhiều hơn"
  ],
  15: [
    "a) Hình thành",
    "b) Thực hiện",
    "c) Ổn định",
    "d) Xung đột"
  ],
  16: [
    "a) Hành động ngay, đừng mất quá nhiều thời gian suy nghĩ",
    "b) Thường xuyên kiểm tra email, tin nhắn",
    "c) Đặt mục tiêu dài hạn, ngắn hạn và thứ tự ưu tiên cho công việc",
    "d) Làm rất nhiều việc một lúc để có thời gian nghỉ ngơi nhiều hơn"
  ],
  17: [
    "a) Lập kế hoạch và chuẩn bị, triển khai cuộc họp, thảo luận và ra quyết định, kết thúc cuộc họp",
    "b) Xác định chủ đề mục tiêu cuộc họp, giao nhiệm vụ ghi chép cho thư ký thảo luận, tổng kết",
    "c) Đưa tài liệu nội dung cuộc họp đến các thành viên,trao đổi nội dung, ra quyết định, kết luận",
    "d) Xác định thời gian cuộc họp, giới thiệu người tham gia, giới thiệu nội dung họp nhóm, thảo luận, kết thúc"
  ],
  18: [
    "a) Tự nhận thức giúp mỗi cá nhân tạo dựng sự thành công",
    "b) Tự nhận thức chịu ảnh hưởng những đánh giá từ bên ngoài",
    "c) Tự nhận thức giúp cân bằng trong tổ chức",
    "d) Tự nhận thức giúp mỗi cá nhân có mối quan hệ hài hòa"
  ],
  19: [
    "a) Bước 1",
    "b) Bước 2",
    "c) Bước 3",
    "d) Bước 4"
  ],
  20: [
    "a) Bước 1",
    "b) Bước 2",
    "c) Bước 3",
    "d) Bước 4"
  ],
  21: [
    "a) Tính cách, giá trị, niềm tin, ước mơ",
    "b) Hình ảnh, phản hồi, tự bộc lộ, giao tiếp",
    "c) Năng lực, cảm xúc, động lực, hành vi",
    "d) Điểm mạnh, điểm yếu, cơ hội, nguy cơ"
  ],
  22: [
    "a) Phong cách lãnh đạo uỷ thác",
    "b) Phong cách lãnh đạo độc đoán",
    "c) Phong cách lãnh đạo hỗn hợp",
    "d) Phong cách lãnh đạo dân chủ"
  ],
  23: [
    "a) Tuân thủ",
    "b) Kiên Định",
    "c) Ảnh hưởng",
    "d) Thống trị"
  ],
  24: [
    "a) Nhận diện cảm xúc buồn bã và tìm nguyên nhân",
    "b) Phàn nàn với đồng nghiệp về sếp",
    "c) Đè nén cảm xúc và không phản ứng",
    "d) Tranh luận với sếp để bảo vệ bản thân"
  ],
  25: [
    "a) Vì con người cần nhận ra điểm mạnh và yếu của mình để nhận được sự tôn trọng từ những người khác",
    "b) Vì con người cần che giấu những điểm yếu của bản thân và bộc lộ những điểm mạnh của bản thân trước người khác",
    "c) Vì con người chỉ có thể tự tin khi biết được điểm mạnh và điểm yếu của bản thân để phát triển và khắc phục nó",
    "d) Vì con người luôn so sánh năng lực của mình với những người xung quanh"
  ],
  26: [
    "a) Quản trị cảm xúc là kiểm soát hoàn toàn cảm xúc",
    "b) Đè nén cảm xúc giúp giải quyết mâu thuẫn",
    "c) Quản trị cảm xúc là để cảm xúc biểu hiện ở mức độ phù hợp",
    "d) Đè nén cảm xúc là cách quản trị cảm xúc hiệu quả"
  ],
  27: [
    "a) Cụ thể, có thể đo lường được, thực hiện ngay lập tức, có giới hạn thời gian",
    "b) Cụ thể, có thể đo lường được, có thể thực hiện được, có tính thực tiễn, có giới hạn thời gian",
    "c) Có thể thực hiện được, đo lường cụ thể, có tính thực tế, luôn hướng tới mục tiêu hoàn thiện",
    "d) Có tính thực tiễn, có thể đo lường được, Có giới hạn thời gian, có thể thực hiện được, thực hiện hiệu quả"
  ],
  28: [
    "a) 5 - 7 phút",
    "b) 15 – 30 phút",
    "c) 7 – 10 phút",
    "d) 10 – 15 phút"
  ],
  29: [
    "a) Những thông tin cả bản thân và người khác đều không biết",
    "b) Những thông tin bản thân không biết nhưng người khác biết",
    "c) Những thông tin chỉ bản thân biết, người khác không biết",
    "d) Những thông tin cả bản thân và người khác đều biết"
  ],
  30: [
    "a) Người lãnh đạo có vai trò quan sát, thúc đẩy các hoạt động và làm tăng thêm giá trị cho nhóm",
    "b) Người lãnh đạo có vai trò trung tâm, có mặt mọi lúc mọi nơi, trong tất cả các trường hợp nảy sinh",
    "c) Người lãnh đạo nắm giữ nguồn thông tin duy nhất liên quan đến kế hoạch, nguồn lực và thời gian",
    "d) Cả ba tiêu chí trên"
  ],
  31: [
    "a) Điểm mạnh, điểm yếu của bản thân",
    "b) Vẻ đẹp tâm hồn của bản thân",
    "c) Sức mạnh của bản thân",
    "d) Khả năng của bản thân"
  ],
  32: [
    "a) Góp phần giảm căng thẳng giúp giao tiếp và thương lượng hiệu quả hơn",
    "b) Dẫn đến hành động thiếu suy nghĩ và ứng xử không phù hợp",
    "c) Giải quyết mâu thuẫn một cách hài hòa và mang tính xây dựng hơn",
    "d) Giúp ra quyết định và giải quyết vấn đề tốt hơn"
  ],
  33: [
    "a) Chia sẻ và giải tỏa cảm xúc, học cách kiểm soát cảm xúc bằng trí tuệ, luyện tập thường xuyên cảm xúc tích cực, loại bỏ cảm xúc tiêu cực, hạ nhiệt cảm xúc",
    "b) Tập suy nghĩ lạc quan, rèn luyện sự tự tin, học cách kiểm soát cảm xúc bằng trí tuệ, sử dụng ngôn từ phù hợp và khéo léo mang tính tích cực",
    "c) Nhận diện cảm xúc, rèn luyện sự tự tin, chia sẻ và giải tỏa cảm xúc, sử dụng ngôn từ phù hợp và khéo léo mang tính tích cực",
    "d) Tìm hiểu nguyên nhân cảm xúc và hợp thức hóa nguyên nhân, rèn luyện sự tự tin, tập suy nghĩ lạc quan, chia sẻ và giải tỏa cảm xúc"
  ],
  34: [
    "a) Quản trị cảm xúc giúp giao tiếp, đàm phán hiệu quả",
    "b) Quản trị cảm xúc giúp ta làm chủ được bản thân trong mọi tình huống",
    "c) Quản trị cảm xúc giúp ra quyết định, giải quyết vấn đề tốt hơn",
    "d) Quản trị cảm xúc góp phần giảm căng thẳng"
  ],
  35: [
    "a) Phong cách lãnh đạo độc đoán",
    "b) Phong cách lãnh đạo uỷ thác",
    "c) Phong cách lãnh đạo dân chủ",
    "d) Phong cách lãnh đạo hỗn hợp"
  ],
  36: [
    "a) Những thông tin bản thân không biết nhưng người khác biết",
    "b) Những thông tin cả bản thân và người khác đều biết",
    "c) Những thông tin chỉ bản thân biết, người khác không biết",
    "d) Những thông tin cả bản thân và người khác đều không biết"
  ],
  37: [
    "a) Xây dựng các tiêu chí, quy định về quyền lợi của thành viên",
    "b) Lãnh đạo nhóm theo phong cách độc đoán",
    "c) Lãnh đạo nhóm theo phong cách dân chủ",
    "d) Tất cả các phương án trên"
  ],
  38: [
    "a) Quản trị thời gian là sử dụng đồng hồ trong mọi tình huống của cuộc sống",
    "b) Lên kế hoạch sử dụng thời gian cho những mục tiêu trong công việc và cuộc sống",
    "c) Lên kế hoạch để thời gian luôn có hoạt động liên tục",
    "d) Lên kế hoạch cho những cuộc đi chơi và kiểm soát nó hiệu quả"
  ],
  39: [
    "a) Không khẩn cấp, không quan trọng",
    "b) Quan trọng, khẩn cấp",
    "c) Không quan trọng, khẩn cấp",
    "d) Quan trọng, không khẩn cấp"
  ],
  40: [
    "a) Con người có nhu cầu được những người xung quanh tôn trọng",
    "b) Con người sẽ bị tổn thương tâm lý nếu bị người khác xúc phạm",
    "c) Cách biểu hiện tình cảm thái quá sẽ gây khó chịu cho người khác",
    "d) Đó là cách tôn trọng đối tượng giao tiếp và những người xung quanh"
  ],
  41: [
    "a) Tạm dừng và đi dạo một lúc",
    "b) Im lặng và không nói gì thêm",
    "c) Tiếp tục tranh luận để bảo vệ quan điểm",
    "d) Chỉ trích bạn bè vì thái độ của họ"
  ],
  42: [
    "a) Yếu tố hoàn cảnh",
    "b) Yếu tố thể chất",
    "c) Yếu tố tâm lý",
    "d) Yếu tố môi trường"
  ],
  43: [
    "a) Chia sẻ và giải tỏa cảm xúc",
    "b) Hạ nhiệt cảm xúc",
    "c) Tìm hiểu nguyên nhân cảm xúc và hợp thức hóa nguyên nhân",
    "d) Nhận diện cảm xúc"
  ],
  44: [
    "a) Chỉ số thông minh xã hội (SQ)",
    "b) Chỉ số thông minh cảm xúc (EQ)",
    "c) Chỉ số thông minh trí tuệ (IQ)",
    "d) Chỉ số đam mê (PQ)"
  ],
  45: [
    "a) Phong cách lãnh đạo dân chủ",
    "b) Phong cách lãnh đạo hỗn hợp",
    "c) Phong cách lãnh đạo độc đoán",
    "d) Phong cách lãnh đạo uỷ thác"
  ],
  46: [
    "a) Hân hoan và tin tưởng",
    "b) Buồn bã và bất ngờ",
    "c) Sợ hãi và bất ngờ",
    "d) Tức giận và chán ghét"
  ],
  47: [
    "a) Chỉ 3 thành viên, nhằm tránh xung đột và mâu thuẫn nội bộ",
    "b) Tối thiểu 2 thành viên, để dễ dàng đạt sự phụ thuộc lẫn nhau",
    "c) Hơn 10 thành viên, để tăng đa dạng ý tưởng và sáng tạo",
    "d) Từ 5 đến 7 thành viên, vì dễ phối hợp và tương tác hiệu quả"
  ],
  48: [
    "a) Daniel Goleman",
    "b) Robert Plutchik",
    "c) Paul Eckman",
    "d) Jack Meyer"
  ],
  49: [
    "a) Phong cách lãnh đạo hỗn hợp",
    "b) Phong cách lãnh đạo dân chủ",
    "c) Phong cách lãnh đạo độc đoán",
    "d) Phong cách lãnh đạo ủy thác"
  ],
  50: [
    "a) Cách biểu hiện tình cảm thái quá sẽ gây khó chịu cho người khác",
    "b) Con người sẽ bị tổn thương tâm lý nếu bị người khác xúc phạm",
    "c) Đó là cách tôn trọng đối tượng giao tiếp và những người xung quanh",
    "d) Con người có nhu cầu được những người xung quanh tôn trọng"
  ],
  
  // ĐỀ KIỂM TRA 02
  51: [
    "a) Đảm bảo sự cạnh tranh trong tổ chức",
    "b) Giảm chi phí vận hành doanh nghiệp",
    "c) Tăng hiệu quả sử dụng nguồn nhân lực",
    "d) Tạo ra các quy tắc quản lý chặt chẽ"
  ],
  52: [
    "a) Hướng đến lợi ích của công ty",
    "b) Nêu rõ vị trí công việc muốn ứng tuyển",
    "c) Chia mục tiêu thành ngắn hạn và dài hạn",
    "d) Sao chép mục tiêu chung chung từ mạng"
  ],
  53: [
    "a) Mâu thuẫn xảy ra trước và có mức độ thấp hơn xung đột",
    "b) Mâu thuẫn luôn dẫn đến xung đột công khai",
    "c) Mâu thuẫn mang tính cảm xúc, xung đột mang tính lý trí",
    "d) Mâu thuẫn chỉ liên quan đến lợi ích vật chất"
  ],
  54: [
    "a) Nhượng bộ để một bên đạt được mục tiêu",
    "b) Hợp tác để tìm giải pháp đôi bên cùng lợi",
    "c) Cạnh tranh để áp đặt ý kiến của bạn",
    "d) Lẩn tránh và để các bên tự giải quyết"
  ],
  55: [
    "a) Việc vận dụng các biện pháp để cá nhân hài lòng hơn trong công việc",
    "b) Việc xây dựng văn hóa doanh nghiệp để tăng năng suất",
    "c) Việc thiết lập mục tiêu cụ thể cho từng cá nhân",
    "d) Việc giám sát chặt chẽ hành vi của người lao động"
  ],
  56: [
    "a) Tôn trọng kỷ luật, nguyên tắc làm việc và đồng nghiệp",
    "b) Làm việc độc lập và tự quản lý thời gian",
    "c) Luôn sáng tạo và đổi mới trong công việc",
    "d) Có khả năng lãnh đạo và ra quyết định nhanh chóng"
  ],
  57: [
    "a) Tăng cường sự cạnh tranh giữa các cá nhân",
    "b) Tạo ra môi trường làm việc hiện đại và công nghệ cao",
    "c) Giúp kiểm soát cảm xúc và tinh thần khi gặp khó khăn",
    "d) Đảm bảo thu nhập ổn định cho người lao động"
  ],
  58: [
    "a) Các bên cạnh tranh để giành quyền lợi tốt hơn",
    "b) Các bên cùng làm việc để đạt giải pháp đôi bên cùng lợi",
    "c) Một bên từ bỏ quyền lợi để bên kia đạt mục tiêu",
    "d) Một bên chấp nhận mọi quyết định mà không tranh luận"
  ],
  59: [
    "a) Sử dụng tất cả chiến lược đồng thời trong mọi trường hợp",
    "b) Bắt đầu bằng chiến lược lẩn tránh để tránh rủi ro",
    "c) Áp dụng chiến lược cạnh tranh để giành lợi thế",
    "d) Nên bắt đầu bằng chiến lược hợp tác để cùng thắng"
  ],
  60: [
    "a) Xác định mục tiêu nghề nghiệp của ứng viên",
    "b) Kiểm tra kiến thức chuyên môn của ứng viên",
    "c) Đánh giá khả năng phản ứng nhanh và giải quyết vấn đề",
    "d) Tìm hiểu về phẩm chất đạo đức của ứng viên"
  ],
  61: [
    "a) Yêu cầu đồng nghiệp chấp nhận quyết định ngay lập tức",
    "b) Lắng nghe ý kiến của đồng nghiệp để hiểu nguyên nhân",
    "c) Bỏ qua ý kiến của đồng nghiệp để tránh xung đột",
    "d) Đưa vấn đề ra thảo luận với cả nhóm ngay lập tức"
  ],
  62: [
    "a) Vì nó không liên quan đến cảm xúc cá nhân",
    "b) Vì nó chỉ xảy ra trong các tổ chức lớn",
    "c) Vì nó liên quan đến lợi ích và mục tiêu của nhiều người",
    "d) Vì nó luôn dẫn đến tranh chấp vật chất"
  ],
  63: [
    "a) Sự nhiệt huyết và mong muốn được phỏng vấn",
    "b) Yêu cầu về mức lương và chế độ đãi ngộ",
    "c) Kinh nghiệm làm việc trước đây của ứng viên",
    "d) Thông tin cá nhân chi tiết của ứng viên"
  ],
  64: [
    "a) Đưa ra mức lương rất thấp để thể hiện sự khiêm tốn",
    "b) Đưa ra một mức lương thật cao để còn đàm phán",
    "c) Từ chối trả lời vì sợ ảnh hưởng đến cơ hội",
    "d) Hỏi về mức lương công ty đề xuất và đưa ra khoảng mong muốn"
  ],
  65: [
    "a) Quá trình thúc đẩy xung đột để tạo động lực",
    "b) Quá trình phát hiện và hạn chế khía cạnh tiêu cực của xung đột",
    "c) Quá trình áp đặt ý kiến của một bên lên bên khác",
    "d) Quá trình loại bỏ hoàn toàn mọi xung đột"
  ],
  66: [
    "a) Làm giảm năng suất và hiệu quả công việc",
    "b) Tạo ra các bè phái đối lập trong tổ chức",
    "c) Tăng cường sự liên kết và mối quan hệ tích cực",
    "d) Gây ra căng thẳng và bất ổn trong tổ chức"
  ],
  67: [
    "a) Mong muốn",
    "b) Củng cố",
    "c) Kiến thức",
    "d) Khả năng"
  ],
  68: [
    "a) Vì nó làm tăng chi phí trong tổ chức",
    "b) Vì nó làm giảm nguồn lực tài chính",
    "c) Vì nó ngăn cản nhân viên ra khỏi vùng an toàn",
    "d) Vì nó làm giảm sự cạnh tranh trong thị trường"
  ],
  69: [
    "a) Khen thưởng các thành công nhỏ",
    "b) Xây dựng cơ cấu tổ chức mới",
    "c) Tăng cường nguồn lực tài chính",
    "d) Phân tích bối cảnh tổ chức"
  ],
  70: [
    "a) Đánh giá nhân viên không khách quan",
    "b) Thiếu định hướng và chiến lược trong tổ chức",
    "c) Khác biệt về tính cách và văn hóa của cá nhân",
    "d) Sự phức tạp của môi trường công việc"
  ],
  71: [
    "a) Vì nó không thể hiện ra ngoài nên khó nhận diện và giải quyết",
    "b) Vì nó chỉ xảy ra trong các tổ chức lớn",
    "c) Vì nó luôn dẫn đến tranh chấp vật chất nghiêm trọng",
    "d) Vì nó mang tính chất cảm xúc mạnh hơn"
  ],
  72: [
    "a) Hình thành ý thức khẩn trương",
    "b) Tạo một tầm nhìn",
    "c) Tạo sự phối hợp chỉ đạo mạnh mẽ",
    "d) Truyền đạt tầm nhìn"
  ],
  73: [
    "a) Xin phép và trao đổi trước với người tham khảo",
    "b) Cung cấp thông tin của những người thân trong gia đình",
    "c) Từ chối cung cấp vì sợ ảnh hưởng xấu",
    "d) Ghi thông tin của những người mà bạn quen biết"
  ],
  74: [
    "a) Củng cố các quy trình mới",
    "b) Đào tạo nhân viên về kỹ năng mới",
    "c) Thuyết phục nhân viên về lợi ích thay đổi",
    "d) Phân tích bối cảnh tổ chức"
  ],
  75: [
    "a) Abraham Maslow",
    "b) Douglas McGregor",
    "c) Frederick Herzberg",
    "d) Victor Vroom"
  ],
  76: [
    "a) Từ chối rằng bạn chưa từng nghỉ việc",
    "b) Nêu lý do định hướng nghề nghiệp mới",
    "c) Yêu cầu nhà tuyển dụng không hỏi về quá khứ",
    "d) Nói về những hạn chế của công ty cũ"
  ],
  77: [
    "a) Thông tin về gia đình và sở thích cá nhân",
    "b) Kiến thức chuyên ngành và chứng chỉ liên quan",
    "c) Các hoạt động ngoại khóa không liên quan",
    "d) Mục tiêu nghề nghiệp chung chung"
  ],
  78: [
    "a) Đào tạo nhân viên về kỹ năng mới",
    "b) Củng cố các quy trình mới",
    "c) Phân tích bối cảnh tổ chức",
    "d) Tăng cường nguồn lực tài chính"
  ],
  79: [
    "a) Truyền đạt tầm nhìn đến nhân viên",
    "b) Khen thưởng nhân viên duy trì thay đổi",
    "c) Tạo nhận thức về nhu cầu thay đổi",
    "d) Cung cấp cơ hội thực hành kỹ năng mới"
  ],
  80: [
    "a) Công ty có bao nhiêu nhân viên hiện tại?",
    "b) Bạn có được nhận việc ngay không?",
    "c) Mức lương tối đa công ty có thể trả là bao nhiêu?",
    "d) Cơ hội đào tạo và thăng tiến trong công ty là gì?"
  ],
  81: [
    "a) Nhu cầu được tôn trọng",
    "b) Nhu cầu tự hoàn thiện",
    "c) Nhu cầu xã hội",
    "d) Nhu cầu an toàn"
  ],
  82: [
    "a) Củng cố sự thay đổi đã đạt được",
    "b) Thực hành áp dụng quy trình mới",
    "c) Tạo nhận thức về nhu cầu thay đổi",
    "d) Đào tạo nhân viên về quy trình mới"
  ],
  83: [
    "a) Ổn định hóa các quy trình mới",
    "b) Đào tạo nhân viên về kỹ năng mới",
    "c) Củng cố văn hóa tổ chức hiện tại",
    "d) Tăng cường áp lực thúc đẩy thay đổi"
  ],
  84: [
    "a) Giám sát chặt chẽ và áp dụng thưởng phạt nghiêm ngặt",
    "b) Phân quyền và khuyến khích tự quản lý",
    "c) Tăng cường các hoạt động giao lưu đồng nghiệp",
    "d) Tạo môi trường làm việc tự do và sáng tạo"
  ],
  85: [
    "a) Sự sáng tạo trong công việc",
    "b) Sức hấp dẫn của phần thưởng",
    "c) Kỳ vọng kết quả công việc",
    "d) Niềm tin về phần thưởng"
  ],
  86: [
    "a) Học thuyết Y không chú trọng đến trách nhiệm cá nhân",
    "b) Học thuyết Y tập trung vào phần thưởng vật chất",
    "c) Học thuyết Y tin rằng con người có khả năng tự khích lệ",
    "d) Học thuyết Y cho rằng con người cần bị giám sát chặt chẽ"
  ],
  87: [
    "a) Lương thưởng và điều kiện làm việc",
    "b) Sự ghi nhận thành tích và trách nhiệm",
    "c) Chính sách doanh nghiệp và quan hệ đồng nghiệp",
    "d) An toàn lao động và phúc lợi xã hội"
  ],
  88: [
    "a) Áo dài truyền thống hoặc váy ngắn",
    "b) Complet lịch sự với áo sơ mi",
    "c) Quần áo bình thường thoải mái",
    "d) Quần jeans và áo phông sáng tạo"
  ],
  89: [
    "a) Nhu cầu hòa nhập",
    "b) Nhu cầu quyền lực",
    "c) Nhu cầu an toàn",
    "d) Nhu cầu thành tích"
  ],
  90: [
    "a) Đánh giá kết quả của sự thay đổi",
    "b) Tổ chức các buổi họp để giải thích chiến lược",
    "c) Tăng cường nguồn lực tài chính",
    "d) Loại bỏ các rào cản trong tổ chức"
  ],
  91: [
    "a) Nêu một tính cách cụ thể và cách bạn hợp tác với họ",
    "b) Kể về một đồng nghiệp khó chịu trước đây",
    "c) Từ chối trả lời vì sợ gây ấn tượng xấu",
    "d) Nói rằng bạn có thể làm việc với bất kỳ ai"
  ],
  92: [
    "a) Xung đột về lợi ích vật chất giữa các cá nhân",
    "b) Xung đột về quan điểm trái ngược nhau giữa các bên",
    "c) Xung đột về vai trò và uy tín trong tổ chức",
    "d) Xung đột liên quan đến quyết định hành chính"
  ],
  93: [
    "a) Hai giai đoạn",
    "b) Năm giai đoạn",
    "c) Bốn giai đoạn",
    "d) Ba giai đoạn"
  ],
  94: [
    "a) Liệt kê nhiều điểm yếu để thể hiện sự trung thực",
    "b) Nêu một điểm yếu và cách bạn khắc phục",
    "c) Nói rằng bạn không có điểm yếu nào",
    "d) Từ chối trả lời vì sợ ảnh hưởng xấu"
  ],
  95: [
    "a) Một bên từ bỏ hoàn toàn quyền lợi của mình",
    "b) Một bên chấp nhận mọi quyết định mà không tranh luận",
    "c) Các bên cạnh tranh để giành quyền lợi tốt hơn",
    "d) Các bên từ bỏ một phần quyền lợi để đạt giải pháp chung"
  ],
  96: [
    "a) Đưa ra các chính sách mới để thay đổi văn hóa tổ chức",
    "b) Thay đổi cơ cấu tổ chức để thích nghi với môi trường",
    "c) Tạo ra các sản phẩm mới để đáp ứng nhu cầu thị trường",
    "d) Hoạch định, tổ chức, lãnh đạo và kiểm tra sự đổi mới"
  ],
  97: [
    "a) Giao nhiệm vụ thách thức và phản hồi thường xuyên",
    "b) Tạo cơ hội tham gia các hoạt động nhóm",
    "c) Đảm bảo thu nhập cao và công việc ổn định",
    "d) Trao quyền kiểm soát và ảnh hưởng đến người khác"
  ],
  98: [
    "a) Xung đột liên quan đến nhiều người khẩn cấp",
    "b) Vấn đề quan trọng và cần ra quyết định sớm",
    "c) Nỗ lực trước đó thất bại và cần hy sinh",
    "d) Vấn đề không quan trọng và không cần thời gian"
  ],
  99: [
    "a) Chọn ứng viên phù hợp nhất cho vị trí công việc",
    "b) Đánh giá phẩm chất cá nhân của ứng viên",
    "c) Loại bỏ các ứng viên không đủ trình độ hoặc kỹ năng cơ bản",
    "d) Ký hợp đồng lao động với ứng viên được chọn"
  ],
  100: [
    "a) Đảm bảo sự công bằng và ghi nhận thành tích",
    "b) Tạo cơ hội thăng tiến và đào tạo chuyên môn",
    "c) Tăng lương thưởng và cải thiện điều kiện làm việc",
    "d) Tổ chức các hoạt động giao lưu xã hội"
  ],
  101: [
    "a) Xây dựng môi trường làm việc tích cực",
    "b) Tăng lương và phúc lợi cho nhân viên",
    "c) Đặt mục tiêu và kỳ vọng rõ ràng",
    "d) Tất cả các đáp án trên"
  ]
};

// Hàm lấy đáp án đúng từ answer string (a, b, c, or d)
export function getCorrectAnswer(answer: string): string {
  const match = answer.match(/^([a-d])\)/i);
  return match ? match[1].toLowerCase() : '';
}

// Hàm enrichFlashcard để thêm options vào flashcard
export function enrichFlashcard(flashcard: FlashcardType): FlashcardType {
  const options = questionsWithOptions[flashcard.id];
  const correctAnswer = getCorrectAnswer(flashcard.answer);
  
  return {
    ...flashcard,
    options: options || [],
    correctAnswer: correctAnswer
  };
}
