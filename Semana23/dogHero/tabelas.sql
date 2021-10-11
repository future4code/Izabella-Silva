CREATE TABLE dog_walking(
    id VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    price INT NOT NULL,
    duration INT NOT NULL,
    latitude VARCHAR(255) NOT NULL,
    longitude VARCHAR(255) NOT NULL,
    number_of_pets INT NOT NULL,
    start_time DATE NOT NULL,
    end_time DATE NOT NULL,
    status ENUM("PENDENTE", "PASSEANDO", "FINALIZADO") DEFAULT "PENDENTE",
    start_walk INT,
    finish_walk INT
);
