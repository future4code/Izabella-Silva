import { connection } from "../data/connection"

export default async function selectAllUsers(sort: string, order:string):Promise<any> {
    const result = await connection("aula48_exercicio")
    .orderBy(sort,order)
 
    return result
 }