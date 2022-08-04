
# Cookenu

## Um projeto Back-End da Labenu

### por Larissa Azevedo, Turma Aragon

Dando continuidade aos aprendizados do módulo de **Back-end**, o projeto _Cookenu_ busca simular uma rede social de cadastro de usuários e receitas.

O deploy foi feito no Heroku (<https://>) e testado no Postman.

A documentação pode ser acessada neste link do [Postman](https:// ) :link:

Também há um documento requests.rest que poderá ser acessado diretamente do VSCode, caso o usuário possua extensão "REST Client" instalada.

A instalação é feita com "npm -install" e o projeto ainda conta com os _scripts_ 'migrations' para manipulação de banco de dados e 'dev' para otimizar os testes de endpoint.

Este sistema permite, de forma simplificada, que a pessoa usuária possa cadastrar, acessar e manipular cadastros de usuários e receitas, dependendo de seu 'role': do tipo "ADMIN" ou "NORMAL",
sendo possível:

Quanto às **receitas**:

* buscar todas as receitas cadastradas com **GET** allRecipes;
  * Caso a pessoa usuária queira busca por nome, é só digitar na 'query' que será a retornada a lista da busca, se não houver busca por nome específico o sistema retornará lista com todas as receitas cadastradas;

* cadastrar nova turma, com o método **POST** createRecipe;

* editar a receita com **PUT** editRecipe
  * O usuário "ADMIN" pode alterar qualquer receita cadastrada e o usuário "NORMAL" pode editar apenas receitas cadastradas com seu id;

* deletar a receita com **DELETE** deleteRecipe;
  * O usuário "ADMIN" pode deletar qualquer receita cadastrada e o usuário "NORMAL" pode deletar apenas receitas cadastradas com seu id

Quanto às pessoas **usuárias**:

* cadastrar nova pessoa usuária, com o método **POST** createUser;

* buscar todas as pessoas usuárias cadastradas com **GET** allUsers, sendo que apenas pessoa usuária do tipo "ADMIN" pode acessar este enpoint;

* fazer seu login para cadastrar receitas com **POST** login;

* deletar cadastro de pessoa usuária com o método **DELETE** deleteUser;
  * apenas pessoa usuária do tipo "ADMIN" pode acessar este endpoint;


#### Tecnologias utilizadas

* TypeScript;
* Express;
* Knex;
* SQL.

##### Feito com VSCode, Beekeeper-Studio e Postman
