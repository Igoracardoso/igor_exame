# Sistema de Cadastro de Explorações Espaciais

## Descrição

Este projeto é um backend para gerenciar um sistema de cadastro de missões de explorações espaciais. O sistema permite registrar novas missões, listar as missões existentes e excluir missões por ID.

## Como rodar o projeto localmente

### Pré-requisitos

- Node.js
- npm ou yarn

### Passos

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd space-exploration

2. Instale as dependências:

    ```bash
    Copiar código
    npm install

3. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

    ```makefile
    Copiar código
    JWT_SECRET_KEY=your-secret-key
    PORT=3000

4. Rode o servidor:

    ```bash
    Copiar código
    npx ts-node src/app.ts