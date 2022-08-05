
# Cookenu :bento:

## Um projeto Backend da Labenu

### por Larissa Azevedo, Turma Aragon

Dando continuidade aos aprendizados do módulo de **Back-end**, o projeto _Cookenu_ busca simular uma rede social de cadastro de usuários e receitas.

O deploy foi feito no Heroku (<https://cookenu-larissa-aragon.herokuapp.com/>) e testado no Postman.

A documentação pode ser acessada neste link do [Postman](https://documenter.getpostman.com/view/20783829/VUjLM7Ju ) :link:

Também há um documento requests.rest que poderá ser acessado diretamente do VSCode, caso o usuário possua extensão "REST Client" instalada.

A instalação é feita com "npm -install" e o projeto ainda conta com os _scripts_ 'migrations' para manipulação de banco de dados e 'dev' para otimizar os testes de endpoint.

Este sistema permite, de forma simplificada, que a pessoa usuária possa cadastrar, acessar e manipular cadastros de usuários e receitas, dependendo de seu 'role': do tipo "ADMIN" ou "NORMAL", sendo possível:

Quanto às **receitas** :page_facing_up: :label: :bookmark_tabs:

* buscar todas as receitas cadastradas com **GET** allRecipes;
  * Caso a pessoa usuária queira busca por nome, é só digitar na 'query' que será a retornada a lista da busca, se não houver busca por nome específico o sistema retornará lista com todas as receitas cadastradas;

* cadastrar nova receita, com o método **POST** createRecipe;

* editar a receita com **PUT** editRecipe
  * O usuário "ADMIN" pode alterar qualquer receita cadastrada e o usuário "NORMAL" pode editar apenas receitas cadastradas com seu id;

* deletar a receita com **DELETE** deleteRecipe;
  * O usuário "ADMIN" pode deletar qualquer receita cadastrada e o usuário "NORMAL" pode deletar apenas receitas cadastradas com seu id

Quanto às pessoas **usuárias** :cook: :man_cook: :woman_cook:

* cadastrar nova pessoa usuária, com o método **POST** createUser;

* buscar todas as pessoas usuárias cadastradas com **GET** allUsers, sendo que apenas pessoa usuária do tipo "ADMIN" pode acessar este enpoint;

* fazer seu login para cadastrar receitas com **POST** login;
  * Ao fazer login será gerado um token, guarde-o para acessar os endpoints protegidos. Será necessário informar o token no campo "Authorization" dos 'headers' em alguns endpoints, conforme documentação.

* deletar cadastro de pessoa usuária com o método **DELETE** deleteUser;
  * apenas pessoa usuária do tipo "ADMIN" pode acessar este endpoint;
  
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
