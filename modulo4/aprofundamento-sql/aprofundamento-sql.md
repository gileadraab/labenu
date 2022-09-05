# EXERCÍCIO 001
-- a) ALTER TABLE Actor DROP COLUMN salary;
-- Este comando deleta a coluna salário da tabela "Actor"

-- b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- Este comando altera o campo "gender" para "sex" e delimita o numero de caracteres para no máximo 6

-- c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- Este comando delimita a quantidade de caracteres que o campo "gender" pode possuir

-- d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


# EXERCÍCIO 002
-- a) 
UPDATE Actor
SET 
birth_date = "newYear-newMonth-newDay"
WHERE id = "003";

-- b) 
UPDATE Actor
SET 
name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET 
name = "Juliana Paes"
WHERE id = "005";

-- c)
UPDATE Actor
SET 
name = "New Name", 
salary = 100000, 
birth_date = "1992-03-20",
gender = "male" 
WHERE id = "005";


# EXERCÍCIO 003
-- a)
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";

-- b)
DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000;


# EXERCÍCIO 004
-- a)
SELECT MAX(salary) FROM Actor;

-- b)
SELECT MIN(salary) FROM Actor
WHERE gender = "female";

-- c)
SELECT COUNT(*) FROM Actor 
WHERE gender = "female";

-- d)
SELECT SUM(salary) FROM Actor;


# EXERCÍCIO 005
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- a) Esta query retorna o total de atores da tabela agrupados por gênero

-- b)
SELECT id, name
FROM Actor
ORDER BY name DESC;

-- c)
SELECT * FROM Actor
ORDER BY salary ASC;

-- d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;


# EXERCÍCIO 006
-- a)
ALTER TABLE Movie ADD playing_limit_date DATE;

-- b)
ALTER TABLE Movie CHANGE rating rating FLOAT;

-- c)
UPDATE Movie
SET
playing_limit_date = "2022-08-31"
WHERE id = "001";

UPDATE Movie
SET
playing_limit_date = "2022-08-22"
WHERE id = "002";

-- d)
DELETE FROM Movie WHERE id = "001";

UPDATE Movie
SET
Synopsis = "New synopsis"
WHERE id = "001";

-- A query é aceita porem como resultado nada é alterado ja que não existe uma linha correspondente ao id fornecido


# EXERCÍCIO 007
-- a)  
SELECT COUNT(*) FROM Movie 
WHERE rating > 7.5;

-- b)
SELECT AVG(rating) FROM Movie;

-- c)
SELECT COUNT(*) FROM Movie
WHERE release_Date <= curdate() 
AND playing_limit_date > curdate();

-- d)
SELECT COUNT(*) FROM Movie
WHERE release_Date > curdate();

-- e)
SELECT MAX(rating) FROM Movie;

-- f)
SELECT MIN(rating) FROM Movie;


# EXERCÍCIO 008
-- a) 
SELECT * FROM Movie
ORDER BY title ASC;

-- b) 
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;

-- c)
SELECT * FROM Movie
WHERE release_date < curdate()
ORDER BY release_Date DESC
LIMIT 3;

-- d)
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;