export interface RegistrationFormData {
  name: string;
  phone: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  attendanceType: 'online' | 'offline';
  motivation: string;
  agreedToTerms: boolean;
}

export interface RegistrationRecord extends RegistrationFormData {
  id: string;
  createdAt: string;
  status: 'confirmed' | 'waitlist';
}

export interface StepItem {
  stepNumber: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  iconName?: string;
}

export interface MarketComparisonData {
  platform: string;
  users: number; // in Millions
  displayUsers: string;
  badge: string;
  color: string;
  flag: string;
}

export interface RevenuePoint {
  month: string;
  revenueInHundredMillions: number; // 억 단위
  label: string;
  stage: string;
}

export interface StudentReview {
  id: string;
  name: string;
  role: string;
  firstRevenueDays: number;
  maxMargin: string;
  monthlyRevenue: string;
  quote: string;
  platformUsed: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'super-beginner' | 'system' | 'benefits' | 'schedule';
}
