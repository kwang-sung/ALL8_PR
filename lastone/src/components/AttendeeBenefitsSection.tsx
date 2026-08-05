import React from 'react';
import { Gift, Sparkles, CheckCircle2 } from 'lucide-react';

interface AttendeeBenefitsProps {
  onApplyClick: () => void;
}

export const AttendeeBenefitsSection: React.FC<AttendeeBenefitsProps> = ({ onApplyClick }) => {
  const benefitItems = [
    {
      title: '국내 브랜드리셀 프로그램 30일 무료 이용권',
      desc: '끝까지 참석하신 분 전원 30일 무료 제공.',
      badge: 'MAIN BENEFIT',
      highlight: true,
      free: true
    },
    {
      title: 'eBay 브랜드리셀 소싱 프로그램 자체 보유',
      desc: '미국 이베이 역직구용 · 특강에서 활용 방식 공개.',
      badge: 'eBay PROGRAM',
      free: false
    },
    {
      title: 'Qoo10 재팬 브랜드리셀 프로그램 자체 보유',
      desc: '일본 큐텐저팬 역직구용 · 특강에서 활용 방식 공개.',
      badge: 'Qoo10 PROGRAM',
      free: false
    },
    {
      title: 'Shopee 브랜드리셀 소싱 프로그램 자체 보유',
      desc: '동남아 쇼피 역직구용 · 특강에서 활용 방식 공개.',
      badge: 'Shopee PROGRAM',
      free: false
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Header Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 border border-zinc-800 relative overflow-hidden text-center space-y-8">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold">
            <Gift className="w-4 h-4 text-orange-500" />
            <span>STEP 09 · 참석자 전원 혜택</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            끝까지 들어주신 분들에게 특별한 선물을 드립니다
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            국내 브랜드리셀 소싱 프로그램 30일 무료 이용권을 드립니다.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {/* MAIN BENEFIT 카드 */}
          <div className="p-6 rounded-2xl border bg-orange-500/10 border-orange-500/40 space-y-3 hover:border-orange-500/60 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-orange-500 text-zinc-950">
                  MAIN BENEFIT
                </span>
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
              </div>
              <h3 className="font-black text-white text-2xl sm:text-3xl leading-tight">
                국내 브랜드리셀 프로그램 30일 무료 이용권
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                끝까지 참석하신 분 전원 30일 무료 제공.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-800/80 text-sm font-mono text-orange-400 font-bold">
              특강 참석자 전원 100% 무료 제공
            </div>
          </div>

          {/* 프로그램 이미지 */}
          <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <img
              src="/lastone_program.png"
              alt="라스트원 프로그램"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4">
          <a
            href="https://open.kakao.com/o/gKWnrBDg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-base sm:text-lg transition-all shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>[ 지금 혜택 받고 무료특강 신청하기 → ]</span>
          </a>
        </div>

      </div>

    </section>
  );
};

