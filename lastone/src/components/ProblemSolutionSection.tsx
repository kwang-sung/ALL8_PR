import React from 'react';
import { STORYBOARD_STEPS } from '../data/lectureData';
import { XCircle, CheckCircle2, TrendingUp, ShoppingBag } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  const step1 = STORYBOARD_STEPS[0];
  const step2 = STORYBOARD_STEPS[1];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* STEP 01 Visual Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 relative overflow-hidden space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
              {step1.stepNumber}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {step1.title}
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {step1.description}
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] relative group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
                alt="Brand Reselling"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* STEP 02 Pain Points vs Solution Visual Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-8">
        
        {/* Step Header */}
        <div className="space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
            {step2.stepNumber}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {step2.title}
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {step2.description}
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left: General Product Frustrations */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-bold text-base border-b border-zinc-800 pb-3">
              <XCircle className="w-5 h-5" />
              <span>일반 상품 판매의 높은 벽</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-400 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>아무도 모르는 듣보잡 상품 광고 비용 과다 지출</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>초보 및 중급 셀러에게 너무 높은 고객 유입 진입장벽</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>치열한 가격 경쟁으로 마진 파괴</span>
              </li>
            </ul>
          </div>

          {/* Right: Brand Reselling Solution */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-orange-500/30 space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-base border-b border-zinc-800 pb-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
              <span>이미 광고가 끝난 브랜드리셀</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-200 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>소비자가 이미 브랜드 이름을 검색해서 유입되는 구조</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>광고비 0원으로 유입 및 높은 구매 전환율 달성</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>초보 셀러도 즉시 글로벌 매출로 연결 가능</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
};

