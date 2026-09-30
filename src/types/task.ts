export type TaskFilter = 'all' | 'pending' | 'completed';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}
