import { Request, Response } from "express";
import { User } from "../entities/User";
import { UserDataBase } from "../dataBase/UserDataBase";
import { UserDb } from "../types";

const createUser = async(
    req: Request,
    res: Response
): Promise<void> =>{
    try{
        const {name, email, age} = req.body

        if(!name || !email || !age){
            throw new Error("Todos os dados são obrigatórios")
        }

        if(typeof name !== "string" || typeof email !== "string"){
            throw new Error("As variáveis 'name' e 'email' devem ser do tipo string")
        }

        if(typeof age !== "number"){
            throw new Error("A variável 'age' deve ser do tipo 'number'")
        }

        if(!email.includes("@")){
            throw new Error("A variável 'email' deve ser do tipo email")
        }

        const user = new User(name,email,age)

        const createUserDataBase = new UserDataBase()
        await createUserDataBase.create({
            "id": `${user.getId()}`,
            "name":`${user.getName()}`,
            "email":`${user.getEmail()}`,
            "age": user.getAge()
        })

        res.status(200).send("Usuário criado com sucesso")

    }catch(error: any){
        if(error.code === "ER_DUP_ENTRY"){
            error.message = "Email já cadastrado"
        }
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }

}

export default createUser