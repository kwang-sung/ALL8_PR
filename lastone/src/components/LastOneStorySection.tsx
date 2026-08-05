import React from 'react';
import { LECTURE_INFO, REVENUE_TRAJECTORY } from '../data/lectureData';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TrendingUp, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const LastOneStorySection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
          STEP 03
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white">
          55세, 사업 실패와 사기를 겪은 뒤 다시 시작한 이야기
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          방황 끝에 유명 브랜드 유통을 시작한 라스트원 대표. 이미 광고가 되어 있는 브랜드리셀이었기에 가능했던 결과라고 말합니다.
        </p>
      </div>

      {/* Main Grid: Highlight Cards & Recharts Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Key Milestone Badges */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          
          <div className="p-6 rounded-3xl bg-zinc-900 border border-orange-500/30 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-400">실전 매출 성과 (본인 소개 기준)</span>
            <div className="flex items-center gap-3 text-3xl sm:text-4xl font-black text-white">
              <span className="orange-gradient-text">누적 100억 원</span>
            </div>
            <p className="text-xs text-zinc-400">라스트원 대표 실제 사업 궤적</p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">TURNING POINT 01</span>
            <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <span>55세 · 사업 실패 & 사기 → 브랜드 유통 전환</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">TURNING POINT 02</span>
            <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
              <span>국내 → 해외역직구 확장</span>
            </div>
          </div>

        </div>

        {/* Right Column: Recharts Chart */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs text-orange-500 font-mono font-bold uppercase tracking-wider block">REVENUE TRAJECTORY</span>
              <h3 className="text-lg font-bold text-white">매출 성장 그래프 (누적 100억 달성)</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/30">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>100억 유통 달성</span>
            </div>
          </div>

          <div className="h-60 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_TRAJECTORY} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ea580c" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="month" stroke="#71717a" fontSize={11} tickLine={false} />
                <YAxis stroke="#71717a" fontSize={11} tickLine={false} unit="억" />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-zinc-950 border border-zinc-800 p-3 rounded-2xl shadow-xl text-xs space-y-1">
                          <p className="text-zinc-400 font-bold">{data.month}</p>
                          <p className="text-orange-400 text-sm font-black">매출: {data.label}</p>
                          <p className="text-zinc-300 text-xs">{data.stage}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area type="monotone" dataKey="revenueInHundredMillions" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#revenueGlow)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </section>
  );
};

