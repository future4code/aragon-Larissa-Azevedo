USE `aragon-larissa-azevedo`;

CREATE TABLE `Projetos` (
	 id VARCHAR(255) PRIMARY KEY,
  	 name VARCHAR(255) NOT NULL UNIQUE,
  	 title VARCHAR(255) NOT NULL,
 	 date DATE NOT NULL
);