import React from 'react';
import { LECTURE_INFO } from '../data/lectureData';
import { Shield, Info } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8 text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-zinc-300">
              올에잇 × 라스트원 무료특강
            </h3>
            <p className="text-zinc-400">
              올에잇 × 라스트원 무료특강 · 본 상세페이지는 제공된 스토리보드를 기반으로 제작되었습니다.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-orange-400 bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
            <Info className="w-4 h-4 shrink-0" />
            <span>신청 링크: https://open.kakao.com/o/gKWnrBDg</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 leading-relaxed text-[11px]">
          <div>
            <p className="font-bold text-zinc-400 mb-1">안내 및 주의사항</p>
            <p>
              ※ 특강 자료의 활성 고객 수 및 시장 수치는 이해를 돕기 위한 특강 자료 기준 수치이며, 플랫폼 사정에 따라 달라질 수 있습니다.<br />
              ※ 신청 링크·일정·장소는 실제 운영 사정에 따라 변경될 수 있으며, 개별 알림톡으로 변경 안내가 발송됩니다.
            </p>
          </div>

          <div>
            <p className="font-bold text-zinc-400 mb-1">참석자 혜택 수령 안내</p>
            <p>
              ※ 라스트원팀 자체 개발 브랜드리셀 30일 무료 이용권은 강의 라이브에 끝까지 참석하신 분에 한해 지급됩니다.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-900 text-center text-[11px] text-zinc-600 font-mono">
          Copyright © 2026 올에잇 × 라스트원. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
