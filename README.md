# Kanban Task Board

Este projeto é uma aplicação de quadro Kanban desenvolvida com **React**, **TypeScript** e **Vite**. Ele permite que usuários gerenciem tarefas em um quadro com status configuráveis, como "To Do", "In Progress", "Review" e "Done". Utiliza funcionalidades de arrastar e soltar (drag and drop) para reorganizar tarefas.

## Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── Header/
│   ├── Task/
│   ├── Section/
│   └── ListTasks/
├── hooks/
│   └── useTasks.ts
├── utils/
│   └── taskUtils.ts
├── App.tsx
├── main.tsx
└── index.html

````
Principais Componentes

    Header: Componente do cabeçalho com um botão para salvar alterações.
    Task: Componente para uma tarefa individual, com edição de título e descrição.
    Section: Representa uma seção de status do quadro Kanban (e.g., "To Do", "In Progress").
    ListTasks: Componente principal, gerencia o quadro Kanban e suas seções.
    Hooks: Inclui um hook customizado useTasks para manipular dados de tarefas no localStorage.

Tecnologias Utilizadas

    React: Biblioteca para construção da interface de usuário.
    TypeScript: Para tipagem estática.
    Vite: Ferramenta para criação e desenvolvimento rápido de aplicações React.
    react-dnd: Biblioteca para funcionalidade de drag-and-drop.
    react-hot-toast: Biblioteca para exibir notificações toast.
    CSS: Para estilização.

Funcionalidades

    Adicionar Tarefa: Permite adicionar novas tarefas em qualquer coluna.
    Editar Tarefa: Permite editar o título e a descrição de uma tarefa.
    Remover Tarefa: Permite remover uma tarefa.
    Drag and Drop: Move tarefas entre colunas usando arrastar e soltar.
    Salvar Estado: Salva automaticamente as tarefas no localStorage.

Instalação e Uso
Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados.
Passo a Passo

    Clone o Repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as Dependências:

npm install

Inicie o Servidor de Desenvolvimento:

    npm run dev

    Acesse a Aplicação:

    Abra o navegador e vá para http://localhost:3000.

## Configuração de Alias

Este projeto usa um alias `@` para importar módulos. Verifique se seu `vite.config.js` e `tsconfig.json` estão configurados corretamente:

### `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

```
## tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Após fazer as alterações, reinicie o servidor com npm run dev.

Este projeto está licenciado sob a licença MIT.