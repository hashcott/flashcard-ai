'use client';

import React, { useState, useEffect } from 'react';
import { FlashcardType } from '../lib/flashcards';
import { enrichFlashcard } from '../lib/flashcardOptions';

interface FlashcardViewerProps {
  flashcards: FlashcardType[];
  onClose: () => void;
}

type MemoryLevel = 'easy' | 'medium' | 'hard' | null;

interface CardProgress {
  id: number;
  memoryLevel: MemoryLevel;
  reviewCount: number;
}

const FlashcardViewer: React.FC<FlashcardViewerProps> = ({ flashcards, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState<CardProgress[]>([]);
  const [shuffledCards, setShuffledCards] = useState<FlashcardType[]>(flashcards);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const currentCard = enrichFlashcard(shuffledCards[currentIndex]);
  const hasOptions = currentCard.options && currentCard.options.length > 0;

  useEffect(() => {
    // Initialize progress tracking
    const initialProgress = flashcards.map(card => ({
      id: card.id,
      memoryLevel: null,
      reviewCount: 0
    }));
    setProgress(initialProgress);
  }, [flashcards]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setSelectedAnswer('');
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setSelectedAnswer('');
      setShowResult(false);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...shuffledCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSelectedAnswer('');
    setShowResult(false);
  };

  const handleMemoryRating = (level: MemoryLevel) => {
    setProgress(prev => prev.map(p => 
      p.id === currentCard.id 
        ? { ...p, memoryLevel: level, reviewCount: p.reviewCount + 1 }
        : p
    ));
    
    // Auto move to next card after rating
    setTimeout(() => {
      if (currentIndex < shuffledCards.length - 1) {
        handleNext();
      }
    }, 500);
  };

  const handleSelectAnswer = (option: string) => {
    const answerLetter = option.charAt(0).toLowerCase();
    setSelectedAnswer(answerLetter);
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
    setIsFlipped(true);
  };

  const isCorrect = selectedAnswer === currentCard.correctAnswer;
  const currentProgress = progress.find(p => p.id === currentCard.id);
  const completedCount = progress.filter(p => p.memoryLevel !== null).length;
  const progressPercentage = (completedCount / flashcards.length) * 100;

  return (
    <div className="viewer-overlay">
      <div className="viewer-container">
        {/* Header */}
        <div className="viewer-header">
          <div className="progress-info">
            <span className="card-counter">
              Thẻ {currentIndex + 1} / {shuffledCards.length}
            </span>
            <span className="completed-counter">
              Đã học: {completedCount} / {flashcards.length}
            </span>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="progress-text">{Math.round(progressPercentage)}%</span>
        </div>

        {/* Flashcard */}
        <div className="flashcard-container">
          <div className={`flashcard-flip ${isFlipped ? 'flipped' : ''}`}>
            {/* Front Side */}
            <div className="flashcard-side flashcard-front">
              <div className="card-content">
                <div className="card-header">
                  <span className="card-badge">Câu hỏi</span>
                  {hasOptions && <span className="quiz-badge">📝 Trắc nghiệm</span>}
                </div>
                <h2 className="question-text">{currentCard.question}</h2>
                
                {hasOptions && !showResult && (
                  <div className="options-list">
                    {currentCard.options?.map((option, index) => {
                      const optionLetter = option.charAt(0).toLowerCase();
                      const isSelected = selectedAnswer === optionLetter;
                      
                      return (
                        <button
                          key={index}
                          className={`option-btn ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleSelectAnswer(option)}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}

                {hasOptions && selectedAnswer && !showResult && (
                  <button className="check-btn" onClick={handleCheckAnswer}>
                    Kiểm tra đáp án
                  </button>
                )}

                {!hasOptions && (
                  <button className="flip-btn" onClick={handleFlip}>
                    Xem đáp án →
                  </button>
                )}
              </div>
            </div>

            {/* Back Side */}
            <div className="flashcard-side flashcard-back">
              <div className="card-content">
                <div className="card-header">
                  <span className="card-badge answer-badge">Đáp án</span>
                  {hasOptions && showResult && (
                    <span className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                      {isCorrect ? '✓ Chính xác' : '✗ Sai rồi'}
                    </span>
                  )}
                </div>

                {hasOptions && showResult && (
                  <div className="options-list">
                    {currentCard.options?.map((option, index) => {
                      const optionLetter = option.charAt(0).toLowerCase();
                      const isSelected = selectedAnswer === optionLetter;
                      const isCorrectOption = optionLetter === currentCard.correctAnswer;
                      
                      let optionClass = 'option-btn';
                      if (isCorrectOption) {
                        optionClass += ' correct-answer';
                      } else if (isSelected && !isCorrect) {
                        optionClass += ' wrong-answer';
                      }
                      
                      return (
                        <button key={index} className={optionClass} disabled>
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}

                {!hasOptions && (
                  <h2 className="answer-text">{currentCard.answer}</h2>
                )}

                {currentCard.explanation && (
                  <div className="explanation-box">
                    <strong>💡 Giải thích:</strong>
                    <p>{currentCard.explanation}</p>
                  </div>
                )}

                <button className="flip-btn back-flip" onClick={handleFlip}>
                  ← Quay lại câu hỏi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Rating (only show after flipping or checking answer) */}
        {(isFlipped || showResult) && (
          <div className="memory-rating">
            <p className="rating-label">Bạn đã nhớ câu này chưa?</p>
            <div className="rating-buttons">
              <button 
                className="rating-btn hard"
                onClick={() => handleMemoryRating('hard')}
              >
                😰 Khó
              </button>
              <button 
                className="rating-btn medium"
                onClick={() => handleMemoryRating('medium')}
              >
                🤔 Tạm được
              </button>
              <button 
                className="rating-btn easy"
                onClick={() => handleMemoryRating('easy')}
              >
                😊 Nhớ rồi
              </button>
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="navigation-controls">
          <button 
            className="nav-btn"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            ← Trước
          </button>
          
          <button className="nav-btn shuffle-btn" onClick={handleShuffle}>
            🔀 Trộn thẻ
          </button>
          
          <button 
            className="nav-btn"
            onClick={handleNext}
            disabled={currentIndex === shuffledCards.length - 1}
          >
            Sau →
          </button>
        </div>
      </div>

      <style jsx>{`
        .viewer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .viewer-container {
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .viewer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }

        .progress-info {
          display: flex;
          gap: 20px;
          font-weight: 600;
        }

        .card-counter {
          font-size: 18px;
        }

        .completed-counter {
          font-size: 16px;
          opacity: 0.9;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 28px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .progress-bar-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4ade80 0%, #22c55e 100%);
          transition: width 0.5s ease;
          border-radius: 10px;
        }

        .progress-text {
          color: white;
          font-weight: 600;
          min-width: 50px;
          text-align: right;
        }

        .flashcard-container {
          padding: 12px;
          perspective: 1000px;
          flex: 1;
          display: flex;
          align-items: center;
          min-height: 0;
        }

        .flashcard-flip {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 500px;
          max-height: calc(100vh - 260px);
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flashcard-flip.flipped {
          transform: rotateY(180deg);
        }

        .flashcard-side {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flashcard-front {
          transform: rotateY(0deg);
        }

        .flashcard-back {
          transform: rotateY(180deg);
        }

        .card-content {
          padding: 35px 45px;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          justify-content: flex-start;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          margin-top: 10px;
          flex-shrink: 0;
        }

        .card-badge {
          background: #e0e7ff;
          color: #4f46e5;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .answer-badge {
          background: #dcfce7;
          color: #16a34a;
        }

        .quiz-badge {
          background: #fef3c7;
          color: #d97706;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .result-badge {
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .result-badge.correct {
          background: #dcfce7;
          color: #16a34a;
        }

        .result-badge.incorrect {
          background: #fee2e2;
          color: #dc2626;
        }

        .question-text, .answer-text {
          font-size: 18px;
          line-height: 1.5;
          color: #1f2937;
          margin-bottom: 16px;
          overflow: visible;
          flex-shrink: 0;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 0;
          padding: 0;
          padding-right: 10px;
          flex: 1;
          overflow-y: auto;
          min-height: 0;
        }
        
        .options-list::-webkit-scrollbar {
          width: 6px;
        }
        
        .options-list::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .options-list::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        .options-list::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .option-btn {
          padding: 12px 18px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          background: white;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 15px;
          color: #374151;
          line-height: 1.4;
          flex-shrink: 0;
          min-height: fit-content;
        }

        .option-btn:hover:not(:disabled) {
          border-color: #667eea;
          background: #f3f4f6;
          transform: translateX(4px);
        }

        .option-btn.selected {
          border-color: #667eea;
          background: #eef2ff;
          font-weight: 600;
        }

        .option-btn.correct-answer {
          border-color: #22c55e;
          background: #dcfce7;
          color: #16a34a;
          font-weight: 600;
        }

        .option-btn.wrong-answer {
          border-color: #ef4444;
          background: #fee2e2;
          color: #dc2626;
          font-weight: 600;
        }

        .option-btn:disabled {
          cursor: not-allowed;
        }

        .check-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 12px;
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .check-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .flip-btn {
          padding: 12px 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: auto;
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .flip-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .back-flip {
          background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
        }

        .explanation-box {
          background: #f0f9ff;
          border-left: 4px solid #0ea5e9;
          padding: 14px 18px;
          border-radius: 8px;
          margin: 12px 0;
          line-height: 1.5;
          font-size: 14px;
          max-height: 120px;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .explanation-box::-webkit-scrollbar {
          width: 6px;
        }
        
        .explanation-box::-webkit-scrollbar-track {
          background: #e0f2fe;
          border-radius: 10px;
        }
        
        .explanation-box::-webkit-scrollbar-thumb {
          background: #0ea5e9;
          border-radius: 10px;
        }

        .explanation-box strong {
          display: block;
          margin-bottom: 6px;
          color: #0369a1;
          font-size: 14px;
        }

        .explanation-box p {
          margin: 0;
          color: #475569;
          font-size: 14px;
        }

        .memory-rating {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .rating-label {
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
        }

        .rating-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .rating-btn {
          padding: 14px 20px;
          border: 2px solid transparent;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          text-align: center;
        }

        .rating-btn.hard {
          background: #fee2e2;
          color: #dc2626;
          border-color: #fecaca;
        }

        .rating-btn.hard:hover {
          background: #fecaca;
          transform: translateY(-2px);
        }

        .rating-btn.medium {
          background: #fef3c7;
          color: #d97706;
          border-color: #fde68a;
        }

        .rating-btn.medium:hover {
          background: #fde68a;
          transform: translateY(-2px);
        }

        .rating-btn.easy {
          background: #dcfce7;
          color: #16a34a;
          border-color: #bbf7d0;
        }

        .rating-btn.easy:hover {
          background: #bbf7d0;
          transform: translateY(-2px);
        }

        .navigation-controls {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .nav-btn {
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          color: #374151;
        }

        .nav-btn:hover:not(:disabled) {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .shuffle-btn {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
        }

        .shuffle-btn:hover {
          transform: translateY(-2px) scale(1.05);
        }

        @media (max-width: 768px) {
          .viewer-container {
            gap: 12px;
          }

          .flashcard-flip {
            min-height: 350px;
            max-height: calc(100vh - 240px);
          }

          .card-content {
            padding: 30px 25px;
          }

          .question-text, .answer-text {
            font-size: 17px;
            margin-bottom: 16px;
          }

          .option-btn {
            padding: 12px 16px;
            font-size: 15px;
          }

          .options-list {
            gap: 10px;
            padding-right: 8px;
          }

          .rating-buttons {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .navigation-controls {
            flex-direction: row;
            gap: 8px;
          }

          .nav-btn {
            flex: 1;
            padding: 12px;
            font-size: 14px;
          }

          .progress-info {
            flex-direction: column;
            gap: 6px;
            font-size: 13px;
          }

          .explanation-box {
            padding: 14px 16px;
            font-size: 14px;
            max-height: 120px;
          }

          .card-header {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default FlashcardViewer;
