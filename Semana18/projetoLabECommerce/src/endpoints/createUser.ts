import { Request, Response } from "express";
import { User } from "../entities/User";
import { CreateUserDataBase } from "../dataBase/CreateUserDataBase";

const createUser = async(
    req: Request,
    res: Response
): Promise<void> =>{
    try{
        const {name, email, age} = req.body

        if(!name || !email || !age){
            throw new Error("Todos os dados são obrigatórios")
        }

        const user = new User(name,email,age)

        const createUserDataBase = new CreateUserDataBase()
        await createUserDataBase.create(user)

        res.status(200).send("Usuário criado com sucesso")

    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }

}

export default createUser