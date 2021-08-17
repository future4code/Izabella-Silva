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


~~~