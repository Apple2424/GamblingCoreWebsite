import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Welcome to Gambling Core
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your game and start the adventure! Our collection of exciting games awaits you.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Slot Machine Card */}
          <Link href="/slot-machine" className="block">
            <div className="game-card group">
              <div className="flex items-center justify-center h-32 mb-4 bg-gray-700 rounded-lg overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">🎰</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Slot Machine</h2>
              <p className="text-gray-300">Try your luck at our exciting slot machine game!</p>
            </div>
          </Link>
          
          {/* Blackjack Card */}
          <Link href="/blackjack" className="block">
            <div className="game-card group opacity-50">
              <div className="flex items-center justify-center h-32 mb-4 bg-gray-700 rounded-lg overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">🃏</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Blackjack</h2>
              <p className="text-gray-300">Coming soon! Test your skills against the dealer.</p>
            </div>
          </Link>
          
          {/* Roulette Card */}
          <Link href="/roulette" className="block">
            <div className="game-card group opacity-50">
              <div className="flex items-center justify-center h-32 mb-4 bg-gray-700 rounded-lg overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">🎲</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Roulette</h2>
              <p className="text-gray-300">Coming soon! Place your bets and watch the wheel spin.</p>
            </div>
          </Link>
        </div>
        
        <footer className="mt-16 text-center text-gray-400">
          <p>© 2025 Gambling Core. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
} 