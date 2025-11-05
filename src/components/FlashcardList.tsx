'use client';

import React from 'react';
import Flashcard from './Flashcard';
import { FlashcardType } from '../lib/flashcards';

interface FlashcardListProps {
  flashcards: FlashcardType[];
}

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
      
      <style jsx>{`
        .flashcard-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default FlashcardList;