import knex from "knex";

export abstract class BaseDataBase{
    private static connection: any | null = null

    protected tableNames = {
        dogWalking: "dog_walking",
    }

    protected getConnection(): any{
        if(!BaseDataBase.connection){
            BaseDataBase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                    multipleStatements: true,
                }
            })
        }

        return BaseDataBase.connection
    }
}