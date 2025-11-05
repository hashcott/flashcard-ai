// Helper để parse câu hỏi từ user request và thêm options
export interface ParsedQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export function parseQuestionWithOptions(rawQuestion: string): ParsedQuestion | null {
  // Pattern để match câu hỏi với các options a), b), c), d)
  const lines = rawQuestion.split('\n').filter(line => line.trim());
  
  if (lines.length === 0) return null;
  
  const questionLine = lines[0];
  const options: string[] = [];
  let correctAnswer = '';
  
  // Tìm các options
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.match(/^[a-d][).]/i)) {
      options.push(line);
    }
  }
  
  return {
    id: 0, // Will be set later
    questionText: questionLine,
    options,
    correctAnswer,
    explanation: ''
  };
}
