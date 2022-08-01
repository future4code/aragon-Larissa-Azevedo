# LabenuSystem :computer:

## Um projeto Back-End da Labenu

### por Larissa Azevedo, Turma Aragon

Dando continuidade aos aprendizados do módulo de **Back-end**, o projeto _LabenuSystem_ busca simular um sistema de registros educacionais :computer:

O deploy foi feito no Heroku (<https://labenusystem-larissa-aragon.herokuapp.com/>) e testado no Postman.

A documentação pode ser acessada neste link do [Postman](https://documenter.getpostman.com/view/20783829/UzdzSQQ9) :link:
Também há um documento requests.rest que poderá ser acessada diretamente do VSCode, caso o usuário poussua extensão "REST Client" instalada.

A instalação é feita com "npm -install" e o projeto ainda conta com os _scripts_ 'migrations' para manipulação de banco de dados e 'dev' para otimizar os testes de endpoint .

Este sistema permite, de forma simplificada, que o usuário possa acessar e manipular cadastros de estudantes e turmas,
sendo possível:

Quanto às **turmas**:

* buscar todas as turmas cadastradas com **GET** allClassrooms;

* buscar todas as turmas cadastradas e ativas com **GET** activeClassrooms;

* cadastrar nova turma, com o método **POST** createClassroom;

* alterar o módulo atual da turma com **PUT** updateModule;

Quanto às pessoas **estudantes**:

* cadastrar nova pessoa estudante, com o método **POST** createStudent;

* buscar todas as turmas cadastradas com **GET** allClassrooms;

* buscar pessoas estudantes pelo nome com **GET** studentsByName. Caso nenhum nome seja digitado, será retornada a lista com todos os cadastros;

* editar a turma que a pessoa estudante está cadastrada usando o método **PUT** editStudentClassroom

* e por fim, listar os estudantes por turma com **GET** studenteByClassroom. 🧾

#### Tecnologias utilizadas

* TypeScript;
* Express;
* Knex;
* SQL.

##### Feito com VSCode, Beekeeper-Studio e Postman