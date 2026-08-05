import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles, ChevronRight, Users } from 'lucide-react';

interface HeaderBannerProps {
  onApplyClick: () => void;
  seatsLeft: number;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({ seatsLeft }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 59, seconds: 45 });

  const handleApply = () => {
    window.open('https://open.kakao.com/o/gKWnrBDg', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-xl shadow-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand & Live Counter */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span>올에잇 × 라스트원</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
            <Users className="w-3.5 h-3.5 text-orange-500" />
            <span>선착순 마감 임박 | <strong className="text-orange-400">잔여 {seatsLeft}석</strong> / 100석</span>
          </div>
        </div>

        {/* Timer & Quick CTA */}
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 text-zinc-300 font-montserrat">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-zinc-400 hidden lg:inline">마감까지</span>
            <span className="bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded-lg font-mono text-orange-400 font-bold">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>

          <a
            href="https://open.kakao.com/o/gKWnrBDg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>무료특강 신청하기</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </header>
  );
};
