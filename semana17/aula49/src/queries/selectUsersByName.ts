import { connection } from "../data/connection";

export default async function selectUsersByName(name: string):Promise<any>{
    const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    WHERE name = "${name}"`)

    return result[0]
}