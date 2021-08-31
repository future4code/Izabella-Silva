import { connection } from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS aula51_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         nickname VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const createTableAddress = () => connection.raw(`
   CREATE TABLE IF NOT EXISTS userAddress(
      id VARCHAR(255) PRIMARY KEY,
      zip_code VARCHAR(255) NOT NULL,
      street VARCHAR(255) NOT NULL,
      number VARCHAR(255) NOT NULL,
      complement VARCHAR(255),
      neighborhood VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      user_id VARCHAR(255) NOT NULL,
      FOREIGN KEY (user_id) REFERENCES aula51_users(id)
   );
`)


const insertUsers = () => connection("aula51_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(createTableAddress)
   .then(insertUsers)
   .finally(closeConnection)