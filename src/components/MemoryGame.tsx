"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { animalComponents, animalNames } from "./AnimalSVGs";

interface Card {
  id: number;
  animal: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createCards(): Card[] {
  const animals = Object.keys(animalComponents);
  const pairs = animals.flatMap((animal, index) => [
    { id: index * 2, animal, isFlipped: false, isMatched: false },
    { id: index * 2 + 1, animal, isFlipped: false, isMatched: false },
  ]);
  return shuffleArray(pairs);
}

function Confetti() {
  const colors = ["#e53e3e", "#f6e05e", "#48bb78", "#4299e1", "#ed8936", "#9f7aea", "#f687b3"];
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            width: `${Math.random() * 8 + 6}px`,
            height: `${Math.random() * 8 + 6}px`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
            animationDuration: `${Math.random() * 2 + 2}s`,
            animationDelay: `${Math.random() * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}

function LeafPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="leaves" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M10 30 Q20 10 30 30 Q20 50 10 30Z" fill="#2d3b2d" />
          <path d="M40 10 Q50 -5 55 10 Q50 25 40 10Z" fill="#2d3b2d" transform="rotate(45 47 10)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#leaves)" />
    </svg>
  );
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalPairs = Object.keys(animalComponents).length;

  const startNewGame = useCallback(() => {
    setCards(createCards());
    setFlippedCards([]);
    setMoves(0);
    setMatchedPairs(0);
    setGameWon(false);
    setTimer(0);
    setGameStarted(false);
    setIsChecking(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  useEffect(() => {
    if (gameStarted && !gameWon) {
      timerRef.current = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameStarted, gameWon]);

  const handleCardClick = (cardId: number) => {
    if (isChecking) return;

    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;
    if (flippedCards.length >= 2) return;

    if (!gameStarted) setGameStarted(true);

    const newCards = cards.map((c) =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setIsChecking(true);
      const first = newCards.find((c) => c.id === newFlipped[0])!;
      const second = newCards.find((c) => c.id === newFlipped[1])!;

      if (first.animal === second.animal) {
        // Match found!
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isMatched: true }
                : c
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
          setMatchedPairs((p) => {
            const newPairs = p + 1;
            if (newPairs === totalPairs) {
              setGameWon(true);
            }
            return newPairs;
          });
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getStarRating = () => {
    if (moves <= 14) return 3;
    if (moves <= 20) return 2;
    return 1;
  };

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      <LeafPattern />

      {gameWon && <Confetti />}

      {/* Header */}
      <header className="shrink-0 w-full px-4 pt-3 pb-2 relative z-10">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold text-green-800 tracking-tight animate-bounce-in">
            Memory
          </h1>

          {/* Stats bar */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/70 rounded-full px-3 py-1.5 shadow-sm">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-green-800">{formatTime(timer)}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 rounded-full px-3 py-1.5 shadow-sm">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-green-800">{moves} Züge</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 rounded-full px-3 py-1.5 shadow-sm">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-green-800">{matchedPairs}/{totalPairs}</span>
            </div>
          </div>

          <button
            onClick={startNewGame}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 text-sm"
          >
            Neues Spiel
          </button>
        </div>
      </header>

      {/* Game grid */}
      <main className="flex-1 min-h-0 w-full p-3 relative z-10">
        <div className="grid grid-cols-6 grid-rows-4 gap-3 h-full">
          {cards.map((card) => {
            const AnimalComponent = animalComponents[card.animal];
            return (
              <div
                key={card.id}
                className="card-container cursor-pointer"
                onClick={() => handleCardClick(card.id)}
              >
                <div
                  className={`card-inner ${
                    card.isFlipped || card.isMatched ? "flipped" : ""
                  } ${card.isMatched ? "card-matched" : ""}`}
                >
                  {/* Front - animal face */}
                  <div
                    className={`card-front bg-white border-2 flex flex-col items-center justify-center p-2 transition-all ${
                      card.isMatched
                        ? "border-green-400 shadow-lg shadow-green-200/50"
                        : "border-green-200"
                    }`}
                  >
                    <AnimalComponent className="w-full h-3/4" />
                    <span className="text-xs font-medium text-green-700 mt-1 leading-tight">
                      {animalNames[card.animal]}
                    </span>
                  </div>

                  {/* Back - hidden */}
                  <div className="card-back border-2 border-green-600 shadow-md hover:shadow-lg transition-shadow">
                    <svg viewBox="0 0 60 60" className="w-10 h-10 text-white opacity-80">
                      <path
                        d="M30 10 Q35 5 40 12 Q45 18 38 22 Q42 28 36 30 Q40 35 34 36 Q30 42 26 36 Q20 35 24 30 Q18 28 22 22 Q15 18 20 12 Q25 5 30 10Z"
                        fill="currentColor"
                      />
                      <circle cx="30" cy="24" r="3" fill="rgba(0,100,0,0.3)" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Win modal */}
      {gameWon && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-bounce-in">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3].map((star) => (
                <svg
                  key={star}
                  className={`w-10 h-10 animate-star-spin ${
                    star <= getStarRating() ? "text-yellow-400" : "text-gray-200"
                  }`}
                  style={{ animationDelay: `${star * 0.2}s` }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-2">
              Glückwunsch!
            </h2>
            <p className="text-green-600 mb-4">Du hast alle Paare gefunden!</p>
            <div className="flex justify-center gap-4 text-sm text-green-700 mb-6">
              <span className="bg-green-50 px-3 py-1 rounded-full">{formatTime(timer)}</span>
              <span className="bg-green-50 px-3 py-1 rounded-full">{moves} Züge</span>
            </div>
            <button
              onClick={startNewGame}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Nochmal spielen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
