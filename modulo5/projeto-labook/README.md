# Labook :computer: :woman:

## Um projeto Backend da Labenu

### por Larissa Azevedo, Turma Aragon

Dando continuidade aos aprendizados do módulo de **Back-end**, o projeto _Labook_ busca simular uma rede social ao estilo "Facebook".

O deploy foi feito no Heroku (<https://labook-larissa-aragon.herokuapp.com/>) e testado no Postman.

A documentação pode ser acessada neste link do [Postman](https://documenter.getpostman.com/view/20783829/VUjSG49J) :link:

Também há um documento requests.rest que poderá ser acessado diretamente do VSCode, caso o usuário possua extensão "REST Client" instalada.

A instalação é feita com "npm -install" e o projeto ainda conta com os _scripts_ 'migrations' para manipulação de banco de dados e 'dev' para otimizar os testes de endpoint.

Este sistema permite, de forma simplificada, que a pessoa usuária possa se cadastrar, fazer e deletar posts, dependendo de seu 'role': do tipo "ADMIN" ou "NORMAL" e curtir posts e descurti-los, sendo possível:

* cadastrar nova pessoa usuária, com o método **POST** signup;

* fazer seu login para postar e visualizar os posts com **POST** login;
  * Ao fazer login será gerado um token, guarde-o para acessar os endpoints protegidos. Será necessário informar o token no campo "Authorization" dos 'headers' em alguns endpoints, conforme documentação.

* criar novo post, com o método **POST** createPost;

* buscar todos os posts cadastrados com **GET** allPosts;
  
* curtir posts com **POST** likePost;

* descurtir posts com **POST** dislikePost;

* deletar posts de sua autoria com o método **DELETE** deletePost;
  * apenas pessoa usuária do tipo "ADMIN" pode deletar posts de outras pessoas usuárias;

**Importante**: o usuário cadastrado "astrodev" possui o role 'admin', feito o login com esse usuário será possível testar os endpoints com funcionalidade restrita aos admins.

<br>

#### Tecnologias utilizadas

<img align="left"  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
<img align="left"  src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/> e knex.js

<br><br>

##### Feito com VSCode, Beekeeper-Studio e Postman
