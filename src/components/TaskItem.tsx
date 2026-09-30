import React from 'react';
import type { Task } from '../types/task';
import { Check, Trash2 } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
}) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-left">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className="checkbox-btn"
          aria-label={
            task.completed
              ? `Marcar tarefa "${task.text}" como pendente`
              : `Marcar tarefa "${task.text}" como concluída`
          }
        >
          {task.completed && <Check size={16} strokeWidth={3} />}
        </button>

        <span className="task-text" onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
          {task.text}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="btn-delete"
        title="Excluir tarefa"
        aria-label={`Excluir tarefa "${task.text}"`}
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};
