## To-Do List :heavy_check_mark:

### Um projeto Back-End da Labenu

### por Larissa Azevedo, Turma Aragon :woman_technologist:

O 'To-Do List' busca simular um sistema de registros de tarefas e usuários, aprofundando os aprendizados das primeiras semanas do módulo de Back-end.

A documentação pode ser acessada neste link do [Postman](https://documenter.getpostman.com/view/20783829/UzQvrPmJ).

Este sistema, de forma simplificada, permite que o usuário possa gerenciar cadastros de usuários e de tarefas na Lista, sendo possível:

* listar os usuários, através do método **GET** UsersList;

* listar as tarefas com o método **GET** TasksList;

* listar usuário responsável por uma tarefa com **GET** UserResponsibleById;

* editar o apelido (_nickname_) de usuário selecionado, utilizando **PUT** EditNickname;

* editar o status da tarefa selecionada com **PUT** EditTaskStatusById;

* adicionar um usuário responsável por determinada tarefa, com **POST** AddUserResponsibleById;

* e por fim, deletar uma tarefa cadastrada ao acessar o método **DEL** deleteTask.

#### Tecnologias utilizadas: 
* TypeScript;
* Express;
* Knex;
* SQL.

##### Feito com VSCode, Beekeeper-Studio e Postman.
