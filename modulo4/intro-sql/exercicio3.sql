USE `aragon-larissa-azevedo`;

-- Exercício 3, letra A 

SELECT * FROM `Funcionários`;

-- Exercício 3, letra B

SELECT id AS identifier, nome FROM `Funcionários`;

-- Exercício 3, letra C

SELECT id, nome FROM `Funcionários` WHERE id = 3 ;

-- Exercício 3, letra D

SELECT nome FROM `Funcionários` WHERE nome LIKE "%a%";

-- Exercício 3, letra E

SELECT * FROM `Funcionários` WHERE nome NOT LIKE "%r%" AND email LIKE "%u%";








