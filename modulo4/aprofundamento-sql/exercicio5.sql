USE `aragon-larissa-azevedo`;

--Exercício 5, letra A

SELECT * FROM Projetos
ORDER BY dueDate DESC;

-- Exercício 5, letra B

SELECT name, dueDate FROM Projetos
GROUP BY name, dueDate
ORDER BY dueDate ASC
LIMIT 2;