// 用户角色类型
export enum UserRole {
  ADMIN = 'admin',
  ORGANIZER = 'organizer',
  PARTICIPANT = 'participant'
}

// 用户信息接口
export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  behaviorTemplate?: BehaviorTemplate;
}

// 行为特征模板
export interface BehaviorTemplate {
  id: string;
  userId: string;
  keystrokeDynamics: KeystrokeData[];
  mouseTrajectory: MouseData[];
  createdAt: string;
  updatedAt: string;
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

// 题目信息
export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: ChallengeType;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  solvedCount: number;
  attachments: string[];
  hints: string[];
  contestId: string;
  isActive: boolean;
  createdAt: string;
}

// Flag提交记录
export interface Submission {
  id: string;
  userId: string;
  challengeId: string;
  flag: string;
  isCorrect: boolean;
  submittedAt: string;
  behaviorData: BehaviorData;
  blockchainHash?: string;
}

// 行为数据
export interface BehaviorData {
  keystrokePattern: KeystrokeData[];
  mousePattern: MouseData[];
  sessionId: string;
  timestamp: string;
}

// 排行榜条目
export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  score: number;
  solvedChallenges: number;
  lastSubmission: string;
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