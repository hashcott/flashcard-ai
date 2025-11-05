'use client';

import React from 'react';
import { FlashcardType } from '../lib/flashcards';

interface FlashcardModalProps {
  flashcard: FlashcardType;
  isOpen: boolean;
  onClose: () => void;
}

const FlashcardModal: React.FC<FlashcardModalProps> = ({ flashcard, isOpen, onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<string>('');
  const [showResult, setShowResult] = React.useState<boolean>(false);

  if (!isOpen) return null;

  const handleSelectAnswer = (option: string) => {
    const answerLetter = option.charAt(0).toLowerCase();
    setSelectedAnswer(answerLetter);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleClose = () => {
    setSelectedAnswer('');
    setShowResult(false);
    onClose();
  };

  const isCorrect = selectedAnswer === flashcard.correctAnswer;
  const options = flashcard.options || [];

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>×</button>
        
        <div className="modal-body">
          <h2 className="question-title">{flashcard.question}</h2>
          
          <div className="options-container">
            {options.map((option, index) => {
              const optionLetter = option.charAt(0).toLowerCase();
              const isSelected = selectedAnswer === optionLetter;
              const isCorrectOption = optionLetter === flashcard.correctAnswer;
              
              let optionClass = 'option-button';
              if (showResult) {
                if (isCorrectOption) {
                  optionClass += ' correct';
                } else if (isSelected && !isCorrect) {
                  optionClass += ' incorrect';
                }
              } else if (isSelected) {
                optionClass += ' selected';
              }
              
              return (
                <button
                  key={index}
                  className={optionClass}
                  onClick={() => !showResult && handleSelectAnswer(option)}
                  disabled={showResult}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {!showResult && selectedAnswer && (
            <button className="submit-button" onClick={handleSubmit}>
              Kiểm tra đáp án
            </button>
          )}

          {showResult && (
            <div className={`result-container ${isCorrect ? 'correct-result' : 'incorrect-result'}`}>
              <h3>{isCorrect ? '✓ Chính xác!' : '✗ Chưa đúng'}</h3>
              <p className="correct-answer">
                <strong>Đáp án đúng:</strong> {flashcard.answer}
              </p>
              {flashcard.explanation && (
                <p className="explanation">
                  <strong>Giải thích:</strong> {flashcard.explanation}
                </p>
              )}
              <button className="next-button" onClick={handleClose}>
                Tiếp tục
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          padding: 12px;
          background: white;
          border-radius: 12px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 32px;
          cursor: pointer;
          color: #666;
          line-height: 1;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }

        .close-button:hover {
          color: #000;
        }

        .modal-body {
          padding: 30px;
        }

        .question-title {
          font-size: 20px;
          margin-bottom: 24px;
          color: #333;
          line-height: 1.5;
          padding-right: 20px;
        }

        .options-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .option-button {
          padding: 16px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          background: white;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 16px;
          color: #333;
        }

        .option-button:hover:not(:disabled) {
          border-color: #0070f3;
          background: #f0f8ff;
        }

        .option-button.selected {
          border-color: #0070f3;
          background: #e6f2ff;
          font-weight: 500;
        }

        .option-button.correct {
          border-color: #22c55e;
          background: #dcfce7;
          color: #166534;
          font-weight: 500;
        }

        .option-button.incorrect {
          border-color: #ef4444;
          background: #fee2e2;
          color: #991b1b;
          font-weight: 500;
        }

        .option-button:disabled {
          cursor: not-allowed;
        }

        .submit-button {
          width: 100%;
          padding: 14px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-button:hover {
          background: #005bb5;
        }

        .result-container {
          margin-top: 24px;
          padding: 20px;
          border-radius: 8px;
          border: 2px solid;
        }

        .correct-result {
          background: #dcfce7;
          border-color: #22c55e;
        }

        .incorrect-result {
          background: #fee2e2;
          border-color: #ef4444;
        }

        .result-container h3 {
          margin: 0 0 12px 0;
          font-size: 20px;
        }

        .correct-result h3 {
          color: #166534;
        }

        .incorrect-result h3 {
          color: #991b1b;
        }

        .correct-answer {
          margin: 12px 0;
          font-size: 16px;
        }

        .explanation {
          margin: 12px 0;
          font-size: 15px;
          line-height: 1.6;
          color: #555;
        }

        .next-button {
          width: 100%;
          padding: 12px;
          background: #333;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 16px;
          transition: background 0.3s;
        }

        .next-button:hover {
          background: #000;
        }

        @media (max-width: 768px) {
          .modal-content {
            max-height: 95vh;
          }

          .modal-body {
            padding: 20px;
          }

          .question-title {
            font-size: 18px;
          }

          .option-button {
            padding: 14px 16px;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default FlashcardModal;
