# LabEcommerce

## Um projeto Back-End da Labenu

### por Larissa Azevedo, Turma Aragon

O 'LabEcommerce' busca simular um e-commerce com os aprendizados do módulo de **Back-end** :computer:

A documentação pode ser acessada neste link do [Postman](https://documenter.getpostman.com/view/20783829/UzXKVyL3) :link:

Este sistema permite, de forma simplificada, que o usuário possa gerenciar contas de usuários e produtos do _ecommerce_, sendo possível:

* cadastrar novo usuário, com o método **POST** createUser :woman:

* listar os usuários, através do método **GET** allUsers :file_folder:
-por padrão, a lista é organizada por ordem crescente de ID.

* cadastrar um novo produto, com o método **POST** createProduct

* listar os produtos através do método **GET** allProducts :file_folder:
-por padrão, a lista é organizada por ordem crescente de preço.

* registrar compra de um usuário através do 'user_id' e 'product_id' com o método **POST** registerPurchase

* e por fim, buscar o hisórico de compras de um determinado usuário através de seu ID com **GET** userPurchase.

#### Tecnologias utilizadas

* TypeScript;
* Express;
* Knex;
* SQL.

##### Feito com VSCode, Beekeeper-Studio e Postman
