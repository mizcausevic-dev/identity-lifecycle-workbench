import type {
  LifecycleRiskPoint,
  LifecycleTrendPoint,
  MetricCard,
  QueueItem,
  SpotlightCard,
  StageBacklogPoint
} from './types';

export const metrics: MetricCard[] = [
  { label: 'Joiners in flight', value: '34', delta: '8 missing full access packs', tone: 'warning' },
  { label: 'Mover backlog', value: '19', delta: '6 role updates overdue', tone: 'critical' },
  { label: 'Leaver cleanup', value: '12', delta: '3 orphaned admin accounts', tone: 'critical' },
  { label: 'Certification rate', value: '88%', delta: '+10 pts this month', tone: 'steady' }
];

export const lifecycleTrend: LifecycleTrendPoint[] = [
  { period: 'Jan', joiners: 22, movers: 12, leavers: 8 },
  { period: 'Feb', joiners: 25, movers: 15, leavers: 7 },
  { period: 'Mar', joiners: 28, movers: 17, leavers: 9 },
  { period: 'Apr', joiners: 31, movers: 18, leavers: 11 },
  { period: 'May', joiners: 34, movers: 19, leavers: 12 }
];

export const stageBacklog: StageBacklogPoint[] = [
  { stage: 'Provisioning', count: 11 },
  { stage: 'Manager attestation', count: 9 },
  { stage: 'Role remap', count: 13 },
  { stage: 'Termination cleanup', count: 7 }
];

export const queueItems: QueueItem[] = [
  {
    subject: 'Enterprise onboarding pack for new finance manager',
    owner: 'IAM Operations',
    status: 'Awaiting manager attestation',
    due: 'Today',
    pressure: 'High',
    nextAction: 'Route to line VP'
  },
  {
    subject: 'Sales to CS transfer access remap',
    owner: 'Identity Engineering',
    status: 'Role conflict detected',
    due: 'May 8',
    pressure: 'Critical',
    nextAction: 'Approve transition package'
  },
  {
    subject: 'Terminated contractor account cleanup',
    owner: 'Security Operations',
    status: 'Orphaned admin account remains',
    due: 'May 8',
    pressure: 'Critical',
    nextAction: 'Disable console access'
  },
  {
    subject: 'Quarterly certification for shared service accounts',
    owner: 'Compliance Operations',
    status: 'In review',
    due: 'May 10',
    pressure: 'Medium',
    nextAction: 'Complete owner attestations'
  }
];

export const spotlights: SpotlightCard[] = [
  {
    title: 'Mover risk is climbing',
    body: 'Cross-functional transfers are generating the highest access-drift pressure, especially in customer-facing roles.',
    tag: 'Needs routing'
  },
  {
    title: 'Leaver cleanup remains a board-level concern',
    body: 'Orphaned elevated accounts are low in volume but high in consequence, keeping termination hygiene executive-visible.',
    tag: 'Executive-visible'
  },
  {
    title: 'Fastest operational win',
    body: 'Manager attestations are the main blocker for faster joiner readiness and certification closeout.',
    tag: 'Workflow gain'
  }
];

export const lifecycleRisk: LifecycleRiskPoint[] = [
  { domain: 'Finance operations', overdueReviews: 7, orphanedAccounts: 2 },
  { domain: 'Customer success', overdueReviews: 9, orphanedAccounts: 1 },
  { domain: 'Platform engineering', overdueReviews: 5, orphanedAccounts: 3 },
  { domain: 'Sales operations', overdueReviews: 8, orphanedAccounts: 1 },
  { domain: 'Shared services', overdueReviews: 6, orphanedAccounts: 2 }
];
