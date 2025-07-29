// 用户角色类型（与Prisma模型一致）
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR'
}

// 难度枚举（与Prisma模型一致）
export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT'
}

// 提交状态枚举（与Prisma模型一致）
export enum SubmissionStatus {
  CORRECT = 'CORRECT',
  INCORRECT = 'INCORRECT',
  PENDING = 'PENDING'
}

// 用户信息接口（与Prisma模型一致）
export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  score: number;
  createdAt: string;
  updatedAt: string;
  // 扩展字段
  behaviorTemplate?: BehaviorTemplate;
  preferences?: {
    theme: 'light' | 'dark';
    language: string;
    notifications: boolean;
  };
  school?: string;
  major?: string;
  grade?: string;
  solvedChallenges?: number;
  participatedContests?: number;
  ranking?: number;
  lastLoginTime?: string;
}

// 登录请求接口
export interface LoginRequest {
  username: string;
  password: string;
  captchaId: string;
  captchaCode: string;
  emailVerifyId: string;
  emailCode: string;
}

// 注册请求接口
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: UserRole;
  inviteCode?: string;
  emailVerifyId: string;
  emailCode: string;
}

// 认证响应接口
export interface AuthResponse {
  message: string;
  user: User;
  token: string;
}

// 行为特征模板
export interface BehaviorTemplate {
  id: string;
  userId: string;
  keystrokeDynamics: KeystrokeData[] & {
    avgDwellTime: number;
    avgFlightTime: number;
    typingRhythm: number;
    pressureVariation: number;
  };
  mouseTrajectory: MouseData[] & {
    avgSpeed: number;
    acceleration: number;
    clickPattern: number;
    movementSmoothing: number;
  };
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  sampleCount: number;
  accuracy: number;
}

// 键击动态数据
export interface KeystrokeData {
  key: string;
  pressTime: number;
  releaseTime: number;
  dwellTime: number;
  flightTime: number;
}

// 鼠标轨迹数据
export interface MouseData {
  x: number;
  y: number;
  timestamp: number;
  eventType: 'move' | 'click' | 'scroll';
}

// 比赛信息
export interface Contest {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status: 'upcoming' | 'running' | 'ended';
  organizerId: string;
  participants: number;
  maxParticipants?: number;
  rules: string;
  prizes: string[];
}

// 题目类型
export enum ChallengeType {
  WEB = 'web',
  PWN = 'pwn',
  CRYPTO = 'crypto',
  REVERSE = 'reverse',
  MISC = 'misc',
  FORENSICS = 'forensics'
}

// 题目信息（与Prisma模型一致）
export interface Challenge {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  points: number;
  flag: string;
  hints?: any;
  files?: any;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  // 扩展字段
  content?: string;
  type?: ChallengeType;
  solvedCount?: number;
  totalAttempts?: number;
  attachments?: string[];
  contestId?: string;
  tags?: string[];
}

// Flag提交记录（与Prisma模型一致）
export interface Submission {
  id: number;
  userId: number;
  challengeId: number;
  flag: string;
  status: SubmissionStatus;
  submittedAt: string;
  // 扩展字段
  isCorrect?: boolean;
  behaviorData?: BehaviorData;
  blockchainHash?: string;
  behaviorScore?: number;
  submissionTime?: string;
  verificationStatus?: 'verified' | 'failed' | 'pending';
}

// Flag提交记录别名
export type FlagSubmission = Submission;

// 行为数据
export interface BehaviorData {
  keystrokePattern: KeystrokeData[];
  keystrokeDynamics: {
    avgDwellTime: number;
    avgFlightTime: number;
    typingRhythm: number;
    pressureVariation: number;
  };
  mousePattern: MouseData[];
  mouseTrajectory: {
    avgSpeed: number;
    acceleration: number;
    clickPattern: number;
    movementSmoothing: number;
  };
  sessionId: string;
  timestamp: string;
  anomalyDetected: boolean;
  riskScore: number;
}

// 排行榜条目
export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  score: number;
  solvedChallenges: number;
  lastSubmission: string;
  lastSubmissionTime: string;
}

// API响应格式
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  timestamp: string;
}

// 监控数据
export interface MonitoringData {
  activeUsers: number;
  totalSubmissions: number;
  suspiciousActivities: number;
  systemLoad: number;
  timestamp: string;
}

// 异常检测结果
export interface AnomalyDetection {
  id: string;
  userId: string;
  challengeId: string;
  anomalyType: 'behavior_mismatch' | 'flag_sharing' | 'rapid_submission';
  confidence: number;
  description: string;
  detectedAt: string;
  status: 'pending' | 'reviewed' | 'resolved';
}