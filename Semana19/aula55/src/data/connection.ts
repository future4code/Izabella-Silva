import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    }
})

const userTableName = "User"

const createUser = async(
    id: string,
    email: string,
    password: string
) => {
    await connection.insert({
        id,
        email,
        password
    })
    .into(userTableName)
}