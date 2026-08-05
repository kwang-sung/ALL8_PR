import React from 'react';

export const DualMarketCurriculum: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* STEP 07 */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
              STEP 07
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              국내에만 머무르지 않았습니다. 지금도 해외역직구 브랜드리셀을 함께 운영하고 있습니다.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              이론이 아닌 100% 현장 실전 파이프라인으로 국내 및 해외역직구 마켓을 직접 운영 중입니다.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3.5 py-2 rounded-xl bg-zinc-950 text-orange-400 font-bold text-xs border border-zinc-800">
                아마존 브랜드리셀
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-zinc-950 text-amber-400 font-bold text-xs border border-zinc-800">
                eBay 브랜드리셀
              </span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] relative group shadow-xl">
              <img
                src="/lastone_amazon.jpg"
                alt="라스트원 대표 아마존 창고"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 to-transparent pt-10 pb-4 px-4">
                <p className="text-yellow-400 text-base sm:text-xl font-black text-center drop-shadow-lg">
                  라스트원 대표 아마존 창고 브랜드리셀 해상배송
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* STEP 08 */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
              STEP 08
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              국내 + 해외역직구를 함께 다루는 특강은 없었습니다
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              이번 무료특강에서는 국내 브랜드리셀, 미국 이베이, 동남아 쇼피까지 세 시장의 매출 전략을 한 번에 공개합니다.
            </p>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-orange-500/30 flex flex-wrap items-center gap-3">
              <span className="text-white font-bold text-sm sm:text-base">국내</span>
              <span className="text-orange-500 font-black text-lg">×</span>
              <span className="text-orange-400 font-bold text-sm sm:text-base">이베이</span>
              <span className="text-orange-500 font-black text-lg">×</span>
              <span className="text-orange-400 font-bold text-sm sm:text-base">쇼피</span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-orange-500/20 bg-[#04050e] aspect-[4/3] relative shadow-xl overflow-hidden">

              <img
                src="/world_map_korea.png"
                alt="글로벌 수출 세계지도"
                className="absolute inset-0 w-full h-full object-cover"
              />



            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

