import React from 'react';
import type { Task, TaskFilter } from '../types/task';
import { TaskItem } from './TaskItem';
import { CheckCircle2, Sparkles, Inbox } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  filter: TaskFilter;
  hasSearch: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  filter,
  hasSearch,
  onToggle,
  onDelete,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon-wrap" aria-hidden="true">
          {hasSearch ? (
            <Inbox size={26} />
          ) : filter === 'completed' ? (
            <CheckCircle2 size={26} />
          ) : (
            <Sparkles size={26} />
          )}
        </div>
        <h3 className="empty-title">
          {hasSearch
            ? 'Nenhuma tarefa encontrada'
            : filter === 'completed'
            ? 'Nenhuma tarefa concluída ainda'
            : filter === 'pending'
            ? 'Nenhuma tarefa pendente!'
            : 'Sua lista está limpa'}
        </h3>
        <p className="empty-desc">
          {hasSearch
            ? 'Tente buscar com outros termos ou limpe o campo de pesquisa.'
            : filter === 'completed'
            ? 'Complete tarefas da sua lista para vê-las listadas aqui.'
            : filter === 'pending'
            ? 'Tudo em dia! Que tal adicionar uma nova atividade?'
            : 'Adicione suas primeiras atividades no campo acima para começar o dia.'}
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list" aria-label="Lista de tarefas">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
