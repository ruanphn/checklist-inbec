import React, { useState } from 'react';
import { Plus, CheckSquare } from 'lucide-react';

interface TaskFormProps {
  onAddTask: (text: string) => boolean;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const success = onAddTask(text);
    if (success) {
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form" aria-label="Adicionar nova tarefa">
      <div className="task-input-wrapper">
        <CheckSquare size={18} className="task-input-icon" />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="O que você precisa realizar hoje?"
          className="task-input"
          maxLength={140}
          aria-label="Descrição da nova tarefa"
        />
      </div>
      <button
        type="submit"
        className="btn-add"
        disabled={!text.trim()}
        aria-label="Adicionar tarefa"
      >
        <Plus size={18} />
        <span>Adicionar</span>
      </button>
    </form>
  );
};
