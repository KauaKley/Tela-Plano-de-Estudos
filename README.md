# Tela do meu Plano de Estudos

Aplicação React simples para organizar atividades de estudo. Trabalho de React.js.

## Executar no GitHub Codespaces

1. Crie um repositório no GitHub e envie os arquivos deste projeto.
2. No repositório, clique em **Code > Codespaces > Create codespace on main**.
3. Entre na pasta certa para rodar usando o: cd controle-estudos
4. Abra o terminal do Codespaces e execute:

```bash
npm install
npm run dev
```

4. Na aba **Ports**, abra a porta 5173 no navegador (ou use a notificação do Codespaces).

## Componentes 

- `Accordion.jsx`: dúvidas frequentes com abertura e fechamento.
- `Pagination.jsx`: navegação por páginas de atividades.
- `ProgressBar.jsx`: percentual de atividades concluídas.
- `Tabs.jsx`: materiais separados por assunto.
- `Dropdown.jsx`: filtro de categorias, com fechamento ao clicar fora.
- `Toast.jsx`: confirmação temporária das ações.

`App.jsx` organiza todos os componentes e controla o filtro, a paginação e o formulário com `useState`. O arquivo `AtividadesContext.jsx` usa a **Context API** para compartilhar a lista de atividades e as funções de adicionar/concluir. O `ProgressBar.jsx` lê diretamente esse contexto e atualiza o percentual quando uma tarefa muda, sem receber a lista por props. Dados fictícios, sem banco de dados. O estado é reiniciado ao recarregar.

## Context API

O **Gerenciamento de Estado Global com Context API**.

- `AtividadesContext.jsx` cria o contexto, guarda a lista em `useState` e oferece funções para modificar as atividades.
- `main.jsx` envolve o aplicativo com `AtividadesProvider`, permitindo que os componentes acessem o mesmo estado.
- `App.jsx` usa `useAtividades()` para listar, concluir e adicionar tarefas.
- `ProgressBar.jsx` também usa `useAtividades()` para calcular o progresso.
