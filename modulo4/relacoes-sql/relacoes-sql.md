# EXERCÍCIO 001

-- a) -- Chave estrangeira é um valor que faz referencia a uma chave primaria de outra tabela e permite que duas tabelas se relacionem

-- b)
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Bom filme",
    7.5,
    "002"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
    "Filme mediano",
    6.0,
    "003"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"003",
    "Uma obra prima do cinema nacional",
    9.2,
    "004"
);

-- c)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"004",
    "Filme maravilhoso, pena que nao existe",
    10,
    "001"
);
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-gilead-raab`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- O erro se da por nao ser possivel identificar o elemento a qual a chave estrangeira faz referencia

-- d)
ALTER TABLE Movie DROP COLUMN rating;

-- e)
DELETE FROM Movie
WHERE
id = 002;
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-gilead-raab`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- Não é possivel deletar uma linha que se relaciona a outra tabela a partir de uma chave estrangeira


# EXERCÍCIO 002

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a) A tabela relaciona os valores de algum filme da tabela de filmes (Movie) à valores da tabela de atores (Actor)

-- b) 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "005"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "007"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "008"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "008"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "009"
);

-- c)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"010",
    "009"
);
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-gilead-raab`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- O erro se da por nao ser possivel identificar o elemento a qual a chave estrangeira faz referencia

-- d)
DELETE FROM Actor
WHERE
id = 008;
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-gilead-raab`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- Não é possivel deletar uma linha que se relaciona a outra tabela a partir de uma chave estrangeira


# EXERCÍCIO 003

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- a)
-- Retorna todos os filmes presentes na tabela Movie relacionando-os as suas respectivas avaliações a partir das suas IDs

-- b)
SELECT Movie.id, title, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;


