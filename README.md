# Gerenciador de Tarefas em Angular

Este projeto é uma aplicação Angular que simula o cadastro e a listagem de tarefas utilizando gerenciamento de estado em memória através de um Service e navegação via rotas.

## 🛠️ Requisitos do Sistema

### 1. Interface e Service
*   **Interface `Tarefa`**: Deve definir a estrutura de uma tarefa (ex: id, título, descrição, prazo, status de conclusão, status de remoção, etc.).
*   **`TarefaService`**: Responsável por armazenar e gerenciar as tarefas em memória. Deve conter os seguintes métodos:
    *   `listar()`
    *   `adicionar()`
    *   `remover()`
    *   `prazoDeConclusao()`
    *   `marcarConcluida()`

### 2. Componentes

#### 📝 CadastrarTarefa
*   Exibe um formulário para cadastrar uma nova tarefa.
*   Ao clicar em **Cadastrar**, aciona o método `adicionar()` do `TarefaService`.
*   Contém um link (`routerLink`) para navegar até a tela de listagem.

#### 📋 ListaTarefas
*   Exibe a lista de todas as tarefas cadastradas.
*   Mostra a mensagem **"Nenhuma tarefa cadastrada"** caso a lista esteja vazia.
*   **Botão Remover**: Posicionado ao lado de cada tarefa, na cor **laranja**.
*   **Botão Concluir**: Posicionado ao lado de cada tarefa, na cor **verde**.
*   Contém um link (`routerLink`) para voltar à tela de cadastro.
*   **Painel de Indicadores**: Exibe um contador em tempo real com o total de tarefas, tarefas concluídas e tarefas pendentes.

## ⚙️ Funcionamento Esperado

*   **Cadastro**: Ao ser cadastrada, a tarefa deve aparecer na lista com a cor **azul**.
*   **Remoção**: Ao clicar em "Remover", a tarefa não desaparece da tela; o seu estilo visual deve mudar para a cor **vermelha**.
*   **Conclusão**: Ao clicar em "Concluir", o status da tarefa é alterado e o seu texto deve ficar **sublinhado**.
*   **Persistência**: Os dados devem persistir na memória do navegador enquanto a aplicação estiver aberta.
*   **Navegação**: A transição entre as telas de cadastro e listagem deve ser feita exclusivamente via `routerLink`.
