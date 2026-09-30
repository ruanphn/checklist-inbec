# tarefinhas — Checklist de Atividades

> Aplicativo de checklist de atividades diárias com interface moderna, persistência local em `localStorage`, suporte a instalação como aplicativo e esteira automatizada de deploy para o **GitHub Pages**.

---

## 📋 Sumário
1. [Visão Geral](#-visão-geral)
2. [Stack Tecnológica](#-stack-tecnológica)
3. [Estrutura do Projeto](#-estrutura-do-projeto)
4. [Funcionalidades Implementadas](#-funcionalidades-implementadas)
5. [Persistência de Dados](#-persistência-de-dados)
6. [Como Instalar no Dispositivo](#-como-instalar-no-dispositivo)
7. [Como Executar Localmente](#-como-executar-localmente)
8. [Como Publicar no GitHub Pages](#-como-publicar-no-github-pages)

---

## 🎯 Visão Geral

Este projeto foi construído para ser uma solução simples, direta e funcional para o gerenciamento de tarefas do dia a dia:
- **Simplicidade de Uso**: Interface limpa e intuitiva para cadastro e acompanhamento de tarefas.
- **Independência de Backend**: Totalmente autocontido, utilizando o armazenamento local do navegador (`localStorage`).
- **Instalável**: Suporte a PWA, permitindo que o usuário instale como app nativo no celular ou computador.
- **Responsivo**: Adaptável para telas de celular e desktop.
- **Publicação Ágil**: Configurado para deploy contínuo gratuito no GitHub Pages através do GitHub Actions.

---

## 🛠️ Stack Tecnológica

* **Framework Base**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Ferramenta de Build**: [Vite](https://vitejs.dev/)
* **Estilização**: **CSS Puro** com Variáveis CSS
* **Ícones**: [Lucide React](https://lucide.dev/)
* **PWA & Cache**: `vite-plugin-pwa` (Workbox)
* **CI/CD**: GitHub Actions (`deploy-pages`)

---

## 📂 Estrutura do Projeto

```text
TODO/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Esteira automática do GitHub Actions para o Pages
├── public/
│   ├── favicon.svg               # Ícone SVG do app e favicon
│   ├── pwa-192x192.svg           # Ícone padrão
│   └── pwa-512x512.svg           # Ícone de alta resolução
├── src/
│   ├── components/
│   │   ├── FilterTabs.tsx        # Abas de filtro (Todas, Pendentes, Concluídas) e busca
│   │   ├── Header.tsx            # Cabeçalho com título, data e botão de instalação
│   │   ├── TaskForm.tsx          # Campo de texto e botão para criar novas tarefas
│   │   ├── TaskItem.tsx          # Item individual da lista com checkbox e lixeira
│   │   ├── TaskList.tsx          # Renderizador da lista e estados vazios (empty state)
│   │   └── TaskProgress.tsx      # Barra de progresso visual (% concluída)
│   ├── hooks/
│   │   ├── usePWA.ts             # Detecção de instalação e estado de conectividade
│   │   └── useTasks.ts           # Lógica das tarefas, filtros, busca e persistência
│   ├── types/
│   │   └── task.ts               # Tipos TypeScript (Task e TaskFilter)
│   ├── App.tsx                   # Componente central
│   ├── index.css                 # Folha de estilos global e variáveis de cores
│   └── main.tsx                  # Ponto de entrada React
├── index.html                    # HTML base
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
├── vite.config.ts                # Configuração do Vite + Caminho base
└── DOCUMENTACAO.md               # Esta documentação
```

---

## ✨ Funcionalidades Implementadas

1. **Adicionar Tarefas**:
   * Digite no campo de texto e aperte `Enter` ou clique em **Adicionar**.
   * Bloqueio contra tarefas em branco.
2. **Marcar Concluída / Pendente**:
   * Clique no círculo do checkbox ou no próprio texto para alternar o status.
   * Feedback visual imediato com texto tachado e transição suave.
3. **Remover Tarefas**:
   * Clique no ícone de lixeira no canto direito de cada item.
4. **Barra de Progresso Dinâmica**:
   * Mostra em tempo real a quantidade e porcentagem de tarefas finalizadas com animação fluida.
5. **Filtros por Aba**:
   * **Todas**: Exibe a lista completa com contador.
   * **Pendentes**: Exibe apenas o que falta fazer.
   * **Concluídas**: Exibe o histórico do que já foi finalizado.
6. **Limpar Concluídas**:
   * Ação rápida em botão dedicado para limpar tarefas antigas concluídas.
7. **Pesquisa Instantânea**:
   * Barra de busca rápida para localizar tarefas pelo texto.
8. **Instalação Rápida**:
   * Botão direto no topo da tela para instalar o app no aparelho.

---

## 💾 Persistência de Dados

* Os dados são armazenados no `localStorage` sob a chave `tarefinhas_tasks_v1`.
* Qualquer inserção, alteração ou exclusão é sincronizada instantaneamente.
* Quando o usuário fecha o navegador ou reinicia o computador, suas tarefas permanecem salvas.

---

## 📲 Como Instalar no Dispositivo

### No Computador (Google Chrome, Microsoft Edge, Brave):
* Ao acessar o app, clique no botão **"Instalar App"** no topo da tela ou no ícone de instalação na barra de endereço do navegador.
* O app será adicionado aos programas do computador e abrirá em uma janela própria dedicada.

### No Celular Android (Google Chrome):
* Acesse o link publicado no navegador do celular.
* Clique no botão **"Instalar App"** no topo, ou toque no menu de 3 pontos do Chrome e selecione **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.

### No iPhone / iPad (Safari):
* Abra o link no Safari.
* Toque no botão de **Compartilhar** (ícone de quadrado com seta para cima).
* Role para baixo e selecione **"Adicionar à Tela de Início"**.
* O ícone do app aparecerá na tela inicial do iOS.

---

## 💻 Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor local
npm run dev

# 3. Gerar build de produção
npm run build
```

---

## 🚀 Como Publicar no GitHub Pages

O projeto inclui o arquivo `.github/workflows/deploy.yml` e a configuração `base: '/checklist-inbec/'` no `vite.config.ts`.

Cada `git push` na branch `main` executa a compilação e publicação automática no endereço:
**https://ruanphn.github.io/checklist-inbec/**
