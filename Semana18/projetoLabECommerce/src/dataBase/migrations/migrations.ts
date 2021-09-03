import connection from "../../connection";
import users from './users.json'
import products from './products.json'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection.raw(`
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
            product_id VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_id) REFERENCES lab_e_commerce_product(id),
            FOREIGN KEY (user_id) REFERENCES lab_e_commerce_user(id)
        )
        `)
        .then(() => { console.log("Created Tables lab_e_commerce_user, lab_e_commerce_product and lab_e_commerce_purchase") })
        .catch(printError);

const insertUsers = () => connection("lab_e_commerce_user")
    .insert(users)
    .then(() => console.log("Created Users"))
    .catch(printError)

const insertProduct = () => connection("lab_e_commerce_product")
    .insert(products)
    .then(() => console.log("Created Products"))
    .catch(printError)

const closeConnection = () => { connection.destroy() };
        
createTables()
    .then(insertUsers)
    .then(insertProduct)
    .then(closeConnection)