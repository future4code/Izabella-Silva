import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export class BaseDataBase{
    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            multipleStatements: true
        }
    })

    private printError = (error: any) => {console.log(error.sqlMessage || error.message)}

    createTable = () => BaseDataBase.connection.raw(`
    CREATE TABLE labook_user (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL
    );

    CREATE TABLE labook_post (
        id VARCHAR(255) PRIMARY KEY,
        image VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        criation_date DATE NOT NULL,
        type ENUM("normal","event") DEFAULT "normal" NOT NULL,
        user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES labook_user(id)
    );

    CREATE TABLE labook_friendship (
		friend_id_1 VARCHAR(255) NOT NULL,
        friend_id_2 VARCHAR(255) NOT NULL
    );
    `)
    .then(() => console.log(`create tables labook_user and labook_post`))
    .catch(this.printError)

    closeConnection = () => BaseDataBase.connection.destroy()
}