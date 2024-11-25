# NODE.JS WITH MySQL ##

## Descrição (Description) ##

**Português**: Neste repositório é mostrado como fazer a integração do Node.js com o MySQL. Apresento um simples exemplo utilizando rotas dinâmicas via protocolo http, onde é possível realizar o controle de uma biblioteca fictícia, podendo assim, cadastrar, atualizar e consultar os livros. O foco princípal deste projeto é apresentar os conceitos do desenvolvimento backend, portanto não foquei tanto no front-end fazendo apenas o necessário para que possamos ter uma melhor abstração de como o beckend funciona na prática.

**English**: This repository shows how to integrate Node.js with MySQL. I present a simple example using dynamic routes via the http protocol, where it is possible to control a fictitious library, thus being able to register, update and consult the books. The main focus of this project is to present the concepts of backend development, so I didn't focus so much on the front-end, doing only what was necessary so that we can have a better abstraction of how backend works in practice.



## Instalação (Installation) ##

Certifique-se de ter o Node.js instalado em sua máquina. Clone o repositório e instale as dependências com o comando abaixo:

Make sure you have Node.js installed on your machine. Clone the repository and install the dependencies with the command below:

```bash
git clone https://github.com/CaduConrado/Node-with-MySQL
cd seu_repositorio
npm install
```

## Como Usar (How to Use) ##

Para iniciar o sistema, execute o seguinte comando no terminal: 

To start the system, run the following command in the terminal:

```bash
npm start
```

**Português**: Com isso você receberá uma mensagem no terminal informando que o servidor está rodando. Podendo acessar a aplicação via navegador através da porta setado no código.

**English**: With this you will receive a message on the terminal informing you that the server is running. You can access the application via browser through the port set in the code.

## Funcionalidades (Features)

## 1. Cadastrar / Cadastar ## Account

**Descrição**: Permite o usuário cadastrar um livro, informando o seu **Título**, **Autor**, **Número de Páginas** e **Editora**. 

**Description**: Allows the user to register a book, informing its **Title**, **Author**, **Number of Pages** and **Publisher**.

## Exemplo (Example) ##

```plaintext

```

## 2.Consultar Exibir Livros / Show Books ##

**Descrição**: Exibe todos os livros presentes na biblioteca.

**Description**: Display the current balance of the specified account.

## Exemplo (Example):##

```plaintext

```

## 3. Consultar Livro pelo Id / Show Book by Id ##

**Descrição**: O usário pode consultar as informações do livro através do seu Id.

**Description**: The user can consult the book's information using their ID.
## Exemplo (Example): ##

```plaintext

```

## 4. Editar Livros / Edit Books ##

**Descrição**: O usuário pode editar as informações do livro.

**Description**: User can edit book information.

## Exemplo (Example): ##

```plaintext

```

## 5. Excluir Livro / Delete Book ##

**Descrição**: O usuário pode deletar o livro da biblioteca.

**Description**: The user can delete the book from the library.

## Exemplo (Example): ##

```plaintext

```

## Estrutura do Projeto (Project Structure) ##

- **index.js**: Contém o código principal do sistema.
- **connection_pool/**: Nesta pasta criei o exemplo utilizando uma técnica chamada Connection Pool, que se trata de uma forma a qual podemos gerenciar como serão feitas as conexões com o banco de dados, deixando assim as conexões mais eficientes, pois com o Connection Pool mantém um grupo de conexões abertas em cache, evitando dessa forma que toda vez seja necessário abrir e fechar uma conexão.
- **mysql_nodejs**: Nesta pasta criei o exemplo sem utilizar a técnica de Connection Pool, aqui eu realizo a conexão com o banco de forma padrão.

## Dependências (Dependencies)

- **Express**: Utilizado para criação das rotas.
- **Express-Handlebars**: Utilizado para a criação de layouts reutilizáveis no frontend.
- **MySQL**: Utilizado para utilizar o banco de dados.
- **Nodemon**: Utilizado para otimizar o desenvolvimento.

## Contribuição (Contribution) ##

**Português**: Sinta-se à vontade para contribuir com o projeto, sugerindo melhorias ou relatando problemas.

**English**: Feel free to contribute to the project by suggesting improvements or reporting issues.