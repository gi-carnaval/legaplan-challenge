# Tasks Manager

![Next.js](https://img.shields.io/badge/Next.js-14.2.12-blue) ![SCSS](https://img.shields.io/badge/SCSS-1.79.1-ff69b4)

Um aplicativo simples para gerenciar suas tarefas diárias, criado com **Next.js** e **SCSS**. O projeto permite criar, visualizar, marcar como concluídas e excluir tarefas de forma prática.

## Índice

- [Visão Geral](#visão-geral)
- [Recursos](#recursos)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Como Usar](#como-usar)

## Visão Geral

Este projeto foi desenvolvido para demonstrar o uso de **Next.js** com o novo App Router, integração com **SCSS** e uso de armazenamento local (localStorage ou outra abordagem). Ele fornece uma interface simples para gerenciar suas tarefas diárias, permitindo adicionar, marcar como concluídas e excluir tarefas.

## Recursos

- **Adicionar Tarefa:** Crie novas tarefas com título.
- **Marcar como Concluída:** Marque tarefas como concluídas usando a checkbox.
- **Excluir Tarefa:** Exclua tarefas indesejadas com o botão de exclusão.
- **Armazenamento Local:** Armazena as tarefas localmente (localStorage).
- **Interface Responsiva:** Compatível com dispositivos móveis e desktop.

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Next.js** – Framework React para aplicações server-side rendering (SSR) e estáticas.
- **React.js** – Biblioteca para a construção de interfaces de usuário.
- **SCSS** – CSS pré-processado para estilização eficiente.
- **Radix UI** – Componentes acessíveis e customizáveis.
- **TypeScript** – Suporte a tipagem estática.

## Instalação

### Pré-requisitos

Antes de começar, você precisará ter o **Node.js** instalado na sua máquina. Você pode instalar o Node.js [aqui](https://nodejs.org).

### Passos para instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/gi-carnaval/legaplan-challenge.git

2. Navegue até o diretório do projeto:

   ```bash
   cd legaplan-challenge

3. Instale as dependências:

   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev

5. Abra o navegador em http://localhost:3000 para visualizar o aplicativo.

## Como Usar

- Adicionar nova tarefa: Use o botão "Nova Tarefa" para criar uma nova tarefa.
- Marcar como concluída: Clique na checkbox ao lado de cada tarefa para marcá-la como concluída.
- Excluir tarefa: Clique no ícone de lixeira para excluir uma tarefa.
- Persistência: Suas tarefas serão armazenadas localmente e carregadas automaticamente na próxima visita.