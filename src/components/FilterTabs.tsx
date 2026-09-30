import React from 'react';
import type { TaskFilter } from '../types/task';
import { Search, X, Trash2 } from 'lucide-react';

interface FilterTabsProps {
  currentFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  pendingCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
  currentFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  totalCount,
  pendingCount,
  completedCount,
  onClearCompleted,
}) => {
  return (
    <div className="controls-bar">
      {/* Campo de Busca Rápida */}
      {totalCount > 3 && (
        <div className="search-input-wrapper">
          <Search size={16} className="search-input-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Pesquisar tarefas..."
            className="search-input"
            aria-label="Pesquisar tarefas"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="search-clear-btn"
              title="Limpar busca"
              aria-label="Limpar busca"
            >
              <X size={14} />
            </button>
          )}
        </div>
      )}

      {/* Linha de Abas e Ações */}
      <div className="filter-row">
        <div className="filter-tabs" role="tablist" aria-label="Filtro de tarefas">
          <button
            role="tab"
            aria-selected={currentFilter === 'all'}
            onClick={() => onFilterChange('all')}
            className={`filter-tab ${currentFilter === 'all' ? 'active' : ''}`}
          >
            Todas
            <span className="tab-badge">{totalCount}</span>
          </button>

          <button
            role="tab"
            aria-selected={currentFilter === 'pending'}
            onClick={() => onFilterChange('pending')}
            className={`filter-tab ${currentFilter === 'pending' ? 'active' : ''}`}
          >
            Pendentes
            <span className="tab-badge">{pendingCount}</span>
          </button>

          <button
            role="tab"
            aria-selected={currentFilter === 'completed'}
            onClick={() => onFilterChange('completed')}
            className={`filter-tab ${currentFilter === 'completed' ? 'active' : ''}`}
          >
            Concluídas
            <span className="tab-badge">{completedCount}</span>
          </button>
        </div>

        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="btn-clear-done"
            title="Remover todas as tarefas já marcadas como concluídas"
            aria-label="Limpar tarefas concluídas"
          >
            <Trash2 size={13} />
            <span>Limpar concluídas</span>
          </button>
        )}
      </div>
    </div>
  );
};
