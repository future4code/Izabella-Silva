import { connection } from "../data/connection"

export default async function selectAllUsers(sort: string, order:string, size: number, offset: number):Promise<any> {
    const result = await connection("aula48_exercicio")
    .orderBy(sort,order)
    .limit(size)
    .offset(offset)
 
    return result
 }