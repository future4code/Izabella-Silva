~~~ sql
 -- 1)
 -- A) Referencia a chave primária de outra tablea
 -- B)
 CREATE TABLE Rating(
 id VARCHAR(255) PRIMARY KEY,
 comment TEXT NOT NULL,
 rate FLOAT NOT NULL,
 movie_id VARCHAR(255),
 FOREIGN KEY (movie_id) REFERENCES movies(id)
 );
 
 INSERT INTO Rating
 VALUES(
 "001",
 "Muito Bom",
 7,
 "001"
 );
 
 INSERT INTO Rating
 VALUES(
 "002",
 "Excelente",
 10,
 "002"
 );
 -- C) Não foi possível adicionar a Foreign Key porque não tem a primay key correspondente
 INSERT INTO Rating
 VALUES(
 "003",
 "OK",
 5,
 "003"
 )

 -- D)
ALTER TABLE movies DROP COLUMN avaliacao;

-- E) NÃO DEIXOU DELETAR PORQUE TEM UMA FOREIGN KEY REFERENCIANDO A PRIMARY KEY
DELETE FROM movies WHERE id = "002";


-- 02)
 -- A) Essa tabela relaciona actor com movies e movies com actor através da foreing key
 -- B)
 CREATE TABLE MovieCast(
	movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
 );
 
 INSERT INTO MovieCast 
 VALUES(
 "001",
 "002"
 );
 
 INSERT INTO MovieCast
 VALUES(
 "001",
 "003"
 );
 
 INSERT INTO MovieCast
 VALUES(
 "001",
 "1629339843279"
 );
 
 INSERT INTO MovieCast
 VALUES(
 "002",
 "002"
 );
 
 INSERT INTO MovieCast
 VALUES(
 "002",
 "003"
 );
 
 INSERT INTO MovieCast
 VALUE(
 "002",
 "1629339843279"
 );

  -- C) não existe chave primária indicada para refernciar a chave estrangeira
 INSERT INTO MovieCast
 VALUES(
 "001",
 "0056"
 );

  -- D) não é possível apagar a linha pai, porque tem uma tabela que depende dela
DELETE FROM Actor WHERE id = "002";


 -- 03)
 -- A) junta duas tabelas, de forma que fique relacionada na mesma linha de acordo com a igualdade repassada
 -- B)
 SELECT nome, movies.id, rate FROM movies
 INNER JOIN Rating ON movies.id = Rating.movie_id;
 
~~~