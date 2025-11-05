'use client';

import React from 'react';
import { FlashcardType } from '../lib/flashcards';
import { enrichFlashcard } from '../lib/flashcardOptions';
import FlashcardModal from './FlashcardModal';

interface FlashcardProps {
  flashcard: FlashcardType;
}

const Flashcard: React.FC<FlashcardProps> = ({ flashcard }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  // Enrich flashcard với options nếu có
  const enrichedFlashcard = enrichFlashcard(flashcard);
  const hasOptions = enrichedFlashcard.options && enrichedFlashcard.options.length > 0;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flashcard" onClick={handleClick}>
        <div className="flashcard-content">
          <h3 className="flashcard-question">{flashcard.question}</h3>
          <div className="flashcard-footer">
            {hasOptions && (
              <span className="quiz-badge">📝 Trắc nghiệm</span>
            )}
            <span className="click-hint">Click để làm bài →</span>
          </div>
        </div>
        
        <style jsx>{`
          .flashcard {
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            padding: 20px;
            margin: 12px 0;
            cursor: pointer;
            transition: all 0.3s;
            background: white;
          }
          
          .flashcard:hover {
            border-color: #0070f3;
            box-shadow: 0 4px 12px rgba(0, 112, 243, 0.15);
            transform: translateY(-2px);
          }

          .flashcard-content {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .flashcard-question {
            font-size: 17px;
            line-height: 1.5;
            color: #333;
            margin: 0;
            font-weight: 500;
          }

          .flashcard-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;
          }

          .quiz-badge {
            background: #e6f2ff;
            color: #0070f3;
            padding: 4px 12px;
            border-radius: 16px;
            font-size: 13px;
            font-weight: 500;
          }

          .click-hint {
            color: #888;
            font-size: 14px;
            font-weight: 500;
          }

          @media (max-width: 768px) {
            .flashcard {
              padding: 16px;
            }

            .flashcard-question {
              font-size: 16px;
            }

            .click-hint {
              font-size: 13px;
            }
          }
        `}</style>
      </div>

      <FlashcardModal
        flashcard={enrichedFlashcard}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Flashcard;