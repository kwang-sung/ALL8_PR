import { StepItem, MarketComparisonData, RevenuePoint, StudentReview, FaqItem } from '../types';

export const LECTURE_INFO = {
  title: '올에잇 × 라스트원 무료특강',
  subTitle: '쿠대 × 올에잇 대표님을 위한 단독 특강',
  mainHeadline: '국내 브랜드리셀, 이제는 해외역직구까지 함께.',
  eventDate: '2026년 8월 18일(화) 저녁 8시 00분',
  eventDuration: '약 2시간 생방송 라이브 & 현장 진행',
  locationOnline: '온라인 실시간 라이브 (ZOOM)',
  locationOffline: '서울 강남구 역삼동 올에잇 세미나홀 (선착순 20명)',
  totalSeats: 100,
  initialRegisteredCount: 88,
  price: '0원 (100% 무료)',
  host: '올에잇 × 라스트원 팀',
  speaker: {
    name: '라스트원 대표',
    title: '국내 & 해외역직구 브랜드리셀 전문 셀러',
    age: '55세',
    background: '사업 실패와 사기를 겪은 뒤, 55세에 리셀로 대반전 극복',
    revenueRecord: '누적 100억 원 달성 (본인 소개 기준)',
    keyQuote: '아무도 모르는 상품을 광고해 파는 일은 초보에게 불가능합니다. 이미 광고가 끝난 글로벌 브랜드리셀이 유일한 정답입니다.'
  }
};

export const STORYBOARD_STEPS: StepItem[] = [
  {
    stepNumber: 'STEP 01',
    title: '쿠대 × 올에잇 대표님들을 위한 특별한 무료특강',
    subtitle: '국내 + 해외역직구 브랜드리셀을 하나로',
    description: '국내 브랜드리셀과 해외역직구 브랜드리셀을 동시에 성공적으로 실행하고 있는 라스트원 대표의 핵심 노하우를 한 자리에서 직접 공개합니다.',
    highlights: ['국내 브랜딩 노하우', '미국 이베이 역직구', '실전 자동화 프로그램']
  },
  {
    stepNumber: 'STEP 02',
    title: '가장 쉽고 빠른 온라인 판매법, 브랜드리셀',
    subtitle: '광고비 zero, 이미 찾아보는 상품을 팝니다',
    description: '아무도 모르는 상품을 직접 광고해서 파는 일은 초보/중급 셀러 모두에게 매우 어렵습니다. 지금 가장 뜨거운 분야는 이미 수요가 입증된 브랜드리셀입니다.',
    highlights: ['마케팅 광고 비용 절감', '구매 전환율 급상승', '초보자 진입장벽 최소화']
  },
  {
    stepNumber: 'STEP 03',
    title: '55세, 사업 실패와 사기를 겪은 뒤 다시 시작한 이야기',
    subtitle: '누적 100억 원 달성의 반전 기적',
    description: '방황 끝에 유명 브랜드 유통을 시작한 라스트원 대표. 이미 대중적 인지도가 형성된 브랜드리셀이었기에 55세라는 나이와 절망적인 상황에서도 가능했던 결과라고 말합니다.',
    highlights: ['누적 100억 원 달성', '본인 실전 매출 데이터 검증', '나이와 경험을 뛰어넘는 시스템']
  },
  {
    stepNumber: 'STEP 04',
    title: '언제까지 국내 5,000만 프레임에 갇혀 있을 건가요?',
    subtitle: '안방에서 마우스 하나로 달러를 버는 시대',
    description: '국내 5,000만 명의 치열한 경쟁을 넘어, 3억 명 이상의 해외 구매자에게 달러를 받아 판매하는 역직구 시장이 열렸습니다. 가정주부도 안방에서 글로벌 수출기업가가 됩니다.',
    highlights: ['환차익 달러 수익', '글로벌 구매력 활용', '공간 제약 없는 노마드 비즈니스']
  },
  {
    stepNumber: 'STEP 05',
    title: 'K팝, K푸드, K드라마… 대한민국이 곧 소싱상품이 된 시대',
    subtitle: '세계가 열광하는 K-컬처 프리미엄',
    description: '지금은 K-컬처 열풍입니다. 대한민국에 흔히 있는 브랜드 의류, 뷰티, 패션, 라이프스타일 상품들이 해외 직구족들에게 압도적인 인기를 끌고 있습니다.',
    highlights: ['K-브랜드 해외 프리미엄 마진', '국내 소싱 → 글로벌 즉시 판매', '수요 폭발 카테고리 선점']
  },
  {
    stepNumber: 'STEP 06',
    title: '시장의 크기부터 비교가 되지 않습니다',
    subtitle: '연간 활성 고객 수 기준 압도적 수치 차이',
    description: '국내 대표 마켓과 글로벌 메이저 마켓의 고객 수 차이는 명확합니다. 더 큰 바다에서 노를 저어야 고기를 훨씬 많이 잡을 수 있습니다.',
    highlights: ['쿠팡 2,500만 명', '이베이 1억 3,500만 명 (5.4배)', '쇼피 1억 8,000만 명 (7.2배)']
  },
  {
    stepNumber: 'STEP 07',
    title: '국내에만 머무르지 않았습니다. 지금도 해외역직구 브랜드리셀을 함께 운영하고 있습니다.',
    subtitle: '이론이 아닌 100% 현장 실전 파이프라인',
    description: '라스트원팀은 지금도 국내 브랜드리셀과 Shopee, eBay, Qoo10 해외역직구를 실시간으로 동시에 직접 운영하고 있습니다.',
    highlights: ['Shopee 브랜드리셀', 'eBay 브랜드리셀', 'Qoo10 & Shopee 멀티채널']
  },
  {
    stepNumber: 'STEP 08',
    title: '국내 + 해외역직구를 함께 다루는 특강은 없었습니다',
    subtitle: '단 2시간 만에 두 개 시장 전략을 동시에 완파',
    description: '이번 무료특강에서는 국내 브랜드리셀과 미국 이베이 브랜드리셀, 두 시장의 매출 전략을 한 번에 공개합니다.',
    highlights: ['STEP 1: 시장 분석', 'STEP 2: 소싱 비밀', 'STEP 3: 시스템 구축', 'STEP 4: 매출 폭발']
  },
  {
    stepNumber: 'STEP 09',
    title: '참석자 전원 혜택! 특별한 선물을 드립니다',
    subtitle: '특강 참석자만 누릴 수 있는 압도적 5대 특전',
    description: '끝까지 특강에 참여해 주신 대표님들께 라스트원팀이 직접 자체 개발한 브랜드리셀 전용 소싱 솔루션 무료 이용권 및 핵심 가이드 PDF를 전원 제공합니다.',
    highlights: [
      '국내 브랜드리셀 소싱 프로그램 30일 무료 이용권',
      'eBay 소싱 프로그램 연동 세팅 가이드',
      'Qoo10 재팬 소싱 프로그램 활용 데이터',
      'Shopee 글로벌 소싱 프로그램 시크릿 팁',
      '해외 역직구 필수 리셀 브랜드 50선 PDF'
    ]
  }
];

export const MARKET_SIZE_DATA: MarketComparisonData[] = [
  {
    platform: '쿠팡 (Coupang)',
    users: 25,
    displayUsers: '2,500만 명',
    badge: '국내 1위',
    color: '#0284C7',
    flag: '🇰🇷'
  },
  {
    platform: '이베이 (eBay)',
    users: 135,
    displayUsers: '1억 3,500만 명',
    badge: '국내 대비 5.4배',
    color: '#EAB308',
    flag: '🇺🇸'
  },
  {
    platform: '쇼피 (Shopee)',
    users: 350,
    displayUsers: '3억 5,000만 명',
    badge: '국내 대비 14배',
    color: '#F97316',
    flag: '🌏'
  }
];

export const REVENUE_TRAJECTORY: RevenuePoint[] = [
  { month: '사업실패 후 전환', revenueInHundredMillions: 0, label: '브랜드 유통 시작', stage: '55세 사업실패 & 사기 후 브랜드 유통 전환' },
  { month: '브랜드리셀 안착', revenueInHundredMillions: 3.0, label: '월 3억 원', stage: '국내 브랜드리셀 월매출 3억 안착' },
  { month: '누적 100억 달성', revenueInHundredMillions: 100.0, label: '누적 100억 원', stage: '국내+해외역직구 병행, 누적 100억 달성' }
];

export const STUDENT_REVIEWS: StudentReview[] = [];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Q1. 진짜 초보자나 영어/해외 결제를 잘 모르는 사람도 가능한가요?',
    answer: '네, 100% 가능합니다. 해외역직구는 영어를 잘해야 할 수 있는 것이 아니라, 번역 및 자동화 소싱 프로그램 세팅이 핵심입니다. 라스트원 대표 역시 55세에 컴맹 수준에서 시작하여 성공했습니다.',
    category: 'super-beginner'
  },
  {
    question: 'Q2. 국내 브랜드리셀 프로그램 30일 무료 이용권은 어떻게 받나요?',
    answer: '특강 시작부터 끝까지 줌(ZOOM) 라이브 및 현장에 끝까지 참여해 주신 분들께 강의 직후 설문지 링크를 통해 100% 즉시 지급해 드립니다.',
    category: 'benefits'
  },
  {
    question: 'Q3. 특강 참가비가 정말 0원인가요? 추후 강제 결제가 있나요?',
    answer: '네, 순수 100% 무료 특강입니다. 올에잇과 라스트원 팀이 셀러 대표님들의 성장 생태계를 위해 준비한 단독 특별 행사로, 어떠한 강제 결제도 없습니다.',
    category: 'schedule'
  },
  {
    question: 'Q4. 온라인 ZOOM 참가 신청을 하면 링크는 어디로 오나요?',
    answer: '신청 시 입력해주신 휴대폰 번호(알림톡/문자)와 이메일로 강의 당일 1시간 전 및 10분 전 접속 ZOOM URL 및 비밀번호를 발송해 드립니다.',
    category: 'system'
  },
  {
    question: 'Q5. 오프라인 현장 참석은 몇 명까지 가능한가요?',
    answer: '오프라인 현장 참석은 올에잇 세미나홀 장소 제약상 선착순 20명으로 조기 제한됩니다. 현장 신청 인원이 채워지면 자동으로 온라인 ZOOM 참석으로 안내됩니다.',
    category: 'schedule'
  }
];

export const RECENT_APPLICANTS: { name: string; region: string; timeAgo: string; attendance: string }[] = [];
