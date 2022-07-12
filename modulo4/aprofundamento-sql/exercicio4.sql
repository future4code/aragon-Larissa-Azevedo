USE `aragon-larissa-azevedo`;

--Exercício 4, letra A

ALTER TABLE Projetos
ADD description VARCHAR(255) NOT NULL;

DESCRIBE Projetos;

--Exercício 4, letra B

UPDATE Projetos
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = 1;

UPDATE Projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = 2;

UPDATE Projetos
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = 3;

DESCRIBE Projetos;
SELECT * FROM Projetos;
