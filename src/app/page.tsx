'use client';

import React, { useState } from 'react';
import FlashcardViewer from '../components/FlashcardViewer';
import { flashcards } from '@/lib/flashcards';

export default function HomePage() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">🎯 Flashcards Kỹ năng mềm</h1>
          <p className="hero-subtitle">
            Ôn tập và kiểm tra kiến thức với {flashcards.length} câu hỏi trắc nghiệm
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-value">{flashcards.length}</div>
              <div className="stat-label">Câu hỏi</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-value">2</div>
              <div className="stat-label">Đề thi</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-value">~30</div>
              <div className="stat-label">Phút</div>
            </div>
          </div>

          <button className="start-button" onClick={() => setIsViewerOpen(true)}>
            Bắt đầu học ngay →
          </button>

          <div className="features">
            <h2 className="features-title">Tính năng</h2>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🔄</span>
                <span className="feature-text">Lật thẻ để xem đáp án</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Theo dõi tiến độ học</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎲</span>
                <span className="feature-text">Trộn thẻ ngẫu nhiên</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⭐</span>
                <span className="feature-text">Đánh giá độ nhớ</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📝</span>
                <span className="feature-text">Câu hỏi trắc nghiệm</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <span className="feature-text">Giải thích chi tiết</span>
              </div>
            </div>
          </div>

        </div>

        <style jsx>{`
          .home-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
          }

          .hero-section {
            max-width: 900px;
            margin: 0 auto;
          }

          .hero-title {
            font-size: 48px;
            font-weight: 800;
            color: white;
            text-align: center;
            margin: 0 0 16px 0;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }

          .hero-subtitle {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.95);
            text-align: center;
            margin: 0 0 40px 0;
            font-weight: 500;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 40px;
          }

          .stat-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 16px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
          }

          .stat-card:hover {
            transform: translateY(-5px);
          }

          .stat-icon {
            font-size: 40px;
            margin-bottom: 12px;
            display: block;
          }

          .stat-value {
            font-size: 36px;
            font-weight: 800;
            color: #667eea;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 14px;
            color: #6b7280;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .start-button {
            width: 100%;
            max-width: 400px;
            display: block;
            margin: 0 auto 60px;
            padding: 20px 40px;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 16px;
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            transition: all 0.3s;
          }

          .start-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
          }

          .features {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }

          .features-title {
            font-size: 28px;
            font-weight: 700;
            color: #1f2937;
            margin: 0 0 24px 0;
            text-align: center;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
            background: #f9fafb;
            border-radius: 12px;
            transition: all 0.3s;
          }

          .feature-item:hover {
            background: #f3f4f6;
            transform: translateX(5px);
          }

          .feature-icon {
            font-size: 24px;
          }

          .feature-text {
            font-size: 16px;
            font-weight: 600;
            color: #374151;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 32px;
            }

            .hero-subtitle {
              font-size: 16px;
            }

            .stats-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }

            .features-grid {
              grid-template-columns: 1fr;
              gap: 12px;
            }

            .features {
              padding: 24px;
            }

            .start-button {
              font-size: 18px;
              padding: 16px 32px;
            }
          }
        `}</style>
      </div>

      {isViewerOpen && (
        <FlashcardViewer 
          flashcards={flashcards}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
}