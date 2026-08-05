import React from 'react';
import { MARKET_SIZE_DATA } from '../data/lectureData';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';


export const MarketScaleSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* STEP 04 */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
              STEP 04
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              언제까지 국내 5,000만 프레임에 갇혀 있을 건가요?
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              이제는 가정주부도 안방에서 마우스 하나로 달러를 버는 시대입니다.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] relative group shadow-xl">
              <img
                src="/global_market_map.png"
                alt="글로벌 시장 규모 비교"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* STEP 05 */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
              STEP 05
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              K팝, K푸드, K드라마… 대한민국이 곧 소싱상품이 된 시대
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              지금은 K컬처 열풍입니다. 대한민국의 거의 모든 것이 해외에서 팔릴 수 있는 상품이 되었습니다.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] relative group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
                alt="K-Beauty K-Culture Products"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* STEP 06 */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-8">
        
        <div className="space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
            STEP 06
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            시장의 크기부터 비교가 되지 않습니다
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            연간 활성 고객 수 기준, 국내와 해외 마켓의 규모 차이는 명확합니다.
          </p>
        </div>

        {/* Chart & Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MARKET_SIZE_DATA} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                <XAxis dataKey="platform" stroke="#71717a" fontSize={12} tickLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} unit="만" />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-zinc-950 border border-zinc-800 p-3 rounded-2xl shadow-xl text-xs space-y-1">
                          <p className="text-white font-bold">{data.flag} {data.platform}</p>
                          <p className="text-orange-400 font-black text-sm">연간 활성 고객: {data.displayUsers}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="users" radius={[8, 8, 0, 0]} barSize={44}>
                  {MARKET_SIZE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
              <span className="text-sm font-bold text-white">쿠팡</span>
              <strong className="text-base font-black text-sky-400">2,500만명</strong>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-950 border border-amber-500/30 flex items-center justify-between">
              <span className="text-sm font-bold text-white">이베이</span>
              <strong className="text-base font-black text-amber-400">1억 3,500만명</strong>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-950 border border-orange-500/30 flex items-center justify-between">
              <span className="text-sm font-bold text-white">쇼피</span>
              <strong className="text-base font-black text-orange-400">3억 5,000만명</strong>
            </div>
            <p className="text-[11px] text-zinc-500 pt-1">
              ※ 특강 자료 기준 수치이며, 별도 공식 출처 확인이 필요합니다.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

