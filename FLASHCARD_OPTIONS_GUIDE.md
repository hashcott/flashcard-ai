# Hướng dẫn thêm Options cho Flashcards

## Cấu trúc dữ liệu

Mỗi flashcard có thể có:
- `question`: Câu hỏi
- `options`: Mảng các lựa chọn (a, b, c, d)
- `correctAnswer`: Đáp án đúng (chữ cái: "a", "b", "c", "d")
- `answer`: Đáp án đầy đủ (giữ để tương thích ngược)
- `explanation`: Giải thích đáp án

## Cách thêm options cho câu hỏi

### Cách 1: Cập nhật trực tiếp trong `flashcards.ts`

```typescript
{
  id: 1,
  question: "Câu hỏi của bạn:",
  options: [
    "a) Lựa chọn A",
    "b) Lựa chọn B", 
    "c) Lựa chọn C",
    "d) Lựa chọn D"
  ],
  correctAnswer: "b", // Chỉ cần chữ cái
  answer: "b) Lựa chọn B",
  explanation: "Giải thích tại sao B đúng"
}
```

### Cách 2: Thêm vào `flashcardOptions.ts`

Mở file `src/lib/flashcardOptions.ts` và thêm vào object `questionsWithOptions`:

```typescript
export const questionsWithOptions: Record<number, string[]> = {
  1: [...],
  2: [...],
  // Thêm câu mới
  10: [
    "a) Option 1",
    "b) Option 2",
    "c) Option 3",
    "d) Option 4"
  ],
};
```

Function `enrichFlashcard()` sẽ tự động parse và thêm options cho câu hỏi.

## Tính năng hiện tại

✅ Modal hiển thị câu hỏi và options  
✅ Cho phép chọn đáp án  
✅ Kiểm tra đáp án đúng/sai  
✅ Hiển thị giải thích sau khi trả lời  
✅ UI responsive cho mobile  
✅ Animation và màu sắc trực quan  

## Các câu hỏi đã có options

Hiện tại có 10 câu hỏi đầu tiên đã được config options đầy đủ trong `flashcardOptions.ts`.

## Thêm options hàng loạt

Để thêm options cho tất cả 101 câu hỏi, bạn có thể:

1. Cập nhật từng câu trong `flashcards.ts`
2. Hoặc thêm vào `questionsWithOptions` trong `flashcardOptions.ts`

Câu hỏi nào không có options sẽ hiển thị dạng flashcard thông thường (chỉ hiển thị đáp án).
