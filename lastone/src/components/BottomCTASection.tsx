import React from 'react';
import { Sparkles, Users, ArrowRight } from 'lucide-react';

export const BottomCTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 border border-orange-500/40 relative overflow-hidden text-center space-y-8 shadow-2xl">
        
        {/* Top Glow & Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold">
            <Users className="w-4 h-4 text-orange-500" />
            <span>지금 자리를 확인하세요</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            국내 + 해외역직구,<br />
            <span className="orange-gradient-text">한 번에 시작하는 방법</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
            올에잇 × 라스트원 무료특강에서 직접 확인하세요.
          </p>
        </div>

        {/* Big Kakao Open Chat CTA Button */}
        <div className="pt-2 relative z-10 space-y-4">
          <a
            href="https://open.kakao.com/o/gKWnrBDg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-lg sm:text-xl transition-all shadow-xl shadow-orange-500/25 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-3"
          >
            <Sparkles className="w-6 h-6" />
            <span>무료특강 신청하기 →</span>
          </a>

          <p className="text-xs text-zinc-500 font-mono">
            ※ 신청 링크·일정·장소는 실제 운영 정보로 교체가 필요합니다.
          </p>
        </div>

      </div>
    </section>
  );
};
