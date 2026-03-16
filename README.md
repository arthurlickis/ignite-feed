# 🔥 Ignite Feed

Uma aplicação de feed social desenvolvida durante o aprendizado de React com a Rocketseat, onde explorei os fundamentos essenciais do ecossistema React moderno.

---

## 📸 Sobre o Projeto

O **Ignite Feed** é um feed de publicações estilo rede social, onde usuários podem visualizar posts, deixar comentários, curtir (aplaudir) e deletar comentários. O projeto foi construído com foco em aprender os pilares do React de forma prática.

---

## 🧠 Conceitos Praticados

- ⚛️ **Estrutura do React** — entendendo como o React organiza e renderiza a interface
- 🧩 **Componentes** — divisão da UI em peças reutilizáveis e independentes
- 📨 **Props** — comunicação entre componentes pai e filho
- 🎨 **CSS Modules** — estilização com escopo isolado por componente
- 🔁 **`.map()` em arrays** — renderização de listas dinâmicas a partir de dados
- 🔒 **Closures** — uso de funções dentro de funções para encapsular estado e lógica
- 🧱 **Imutabilidade** — atualização de estado sem mutar diretamente os valores originais
- 🪝 **useState** — gerenciamento de estado local nos componentes

---

## 🏗️ Estrutura de Componentes

```
src/
├── components/
│   ├── Avatar.tsx       # Imagem de perfil com ou sem borda
│   ├── Comment.tsx      # Comentário com like e delete
│   ├── Header.tsx       # Cabeçalho da aplicação
│   ├── Post.tsx         # Post completo com formulário de comentário
│   └── Sidebar.tsx      # Painel lateral com perfil do usuário
├── App.tsx              # Componente raiz com lista de posts
├── main.tsx             # Entry point da aplicação
└── global.css           # Estilos globais
```

---

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [date-fns](https://date-fns.org/) — formatação de datas
- [react-icons](https://react-icons.github.io/react-icons/) — ícones

---

## ▶️ Como Rodar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ignite-feed.git

# Acesse a pasta
cd ignite-feed

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

---

## 📚 Aprendizados Principais

> "Aprender React é aprender a pensar em componentes."

Durante o desenvolvimento deste projeto, entendi na prática como o React funciona: a importância de tratar o estado de forma imutável, como as props criam um fluxo de dados previsível de cima para baixo, e como closures são usadas naturalmente dentro dos handlers de eventos.

---

Made with 💚 during **Ignite** — Rocketseat
