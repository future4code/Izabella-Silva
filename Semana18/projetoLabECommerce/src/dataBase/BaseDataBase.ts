import knex from "knex";
import dotenv from 'dotenv'
import users from './migrations/users.json'
import products from './migrations/products.json'

dotenv.config()

export class BaseDataBase{
    protected static connection = knex({
        client: "mysql",
        connection:{
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multipleStatements: true
        }
    })

    private printError = (error: any) => { console.log(error.sqlMessage || error.message) };

    createTables = () => BaseDataBase.connection.raw(`
        CREATE TABLE lab_e_commerce_user(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            age INT NOT NULL
        );

        CREATE TABLE lab_e_commerce_product(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            travel_origin VARCHAR(255),
            travel_destination VARCHAR(255)
        );

        CREATE TABLE lab_e_commerce_purchase(
            purchase_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            quantity INT NOT NULL DEFAULT 1,
            total_amount FLOAT NOT NULL,
            FOREIGN KEY (product_id) REFERENCES lab_e_commerce_product(id),
            FOREIGN KEY (user_id) REFERENCES lab_e_commerce_user(id)
        )
        `)
        .then(() => { console.log("Created Tables lab_e_commerce_user, lab_e_commerce_product and lab_e_commerce_purchase") })
        .catch(this.printError);

    insertUsers = () => BaseDataBase.connection("lab_e_commerce_user")
    .insert(users)
    .then(() => console.log("Created Users"))
    .catch(this.printError)

    insertProduct = () => BaseDataBase.connection("lab_e_commerce_product")
    .insert(products)
    .then(() => console.log("Created Products"))
    .catch(this.printError)

    closeConnection = () => { BaseDataBase.connection.destroy() };
}