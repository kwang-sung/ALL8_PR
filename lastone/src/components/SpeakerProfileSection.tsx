import React from 'react';
import { LECTURE_INFO } from '../data/lectureData';
import { SPEAKER_IMAGE_BASE64 } from '../data/speakerImageBase64';
import { Award, CheckCircle2, Sparkles, Star, Briefcase } from 'lucide-react';

interface SpeakerProfileProps {
  onApplyClick?: () => void;
}

const DEFAULT_CEO_PORTRAIT = SPEAKER_IMAGE_BASE64;

export const SpeakerProfileSection: React.FC<SpeakerProfileProps> = ({ onApplyClick }) => {
  const speaker = LECTURE_INFO.speaker;

  const credentials = [
    { title: '현 라스트원(LastOne Global) 대표이사', desc: '국내 브랜드리셀 & 해외역직구 직접 운영 중' },
    { title: '올에잇(All-Eight) 공식 대표 초빙강사', desc: '쿠대·올에잇 셀러 대상 단독 특강' },
    { title: '자체 소싱 프로그램 개발·보유', desc: '이베이 / 큐텐저팬 / 쇼피 4개 마켓 전용' },
    { title: '55세 사업실패 후 브랜드리셀로 재기', desc: '누적 100억 원 달성' },
  ];

  const highlights = [
    { label: '누적 유통 실적', value: '100억 원', color: 'text-orange-400' },
    { label: '브랜드리셀 월매출', value: '월 3억 안착', color: 'text-white' },
    { label: '재기 나이', value: '55세', color: 'text-orange-400' },
    { label: '자체 보유 프로그램', value: '4개 마켓', color: 'text-white' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs">
          <Award className="w-3.5 h-3.5 text-orange-500" />
          <span>SPECIAL INSTRUCTOR PROFILE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          국내 브랜드리셀 + 해외역직구를<br />
          <span className="orange-gradient-text">직접 운영 중인 라스트원 대표 직강</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          55세 사업실패 후 브랜드리셀로 재기. 국내 + 해외역직구 실전 노하우를 직접 공개합니다.
        </p>
      </div>

      {/* Main Instructor Profile Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl relative overflow-hidden space-y-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Portrait Column */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-orange-500/40 bg-zinc-950 aspect-[3/4] max-w-sm mx-auto shadow-2xl flex flex-col justify-end p-4">

              {/* Image */}
              <div className="absolute inset-0 overflow-hidden bg-white">
                <img
                  src="/라스트원_대표.png"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== DEFAULT_CEO_PORTRAIT) {
                      target.src = DEFAULT_CEO_PORTRAIT;
                    }
                  }}
                  alt="라스트원 대표"
                  className="w-full h-full object-cover filter contrast-[1.02] brightness-95"
                />
              </div>

              {/* Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent pointer-events-none z-10" />

              {/* Guest Speaker Card — compact */}
              <div className="relative z-10 bg-zinc-950/90 backdrop-blur-md px-4 py-3 rounded-xl border border-zinc-800 shadow-xl text-left space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold tracking-widest text-orange-400 uppercase">
                    GUEST SPEAKER
                  </span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/30 text-[9px] font-mono font-bold">
                    실전 유통 멘토
                  </span>
                </div>

                <h3 className="text-lg font-black text-white tracking-tight">
                  라스트원 대표
                </h3>

                <div className="border-t border-zinc-800/80 pt-1.5 flex items-center gap-2">
                  <span className="text-[10px] text-zinc-400 font-bold">유통 실적</span>
                  <span className="text-base font-black orange-gradient-text">누적 100억 원</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-7 space-y-6">

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 font-mono text-xs font-bold border border-zinc-700">
                  ALL-EIGHT × LASTONE
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 font-mono text-xs font-bold border border-orange-500/30 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                  대표 강사 직강
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                "실패와 사기의 벼랑 끝에서,<br />
                <span className="orange-gradient-text">브랜드리셀로 누적 100억 원 달성"</span>
              </h3>
            </div>

            <blockquote className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs sm:text-sm leading-relaxed italic relative">
              <span className="text-orange-500 font-serif text-3xl absolute -top-2 left-2 opacity-30">"</span>
              <p className="pl-4">
                {speaker.keyQuote}
              </p>
            </blockquote>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-1">
                  <span className="text-[10px] text-zinc-500 font-mono block uppercase">{item.label}</span>
                  <strong className={`text-base sm:text-lg font-black block ${item.color}`}>
                    {item.value}
                  </strong>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono text-orange-500 uppercase tracking-wider font-bold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>주요 이력 및 검증 내역</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-white font-bold block">{cred.title}</strong>
                      <span className="text-[11px] text-zinc-400 block">{cred.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://open.kakao.com/o/gKWnrBDg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-sm transition-all shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>[ 라스트원 대표 무료특강 신청하기 → ]</span>
              </a>
              <span className="text-xs text-zinc-400 font-mono">
                ※ 오픈채팅방 연결
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
