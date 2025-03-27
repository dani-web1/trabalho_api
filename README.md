Aqui está uma sugestão de documentação em formato de `README.md` para o seu projeto:

```markdown
# Rick and Morty API Server

Este projeto é uma API simples construída com **Node.js** que consome dados da API oficial do **Rick and Morty**. Ele retorna informações sobre os personagens do show, como nome, status, espécie, tipo, gênero e imagem.

## Tecnologias Usadas

- **Node.js**: Plataforma de execução JavaScript no lado do servidor.
- **Express**: Framework web minimalista para Node.js, utilizado para criar a API.
- **Axios**: Cliente HTTP para realizar requisições para a API externa do Rick and Morty.

## Funcionalidade

Este servidor oferece um endpoint (`/personagens`) que retorna uma lista de personagens do **Rick and Morty** com as seguintes informações:

- **ID**: Identificador único do personagem.
- **Nome**: Nome do personagem.
- **Status**: Status atual do personagem (ex: "Vivo", "Morto").
- **Espécie**: Espécie do personagem.
- **Tipo**: Tipo do personagem (alguns personagens possuem tipos específicos).
- **Gênero**: Gênero do personagem.
- **Imagem**: URL da imagem do personagem.

A API realiza a consulta à API oficial do Rick and Morty e retorna os dados no formato JSON.

## Como Instalar

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
   Se você ainda não tem o repositório, clone-o para a sua máquina local:

   ```bash
   git clone https://github.com/<seu-usuario>/<nome-do-repositorio>.git
   ```

2. **Instale as dependências**:
   Navegue até o diretório do projeto e instale as dependências:

   ```bash
   cd <nome-do-repositorio>
   npm install
   ```

3. **Inicie o servidor**:
   Para iniciar o servidor, execute o seguinte comando:

   ```bash
   node server.js
   ```

   O servidor começará a rodar na porta **8000** (ou qualquer outra porta especificada no código).

## Como Usar

1. Após iniciar o servidor, você pode acessar a API localmente no seguinte endereço:

   ```
   http://localhost:8000/personagens
   ```

2. Para obter a lista de personagens, faça uma requisição GET para o endpoint `/personagens` usando ferramentas como **curl**, **Postman**, ou diretamente no navegador.

   Exemplo usando **curl**:

   ```bash
   curl http://localhost:8000/personagens
   ```

   A resposta será um JSON com os dados formatados dos personagens, como no exemplo abaixo:

   ```json
   [
     {
       "id": 1,
       "nome": "Rick Sanchez",
       "status": "Alive",
       "especie": "Human",
       "tipo": "",
       "genero": "Male",
       "imagem": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
     },
     {
       "id": 2,
       "nome": "Morty Smith",
       "status": "Alive",
       "especie": "Human",
       "tipo": "",
       "genero": "Male",
       "imagem": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
     }
   ]
   ```
