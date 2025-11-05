# 🎯 Flashcard AI - Ứng dụng ôn tập Kỹ năng mềm

Ứng dụng flashcard hiện đại với đầy đủ tính năng để ôn tập kiến thức Kỹ năng mềm.

![Flashcard App](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Tính năng chính

### 🔄 Hiệu ứng lật thẻ 3D
- Lật thẻ flashcard với animation mượt mà
- Mặt trước hiển thị câu hỏi
- Mặt sau hiển thị đáp án và giải thích

### 🎮 Điều khiển Navigation
- **Next / Previous**: Di chuyển giữa các thẻ
- **Shuffle**: Trộn ngẫu nhiên thứ tự flashcard
- **Show Answer / Flip Card**: Xem đáp án

### 📊 Theo dõi tiến độ
- Hiển thị "Card X / Total"
- Progress bar trực quan
- Đếm số thẻ đã hoàn thành

### ⭐ Hệ thống đánh giá nhớ (Spaced Repetition)
- 😰 **Khó**: Cần ôn lại nhiều lần
- 🤔 **Tạm được**: Nhớ nhưng chưa chắc chắn
- 😊 **Nhớ rồi**: Đã thuộc lòng

### 📝 Câu hỏi trắc nghiệm
- Chọn đáp án từ 4 lựa chọn (a, b, c, d)
- Kiểm tra đáp án ngay lập tức
- Hiển thị đáp án đúng và giải thích chi tiết
- Màu sắc trực quan: xanh (đúng), đỏ (sai)

### 🎨 Giao diện đẹp mắt
- Thiết kế tối giản, hiện đại
- Màu gradient tím (purple) chủ đạo
- Bo góc mềm mại, shadow tinh tế
- Responsive hoàn toàn cho mobile

## 🚀 Cài đặt và chạy

```bash
# Cài đặt dependencies
yarn install

# Chạy development server
yarn dev

# Build production
yarn build

# Start production server
yarn start
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## 📚 Nội dung

Ứng dụng bao gồm **101 câu hỏi** từ 2 đề thi Kỹ năng mềm:

### Chủ đề
- ⏰ Quản lý thời gian (Eisenhower, Pomodoro, SMART)
- 🧠 Tự nhận thức (SWOT, Johari, DISC, RBS)
- 😊 Quản trị cảm xúc (EQ, Plutchik)
- 👥 Làm việc nhóm (Tuckman, Belbin)
- 👔 Phong cách lãnh đạo
- 💪 Tạo động lực (Maslow, Herzberg, McClelland)
- ⚡ Quản trị xung đột (Thomas-Kilmann)
- 🔄 Quản trị thay đổi (Kotter, ADKAR, Lewin)
- 💼 Phỏng vấn và CV

## 📁 Cấu trúc project

```
src/
├── app/
│   ├── page.tsx              # Trang chủ với hero section
│   ├── layout.tsx            # Layout chính
│   └── api/flashcards/       # API endpoint
├── components/
│   ├── FlashcardViewer.tsx   # Component xem flashcard (chính) ⭐
│   ├── Flashcard.tsx         # Component flashcard đơn lẻ
│   ├── FlashcardList.tsx     # Danh sách flashcard
│   ├── FlashcardModal.tsx    # Modal câu hỏi trắc nghiệm
│   └── Header.tsx            # Header
├── lib/
│   ├── flashcards.ts         # Dữ liệu 101 câu hỏi
│   ├── flashcardOptions.ts   # Helper thêm options
│   └── questionParser.ts     # Parse câu hỏi
└── styles/
    └── globals.css           # CSS toàn cục
```

## 🎯 Cách sử dụng

1. **Trang chủ**: Xem thống kê và tính năng
2. **Click "Bắt đầu học ngay"**: Mở FlashcardViewer
3. **Đọc câu hỏi**: Trên mặt trước thẻ
4. **Chọn đáp án** (nếu là trắc nghiệm) hoặc **Click "Xem đáp án"**
5. **Đánh giá độ nhớ**: Chọn Khó / Tạm được / Nhớ rồi
6. **Next**: Chuyển sang câu tiếp theo
7. **Shuffle**: Trộn thẻ để học ngẫu nhiên

## 🎬 Demo Features

### Trang chủ
- Hero section với gradient background
- Thống kê: số câu hỏi, đề thi, thời gian
- Danh sách tính năng
- Danh sách chủ đề

### FlashcardViewer
- Full-screen viewer với gradient background
- Flip animation 3D mượt mà
- Progress bar và counter
- Navigation controls (Trước/Sau/Shuffle)
- Memory rating buttons
- Support cả flashcard thông thường và trắc nghiệm

## 🔧 Công nghệ

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Styled JSX (CSS-in-JS)
- **State Management**: React Hooks
- **Build Tool**: Turbopack
- **Package Manager**: Yarn

## 📝 Thêm câu hỏi mới

Xem file `FLASHCARD_OPTIONS_GUIDE.md` để biết cách thêm options cho các câu hỏi.

### Ví dụ thêm câu hỏi:

```typescript
{
  id: 102,
  question: "Câu hỏi mới của bạn?",
  options: [
    "a) Lựa chọn A",
    "b) Lựa chọn B",
    "c) Lựa chọn C",
    "d) Lựa chọn D"
  ],
  correctAnswer: "b",
  answer: "b) Lựa chọn B",
  explanation: "Giải thích tại sao B đúng"
}
```

## 🌐 Deploy lên Vercel

```bash
# Login vào Vercel
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

Hoặc connect repository với Vercel dashboard để tự động deploy khi push code.

## 🎨 Customization

### Thay đổi màu sắc
Trong các file component, tìm gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Thay đổi số lượng câu hỏi trên trang
Edit `src/app/page.tsx` và update stats.

## 🐛 Troubleshooting

### Build errors
```bash
# Clear cache
rm -rf .next node_modules
yarn install
yarn build
```

### TypeScript errors
```bash
# Check errors
yarn tsc --noEmit
```

## 📄 License

MIT License - feel free to use this project for learning and teaching!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more questions
- Improve UI/UX
- Add new features
- Fix bugs
- Improve documentation

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ❤️ for learning Soft Skills
