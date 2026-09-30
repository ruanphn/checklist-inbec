# 🌿 Minhas Tarefas — Checklist Pastel (PWA & GitHub Pages)

> Aplicativo de checklist de atividades diárias com estética refinada em tons pastéis, suporte completo a PWA (Progressive Web App) para desktop e mobile, persistência local em `localStorage` e esteira automatizada de deploy para o **GitHub Pages**.

---

## 📋 Sumário
1. [Visão Geral e Objetivos](#-visão-geral-e-objetivos)
2. [Stack Tecnológica](#-stack-tecnológica)
3. [Design System & UI em Tons Pastéis](#-design-system--ui-em-tons-pastéis)
4. [Estrutura do Projeto](#-estrutura-do-projeto)
5. [Funcionalidades Implementadas](#-funcionalidades-implementadas)
6. [Persistência de Dados](#-persistência-de-dados)
7. [Configuração PWA (Web & Mobile)](#-configuração-pwa-web--mobile)
8. [Como Executar Localmente](#-como-executar-localmente)
9. [Como Publicar no GitHub Pages](#-como-publicar-no-github-pages)
10. [Como Instalar no Dispositivo](#-como-instalar-no-dispositivo)

---

## 🎯 Visão Geral e Objetivos

Este projeto foi construído para ser uma solução simples, direta e elegante para o gerenciamento de tarefas do dia a dia, atendendo aos seguintes pilares:
- **Simplicidade de Uso**: Interface limpa e intuitiva, inspirada em planners minimalistas de produtividade.
- **Independência de Backend**: Totalmente autocontido, utilizando o armazenamento local do navegador (`localStorage`).
- **Resiliência Offline**: Graças ao Service Worker e cache do PWA, o aplicativo continua abrindo e funcionando perfeitamente mesmo sem internet.
- **Portabilidade**: Responsivo para qualquer tamanho de tela e instalável como app nativo em computadores (Windows/Mac/Linux) e smartphones (Android/iOS).
- **Publicação Ágil**: Configurado para deploy contínuo gratuito no GitHub Pages através do GitHub Actions.

---

## 🛠️ Stack Tecnológica

* **Framework Base**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Ferramenta de Build**: [Vite](https://vitejs.dev/) (ultrarrápido, modular e leve)
* **Estilização**: **CSS Puro** com Variáveis CSS (*Design Tokens*), sem frameworks pesados
* **Ícones**: [Lucide React](https://lucide.dev/) (ícones vetoriais modernos e leves)
* **PWA & Cache**: [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/) com Workbox
* **CI/CD**: GitHub Actions (`deploy-pages`)

---

## 🎨 Design System & UI em Tons Pastéis

### Por que tons pastéis são uma boa escolha para UI?
* **Redução da Fadiga Visual**: Diferente de cores ultra-saturadas (como azuis elétricos ou vermelhos fortes), tons pastéis trazem serenidade e conforto para uso prolongado.
* **Sensação Acolhedora (*Cozy Productivity*)**: Estimula a organização sem passar a sensação de urgência ou pressão corporativa.
* **Hierarquia Clara e Acessibilidade (WCAG)**: Para evitar o erro comum de baixo contraste em designs pastéis, as cores pastéis foram aplicadas como **superfícies, cartões, fundos de status e bordas sutis**, enquanto todo o texto principal utiliza um tom grafite escuro (`#24332C`), garantindo excelente legibilidade.

### Paleta de Cores do Projeto:

| Variável CSS | Cor / Hex | Aplicação |
| :--- | :--- | :--- |
| `--bg-page` | `#F6F8F6` | Fundo da tela em degradê menta ultra-suave |
| `--bg-card` | `#FFFFFF` | Cartão principal com borda suave |
| `--pastel-sage` | `#84AC8A` | Verde sálvia: botão principal, checkboxes concluídos |
| `--pastel-sage-light` | `#EBF3ED` | Fundo da barra de progresso e badge ativo |
| `--pastel-peach` | `#F6BD60` | Pêssego/damasco: botão de instalação PWA e destaques |
| `--pastel-rose` | `#F28482` | Coral suave: botão de excluir e aviso de modo offline |
| `--text-main` | `#24332C` | Grafite escuro para máxima legibilidade (WCAG AAA) |
| `--text-secondary` | `#586B62` | Cinza sálvia intermediário para datas e subtítulos |
| `--text-done` | `#97A8A0` | Cinza atenuado para tarefas concluídas (com tachado) |

---

## 📂 Estrutura do Projeto

```text
TODO/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Esteira automática do GitHub Actions para o Pages
├── public/
│   ├── favicon.svg               # Ícone SVG do app e favicon
│   ├── pwa-192x192.svg           # Ícone padrão PWA para dispositivos móveis
│   └── pwa-512x512.svg           # Ícone PWA de alta resolução e maskable
├── src/
│   ├── components/
│   │   ├── FilterTabs.tsx        # Abas de filtro (Todas, Pendentes, Concluídas) e busca
│   │   ├── Header.tsx            # Cabeçalho com data, status offline e botão de instalação
│   │   ├── TaskForm.tsx          # Campo de texto e botão para criar novas tarefas
│   │   ├── TaskItem.tsx          # Item individual da lista com checkbox e lixeira
│   │   ├── TaskList.tsx          # Renderizador da lista e estados vazios (empty state)
│   │   └── TaskProgress.tsx      # Barra de progresso visual (% concluída)
│   ├── hooks/
│   │   ├── usePWA.ts             # Detecção de instalação PWA e estado de rede (online/offline)
│   │   └── useTasks.ts           # Lógica das tarefas, filtros, busca e persistência
│   ├── types/
│   │   └── task.ts               # Tipos TypeScript (Task e TaskFilter)
│   ├── App.tsx                   # Componente central
│   ├── index.css                 # Folha de estilos global e variáveis do design system
│   └── main.tsx                  # Ponto de entrada React
├── index.html                    # HTML base com meta tags PWA e Google Fonts
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
├── vite.config.ts                # Configuração do Vite + Plugin PWA + Caminho relativo
└── DOCUMENTACAO.md               # Esta documentação completa
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
   * Barra de busca rápida que surge dinamicamente ao acumular tarefas.
8. **Feedback de Conexão**:
   * Badge automático de "Modo Offline" caso a internet caia.

---

## 💾 Persistência de Dados

* Os dados são armazenados no `localStorage` sob a chave `pastel_todo_tasks_v1`.
* Qualquer inserção, alteração ou exclusão é sincronizada instantaneamente.
* Quando o usuário fecha o navegador, reinicia o computador ou abre o app no dia seguinte, suas tarefas permanecem salvas no próprio dispositivo.

---

## 📱 Configuração PWA (Web & Mobile)

O PWA foi configurado através de `vite-plugin-pwa` no arquivo `vite.config.ts`:

* **`registerType: 'autoUpdate'`**: Atualiza automaticamente a aplicação em segundo plano quando houver novas versões.
* **Manifest (`manifest.webmanifest`)**:
  * `name`: Minhas Tarefas - Checklist Pastel
  * `short_name`: Tarefas
  * `theme_color`: `#F8FAF8`
  * `background_color`: `#F8FAF8`
  * `display`: `standalone` (abre sem a barra de endereços do navegador, parecendo um app nativo)
  * `icons`: Ícones vetoriais SVG escaláveis (192x192 e 512x512) com suporte a *maskable*.
* **Service Worker**: Faz o pré-cache automático de todos os arquivos HTML, JS, CSS e ícones, permitindo funcionamento 100% offline.

---

## 💻 Como Executar Localmente

### Pré-requisitos
* **Node.js** (versão 18 ou superior instalada)

### Passos:
1. Abra o terminal na pasta do projeto:
   ```bash
   cd c:\Users\ruanp\Downloads\INBEC\TODO
   ```
2. Instale as dependências (caso não tenha instalado):
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador:
   `http://localhost:5173/`

5. Para gerar o build de produção:
   ```bash
   npm run build
   ```

---

## 🚀 Como Publicar no GitHub Pages

O projeto já inclui o arquivo `.github/workflows/deploy.yml` pronto e a configuração `base: './'` no `vite.config.ts`. Para colocar no ar:

1. **Crie um repositório no seu GitHub**:
   * Acesse [github.com/new](https://github.com/new) e crie um repositório (exemplo: `todo-app`).

2. **Envie os arquivos do projeto para o GitHub**:
   No terminal, dentro da pasta do projeto, execute:
   ```bash
   git init
   git add .
   git commit -m "feat: checklist pastel com PWA e deploy no Pages"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages**:
   * No seu repositório no GitHub, clique na aba **Settings** (Configurações).
   * No menu lateral esquerdo, clique em **Pages**.
   * Em **Build and deployment > Source**, selecione: **GitHub Actions**.

4. **Pronto!**
   O GitHub Actions executará o build automaticamente e fornecerá o link público (exemplo: `https://seu-usuario.github.io/seu-repositorio/`).

---

## 📲 Como Instalar no Dispositivo

### No Computador (Google Chrome, Microsoft Edge, Brave):
* Ao acessar o app, clique no botão **"Instalar App"** no topo da tela ou no ícone de instalação na barra de endereço do navegador.
* O app será adicionado aos seus programas e poderá ser aberto em uma janela própria.

### No Celular Android (Google Chrome):
* Acesse o link publicado no celular.
* O botão **"Instalar App"** estará disponível, ou toque no menu de 3 pontos do Chrome e selecione **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.

### No iPhone / iPad (Safari):
* Abra o link no Safari.
* Toque no botão de **Compartilhar** (ícone de quadrado com uma seta para cima).
* Role para baixo e selecione **"Adicionar à Tela de Início"**.
* O ícone pastel do app aparecerá na grade de aplicativos do iOS.

---

*Desenvolvido com foco em estética, simplicidade e experiência do usuário.*
