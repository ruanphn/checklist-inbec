import { useTasks } from './hooks/useTasks';
import { usePWA } from './hooks/usePWA';
import { Header } from './components/Header';
import { TaskProgress } from './components/TaskProgress';
import { TaskForm } from './components/TaskForm';
import { FilterTabs } from './components/FilterTabs';
import { TaskList } from './components/TaskList';
import { Smartphone } from 'lucide-react';

export function App() {
  const {
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
  } = useTasks();

  const { isInstallable, isOffline, installApp } = usePWA();

  return (
    <main className="app-container">
      <Header
        isInstallable={isInstallable}
        isOffline={isOffline}
        onInstall={installApp}
      />

      <section className="main-card">
        <TaskProgress
          totalCount={totalCount}
          completedCount={completedCount}
          progressPercentage={progressPercentage}
        />

        <TaskForm onAddTask={addTask} />

        <FilterTabs
          currentFilter={filter}
          onFilterChange={setFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={totalCount}
          pendingCount={pendingCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />

        <TaskList
          tasks={filteredTasks}
          filter={filter}
          hasSearch={Boolean(searchQuery.trim())}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </section>

      <footer className="app-footer">
        <p className="footer-text">
          Minhas Tarefas &bull; Checklist em Tons Pastéis
        </p>
        <div className="footer-pwa-tip">
          <Smartphone size={13} />
          <span>Suporte PWA: instale no celular ou desktop para usar offline</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
