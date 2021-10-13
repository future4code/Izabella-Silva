CREATE TABLE dog_walking(
    id VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    price INT NOT NULL,
    duration INT NOT NULL,
    latitude VARCHAR(255) NOT NULL,
    longitude VARCHAR(255) NOT NULL,
    number_of_pets INT NOT NULL,
    start_time DOUBLE NULL,
    end_time DOUBLE NOT NULL,
    status ENUM("PENDENTE", "PASSEANDO", "FINALIZADO") DEFAULT "PENDENTE",
    start_walk DATE,
    finish_walk DATE
);