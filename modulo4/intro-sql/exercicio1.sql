USE `aragon-larissa-azevedo`;

CREATE TABLE `Funcionários` (
	id INT PRIMARY KEY,
  	nome VARCHAR(255) NOT NULL,
  	email VARCHAR(255) NOT NULL UNIQUE
);