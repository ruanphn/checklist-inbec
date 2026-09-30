# tarefinhas

Aplicativo web de checklist de atividades desenvolvido em **React 19 + TypeScript + Vite**, com persistência local em `localStorage` e publicação automatizada no **GitHub Pages**.

---

## 🚀 Como Iniciar

```bash
# Instalar dependências
npm install

# Iniciar servidor local de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## 📋 Funcionalidades

- **Adicionar Tarefas**: campo de texto com suporte a tecla Enter.
- **Marcar como Concluída / Pendente**: checkbox com atualização de status.
- **Remover Tarefas**: exclusão individual e botão para limpar concluídas.
- **Barra de Progresso**: contador e percentual de atividades finalizadas.
- **Filtros por Aba**: Todas, Pendentes e Concluídas com contadores.
- **Busca**: pesquisa rápida entre as tarefas cadastradas.
- **Persistência**: dados salvos no `localStorage` do navegador.

---

## 🌐 Publicação no GitHub Pages

O projeto conta com esteira de deploy automático via **GitHub Actions** em `.github/workflows/deploy.yml`.

Deploy público disponível em:
**https://ruanphn.github.io/checklist-inbec/**
