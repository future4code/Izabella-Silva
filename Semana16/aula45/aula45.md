~~~ sql

-- 1) CRIAR TABELA
CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW TABLES;

SHOW DATABASES;

DESCRIBE Actor;


-- A) VARCGAR-> CARACTERES PARA OCUPAR APENAS AS POSIÇÕES PREENCHIDAS, DATE--> DATAS, NOT NULL --> PARA SER UM TEMO OBRIGATÓRIO, PRIMARY KEY --> CHAVE PRIMNÁRIA
-- B) SHOW TABLES MOSTRA AS TABELAS NO BANCO DE DADOS, SHOW DATABASES MOSTRA A BASSE DE DADOS
-- C) DESCRIBE Actor descreve a estrutura da tabela e o tipo de dados


-- 02)
INSERT INTO Actor (id,name,salary, birth_date, gender)
VALUE(
"001",
"Tony Ramos",
400000,
"1948-08-05",
"male"
);


-- A)
INSERT INTO Actor VALUE (
"002",
 "Glória Pires",
 1200000,
 "1963-08-23",
 "female"
 );

-- B) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
-- esse devida a chave primária de numero 002 já existir e chave primária deve ser um valor unico
 
 INSERT INTO Actor VALUE(
 "002",
 "Fernanda Montenegro",
 300000,
 "1929-10-19",
 "female"
 );
 
 -- C) Error Code: 1136. Column count doesn't match value count at row 1
 -- a quantidade de colunas não são as mesmas dos valores
 
 INSERT INTO Actor(id, name, salary)
 VALUES (
 "003",
 "Fernanda Montenegro",
 300000,
 "1929-10-19",
 "female"
 );

-- D)Error Code: 1364. Field 'name' doesn't have a default value
-- Está faltando o valor para coluna name que foi definido na tabela
 
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- E) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- o valor esperado para o birth_date era do tipo date

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUE(
"005",
"Juliana Paes",
719333.33,
1979-03-26,
"female"
);

-- f)
INSERT INTO Actor VALUE(
"003", 
"Fernanda Montenegro",
300000,
"1929-10-19", 
"female"
);

-- EXERCICIO 03
-- A)
SELECT * FROM Actor WHERE gender = "female";
-- B)
SELECT salary FROM Actor WHERE name = "Tony Ramos";
-- C)
SELECT * FROM Actor WHERE gender = "invalid";
-- D)
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
-- E) Error Code: 1054. Unknown column 'nome' in 'field list'
-- não há coluna escrito nome e sim name
SELECT id, nome from Actor WHERE id = "002";

-- EXERCICIO 04
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- A) seleciona tudo da tabela que começa com a letra A ou J e tem salario maior que 300000
-- B)
SELECT name FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
-- C)
SELECT name FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

-- D)
SELECT name FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

-- EXERCICIO 05
 CREATE TABLE movies(
 id VARCHAR(255) PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 sinopse TEXT NOT NULL,
 data_lancamento DATE NOT NULL,
 avaliacao TINYINT NOT NULL
 );

INSERT INTO movies VALUE (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO movies VALUE (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO movies VALUE (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

SELECT * FROM movies

-- EXERCICIO 06
-- A)
SELECT id, nome, avaliacao FROM movies WHERE id = "001";

-- B)
SELECT * FROM movies WHERE nome="Dona Flor e Seus Dois Maridos";

-- C)
SELECT id, nome, sinopse FROM movies WHERE avaliacao >=7;


-- EXERCICIO 07
-- A)
SELECT * FROM movies WHERE nome LIKE "%vida%";

-- B)
SELECT * FROM movies WHERE (nome LIKE "%muitos%" OR sinopse LIKE "%muitos%");

-- C)
SELECT * FROM movies WHERE data_lancamento <= CURRENT_DATE();

-- D)
SELECT * FROM movies WHERE
data_lancamento <= CURRENT_DATE() AND
nome LIKE "%mãe%" AND
avaliacao > 7;

~~~