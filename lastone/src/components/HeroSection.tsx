import React from 'react';
import { LECTURE_INFO } from '../data/lectureData';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onApplyClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onApplyClick }) => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        
        {/* Main Hero Banner Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl relative overflow-hidden space-y-8">
          <div className="grid grid-cols-1 gap-8 items-center">

            {/* Content Column */}
            <div className="space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
                  올에잇 × 라스트원
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 font-mono font-bold text-xs">
                  무료특강 신청
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-orange-400 font-bold text-sm sm:text-base block">
                  쿠대 × 올에잇 대표님을 위한 단독 특강
                </span>
                
                <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                  국내 브랜드리셀,<br />
                  이제는 <span className="orange-gradient-text">해외역직구</span>까지 함께.
                </h1>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                국내 브랜드리셀과 해외역직구 브랜드리셀을 동시에 실행하고 있는 라스트원 대표가, 두 시장의 매출 전략을 하나의 특강에서 공개합니다.
              </p>

              <div className="pt-2">
                <a
                  href="https://open.kakao.com/o/gKWnrBDg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-base sm:text-lg transition-all shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>[ 무료특강 신청하기 → ]</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Sub Hero Banner */}
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg">
                "국내+해외역직구를 함께 다루는 특강, 흔치 않습니다"
              </h3>
              <p className="text-zinc-400 text-xs">
                두 개 시장 매출 파이프라인을 2시간 만에 완파하는 최초 단독 라이브 특강
              </p>
            </div>
          </div>

          <a
            href="https://open.kakao.com/o/gKWnrBDg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-orange-400 font-bold text-xs sm:text-sm border border-zinc-700 transition-all shrink-0 cursor-pointer inline-flex items-center gap-1"
          >
            <span>무료특강 바로 신청</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

