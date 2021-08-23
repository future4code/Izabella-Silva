~~~ sql
-- 1)
-- A) Deleta a soluna salary
-- B) Altera o nome e a definição da coluna
-- C) Altera apenas a definição da coluna
-- D)
ALTER TABLE Actor MODIFY gender VARCHAR(100);

-- 2)
-- A)
SET SQL_SAFE_UPDATES = 0;
UPDATE Actor SET name="Moacyr Franco", birth_date="1950-11-06"
WHERE id = "003";
-- B)
UPDATE Actor SET name="TONY RAMOS" WHERE name="Tony Ramos";
-- C)
UPDATE Actor SET name="Reinaldo Janequine", salary= 200000, birth_date="1972-11-12", gender="male"
WHERE id="003";
-- D) Não acontece nada, porque o id não existe
UPDATE Actor SET name="Reinaldo Janequine", salary= 200000, birth_date="1972-11-12", gender="male"
WHERE id="006";

-- 03)
-- A)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
-- B)
DELETE FROM Actor WHERE (salary > 1000000 AND gender="male");

-- 04)
-- A)
SELECT MAX(salary) FROM Actor;
-- B)
SELECT MIN(salary) FROM Actor;
-- C)
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- d)
SELECT SUM(salary) FROM Actor;

-- 05)
-- A) contou a quantidade de generos e ordenou por genero
SELECT COUNT(*) gender
FROM Actor
GROUP BY gender;

-- B)
SELECT id, name FROM Actor ORDER BY name DESC;

-- C)
SELECT * FROM Actor ORDER BY salary;

-- D)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- E)
SELECT AVG(salary) FROM Actor GROUP BY gender;

-- 06)
-- A)
ALTER TABLE movies ADD playing_limit_date DATE;

-- B)
ALTER TABLE movies MODIFY avaliacao FLOAT;

-- C)
UPDATE movies SET playing_limit_date = "2021-01-30" WHERE id = "001";
UPDATE movies SET playing_limit_date = "2021-09-02" WHERE id = "002";

-- D) deletou apenas a linha que tinha o dados
DELETE FROM movies WHERE id = "003";

-- 07)
-- A)
SELECT COUNT(*) FROM movies WHERE avaliacao > 7.5;

-- B)
SELECT AVG(avaliacao) FROM movies;

-- C)
SELECT COUNT(*) FROM movies WHERE playing_limit_date > CURDATE();

-- D)
SELECT COUNT(*) FROM movies WHERE data_lancamento > CURDATE();

-- E)
SELECT MAX(avaliacao) FROM movies;

-- F)
SELECT MIN(avaliacao) FROM movies;

-- 8)
-- A)
SELECT * FROM movies ORDER BY nome ASC;

-- B)
SELECT * FROM movies ORDER BY nome DESC;

-- C)
SELECT * FROM movies WHERE data_lancamento < CURDATE()
ORDER BY data_lancamento DESC
LIMIT 3;

-- D)
SELECT * FROM movies ORDER BY avaliacao DESC LIMIT 3;
~~~