export type Tone = 'steady' | 'warning' | 'critical';

export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  tone: Tone;
}

export interface LifecycleTrendPoint {
  period: string;
  joiners: number;
  movers: number;
  leavers: number;
}

export interface StageBacklogPoint {
  stage: string;
  count: number;
}

export interface QueueItem {
  subject: string;
  owner: string;
  status: string;
  due: string;
  pressure: string;
  nextAction: string;
}

export interface SpotlightCard {
  title: string;
  body: string;
  tag: string;
}

export interface LifecycleRiskPoint {
  domain: string;
  overdueReviews: number;
  orphanedAccounts: number;
}
