import { useState, useEffect } from 'react';
import type { Task, TaskFilter } from '../types/task';

const STORAGE_KEY = 'pastel_todo_tasks_v1';

const INITIAL_TASKS: Task[] = [
  {
    id: 'demo-1',
    text: 'Experimentar o novo app de tarefas em tons pastéis 🌿',
    completed: true,
    createdAt: Date.now() - 3600000 * 3,
  },
  {
    id: 'demo-2',
    text: 'Adicionar uma atividade pendente do dia a dia ✨',
    completed: false,
    createdAt: Date.now() - 3600000 * 2,
  },
  {
    id: 'demo-3',
    text: 'Instalar o app no celular ou computador (PWA) 📱',
    completed: false,
    createdAt: Date.now() - 3600000 * 1,
  },
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as Task[];
      }
    } catch (e) {
      console.error('Falha ao carregar tarefas do localStorage:', e);
    }
    return INITIAL_TASKS;
  });

  const [filter, setFilter] = useState<TaskFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Persiste no localStorage sempre que as tarefas mudarem
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error('Falha ao salvar tarefas no localStorage:', e);
    }
  }, [tasks]);

  const addTask = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return false;

    const newTask: Task = {
      id: crypto.randomUUID ? crypto.randomUUID() : `task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      text: trimmed,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((prev) => [newTask, ...prev]);
    return true;
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  // Contadores
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = totalCount - completedCount;
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Filtragem
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'pending'
        ? !task.completed
        : task.completed;

    const matchesSearch = task.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim());

    return matchesFilter && matchesSearch;
  });

  return {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    totalCount,
    completedCount,
    pendingCount,
    progressPercentage,
  };
}
