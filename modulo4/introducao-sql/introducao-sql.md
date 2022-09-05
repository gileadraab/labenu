#-- EXERCÍCIO 001

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
-- a)
-- VARCHAR(255) - define o tipo como texto e limita a quantidade de caracteres em 255,
-- PRIMARY KEY - estipula um identificador unico para a tabela
-- NOT NULL - estipula a necessidade de atribuir um valor a propriedade

-- b)
SHOW DATABASES;
-- exibe as databases que o usuario tem acesso

SHOW TABLES;
-- exibe as tabelas disponiveis na database

DESCRIBE Actor;
-- Exibe as informações referentes a uma determinada tabela


#-- EXERCÍCIO 002
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- b)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Outro ator",
  1200000,
  "1963-09-23", 
  "male"
);
-- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
-- O erro se da por tentar criar uma nova entrada com o mesmo valor de chave previamente informado, que deve ser única.

-- c)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- Error Code: 1136. Column count doesn't match value count at row 1
-- o erro se da pelo fato das quantidades de colunas de valores fornecidas ser maior do que a quantidade de linhas informadas

-- d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- Error Code: 1364. Field 'name' doesn't have a default value
-- O erra se da por nao ser informado um valor correspondente ao campo "name"

-- e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- O erro se da por ser informado um valor numérico a um campo que esperava uma data

-- f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);


#-- EXERCÍCIO 003
-- a)
SELECT * FROM Actor WHERE gender = "female";

-- b)
SELECT salary from Actor  WHERE name = "Tony Ramos";

-- c)
SELECT * from Actor  WHERE gender = "invalid";

-- d)
SELECT id, name, salary from Actor Where salary <= 5000000;

-- e)
SELECT id, nome from Actor WHERE id = "002";
-- O erro se da pela query ser feita buscando por "nome" sendo que o campo se chama "name"


#-- EXERCÍCIO 004
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- b)
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

-- c)
SELECT * FROM Actor
WHERE (name LIKE "%G%");

-- d) 
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;


#-- EXERCÍCIO 005
-- a)
CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
	"Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
	7
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
	10
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-02-11",
	8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
	"O Auto da Compadecida",
	"A aventura segue duas pobres almas (Matheus Nachtergaele, Selton Mello) enquanto encontram um emprego, tramam para ganhar uma garota e enfrentam bandidos saqueadores.",
	"200-09-10",
	9
);


#-- EXERCÍCIO 006
-- a)
SELECT id, title, rating FROM Movie 
WHERE id = "004";

-- b)
SELECT * FROM Movie 
WHERE title = "Dona Flor e Seus Dois Maridos";

-- c)
SELECT id, title, synopsis FROM Movie 
WHERE rating >= 7;


#-- EXERCÍCIO 007
-- a) 
SELECT * FROM Movie 
WHERE title LIKE "%vida%";

-- b) 
SELECT * FROM Movie 
WHERE (title LIKE "%auto%" OR synopsis LIKE "%auto%");

-- c)
SELECT * FROM MOVIE 
WHERE release_date < "2022-08-22";

-- d)
SELECT * FROM MOVIE
WHERE release_date < "2022-08-22" AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
