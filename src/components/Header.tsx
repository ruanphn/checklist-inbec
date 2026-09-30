import React from 'react';
import { CheckSquare, Download, WifiOff, Calendar } from 'lucide-react';

interface HeaderProps {
  isInstallable: boolean;
  isOffline: boolean;
  onInstall: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isInstallable,
  isOffline,
  onInstall,
}) => {
  const todayFormatted = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  // Deixa a primeira letra maiúscula
  const capitalizedDate =
    todayFormatted.charAt(0).toUpperCase() + todayFormatted.slice(1);

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="header-brand">
          <div className="brand-icon-wrapper" aria-hidden="true">
            <CheckSquare size={24} />
          </div>
          <div>
            <h1 className="brand-title">Minhas Tarefas</h1>
          </div>
        </div>

        {isInstallable && (
          <button
            onClick={onInstall}
            className="btn-install"
            title="Instalar este aplicativo no seu dispositivo"
            aria-label="Instalar como aplicativo PWA"
          >
            <Download size={14} />
            <span>Instalar App</span>
          </button>
        )}
      </div>

      <div className="header-meta">
        <div className="date-badge">
          <Calendar size={14} />
          <span>{capitalizedDate}</span>
        </div>

        {isOffline && (
          <span className="status-badge-offline" title="Você está sem internet, mas suas alterações estão salvas no aparelho">
            <WifiOff size={12} />
            Modo Offline
          </span>
        )}
      </div>
    </header>
  );
};
