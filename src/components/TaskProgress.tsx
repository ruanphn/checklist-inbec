import React from 'react';

interface TaskProgressProps {
  totalCount: number;
  completedCount: number;
  progressPercentage: number;
}

export const TaskProgress: React.FC<TaskProgressProps> = ({
  totalCount,
  completedCount,
  progressPercentage,
}) => {
  if (totalCount === 0) return null;

  return (
    <div className="progress-card" role="region" aria-label="Progresso das tarefas">
      <div className="progress-header">
        <span>
          {completedCount === totalCount
            ? '🎉 Parabéns! Todas as tarefas concluídas'
            : `${completedCount} de ${totalCount} tarefas concluídas`}
        </span>
        <span className="progress-pill">{progressPercentage}%</span>
      </div>
      <div className="progress-track" aria-hidden="true">
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};
