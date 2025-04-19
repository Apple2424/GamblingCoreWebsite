'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const symbols = ['🍒', '🍊', '🍋', '🍇', '7️⃣', '💎'];
const winningCombinations = [
  { symbols: ['7️⃣', '7️⃣', '7️⃣'], multiplier: 10 },
  { symbols: ['💎', '💎', '💎'], multiplier: 5 },
  { symbols: ['🍇', '🍇', '🍇'], multiplier: 3 },
  { symbols: ['🍊', '🍊', '🍊'], multiplier: 2 },
  { symbols: ['🍋', '🍋', '🍋'], multiplier: 2 },
  { symbols: ['🍒', '🍒', '🍒'], multiplier: 1 },
];

export default function SlotMachine() {
  const [reels, setReels] = useState(['🎰', '🎰', '🎰']);
  const [spinning, setSpinning] = useState(false);
  const [credits, setCredits] = useState(100);
  const [bet, setBet] = useState(10);
  const [winAmount, setWinAmount] = useState(0);
  const [winningLine, setWinningLine] = useState(false);

  const checkWin = (newReels) => {
    for (const combo of winningCombinations) {
      if (newReels.every((symbol, index) => symbol === combo.symbols[index])) {
        return combo.multiplier * bet;
      }
    }
    return 0;
  };

  const spin = () => {
    if (spinning || credits < bet) return;
    
    setSpinning(true);
    setWinningLine(false);
    setWinAmount(0);
    setCredits(prev => prev - bet);
    
    // Animate the reels
    const spinInterval = setInterval(() => {
      setReels(reels.map(() => 
        symbols[Math.floor(Math.random() * symbols.length)]
      ));
    }, 100);
    
    // Stop after 1 second
    setTimeout(() => {
      clearInterval(spinInterval);
      
      const newReels = reels.map(() => 
        symbols[Math.floor(Math.random() * symbols.length)]
      );
      
      setReels(newReels);
      setSpinning(false);
      
      const win = checkWin(newReels);
      if (win > 0) {
        setWinAmount(win);
        setCredits(prev => prev + win);
        setWinningLine(true);
      }
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Slot Machine
          </h1>
          <p className="text-gray-300 mb-8">Try your luck and win big!</p>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-8">
            <div className="flex justify-between mb-4 text-lg">
              <div>Credits: <span className="font-bold">{credits}</span></div>
              <div>Bet: <span className="font-bold">{bet}</span></div>
            </div>
            
            <div className={`flex justify-center gap-4 mb-8 p-4 rounded-lg ${winningLine ? 'bg-green-900/30 border border-green-500' : 'bg-gray-700'}`}>
              {reels.map((symbol, index) => (
                <div 
                  key={index}
                  className="w-20 h-20 bg-gray-600 rounded-lg flex items-center justify-center text-4xl shadow-inner"
                >
                  {symbol}
                </div>
              ))}
            </div>
            
            {winAmount > 0 && (
              <div className="mb-6 text-2xl font-bold text-green-400 animate-pulse">
                WIN! +{winAmount} credits
              </div>
            )}
            
            <div className="flex flex-col gap-4">
              <button
                onClick={spin}
                disabled={spinning || credits < bet}
                className="btn-primary text-xl"
              >
                {spinning ? 'Spinning...' : 'SPIN'}
              </button>
              
              <div className="flex justify-center gap-2">
                <button 
                  onClick={() => setBet(Math.max(1, bet - 5))}
                  disabled={spinning || bet <= 1}
                  className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                  -
                </button>
                <span className="px-3 py-1">{bet}</span>
                <button 
                  onClick={() => setBet(Math.min(credits, bet + 5))}
                  disabled={spinning || bet >= credits}
                  className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-left">
            <h3 className="font-bold mb-2">Winning Combinations:</h3>
            <ul className="space-y-1">
              {winningCombinations.map((combo, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>{combo.symbols.join(' ')}</span>
                  <span className="text-green-400">×{combo.multiplier}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 