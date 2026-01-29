
export type View = 'login' | 'new' | 'entries' | 'review';

export type ExecutionDelta = 'closer' | 'farther' | 'neutral';

export interface LabEntry {
  id?: string;
  user_id?: string;
  created_at?: string;
  
  // Context
  context: string;
  why_ai_now?: string;

  // Intention & Interaction
  intention?: string[];
  interaction_type?: string;
  role_assigned?: string;
  prompt_key?: string;

  // Mental State
  day_part?: string;
  day_type?: string;
  mental_state?: string[];
  energy_score?: number;

  // Results
  objective_result?: string;
  subjective_result?: string;
  value_score: number;
  execution_delta: ExecutionDelta;
  amplify_vs_substitute?: string;

  // Insight
  insight: string;

  // Alerts
  alerts?: string[];
  next_rule?: string;
  closing_note?: string;
}

export const DAY_PARTS = ['morning', 'afternoon', 'night'] as const;
export const DAY_TYPES = ['exploration', 'execution', 'reflection', 'decision'] as const;
export const MENTAL_STATES = ['focused', 'anxious', 'creative', 'tired', 'procrastinating', 'flow'] as const;
export const INTENTIONS = ['learning', 'automation', 'brainstorming', 'drafting', 'debugging', 'summarizing'] as const;
export const ALERTS = ['cognitive bypass', 'dependency loop', 'hallucination', 'low critical thinking', 'shallow output'] as const;
