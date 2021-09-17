import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export class BaseDataBase{
    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA
        }
    })

    private printError = (error: any) => {console.log(error.sqlMessage || error.message)}

    createTable= () => BaseDataBase.connection.raw(`
    CREATE TABLE cookenu_user(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL"
    );

    CREATE TABLE cookenu_recipe(
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        createdAt DATE NOT NULL,
        user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES cookenu_user(id)
    );

    CREATE TABLE cookenu_follow(
        id_user VARCHAR(255) NOT NULL,
        id_user_follow VARCHAR(255) NOT NULL
    );
    `)
    .then(() => {console.log("Created Tables cookenu_user and cookenu_recipe")})
    .catch(this.printError)

    closeConnection = () => {BaseDataBase.connection.destroy()}
}