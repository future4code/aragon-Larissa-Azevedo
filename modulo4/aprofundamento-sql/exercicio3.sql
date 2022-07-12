USE `aragon-larissa-azevedo`

-- Exercício 3, letra A

ALTER TABLE Projetos
DROP COLUMN title;

DESCRIBE Projetos;

-- Exercício 3, letra B

ALTER TABLE Projetos
CHANGE date dueDate DATE NOT NULL;

DESCRIBE Projetos;

-- Exercício 3, letra C

ALTER TABLE Funcionários
MODIFY email UNIQUE; -- dúvida
DESCRIBE Funcionários;