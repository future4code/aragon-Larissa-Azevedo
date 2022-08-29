# Rodada de Cases

## Um projeto para conclusão da Labenu

### por Larissa Azevedo, Turma Aragon

Com a reta final do curso e para consolidar os aprendizados do módulo **Backend**, a resolução do [*case legado* da Amaro](https://github.com/amaroteam/back-end-challenge) busca simular um site de cadastro e consulta de produtos.

O deploy foi feito no Heroku e os endpoints foram testados no Postman.

A documentação pode ser acessada neste link do [Postman](https://case1-larissa-aragon.herokuapp.com/products/searchName?search=capuz) :link:

Também há um documento requests.rest que poderá ser acessado diretamente do VSCode, caso o usuário possua extensão "REST Client" instalada.

A instalação é feita com "npm -install" e o projeto ainda conta com os _scripts_ 'migrations' para manipulação de banco de dados e 'dev' para otimizar os testes de endpoint.

Este sistema permite, de forma simplificada, que a pessoa usuária possa se cadastrar e de posse de uma lista de produtos, possa cadastr-los, visualizar a lista de produtos e buscá-los por id, nome ou tags, tudo dependendo de seu 'role': do tipo "ADMIN" ou "NORMAL" , sendo possível:

* cadastrar nova pessoa usuária, com o método **POST** signup;

* fazer seu login para com **POST** login;
  * Ao fazer login será gerado um token, guarde-o para acessar os endpoints protegidos. Será necessário informar o token no campo "Authorization" dos 'headers' em alguns endpoints, conforme documentação.

* cadastrar novo produto, com o método **POST** addProduct;
  * funcionalidade restrita à pessoa usuária do tipo "ADMIN".

* buscar todos os produtos com **GET** allProducts, independente de login;

  * buscar todos os produtos por Id com **GET** productSearchById;
  * buscar todos os produtos por Nome com **GET** productSearchByName;
  * buscar todos os produtos por Tag com **GET** productSearchByTag.



**Importante**: o usuário cadastrado "astrodev" possui o role 'admin', feito o login com esse usuário será possível testar os endpoints com funcionalidade restrita aos admins.

<br>

#### Tecnologias utilizadas

<img align="left"  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Knex.js-d34e36?style=for-the-badge"/>
<img align="left"  src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Jest-30cb2d?style=for-the-badge&logo=jest&logoColor=white"/>


<br><br>

Foram realizados **testes unitários** neste projeto com o _framework_ Jest.
Abaixo segue a imagem com os dados da cobertura dos testes.
<br><br>
![image](https://user-images.githubusercontent.com/90583823/187282695-35cab5fe-6975-456f-8a01-602c6efe527a.png)


##### Feito com VSCode, Beekeeper-Studio e Postman
