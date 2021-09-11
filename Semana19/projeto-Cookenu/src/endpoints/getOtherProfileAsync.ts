import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Autenticator";

const getOtherProfileAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization
        const id = req.params.id as string

        if(!token){
            throw new Error("Deve ter autorização")
        }

        const authenticator =  new Authenticator()
        const data = await authenticator.getTokenData(token)

        if(!data){
            throw new Error("Token Inválido")
        }

        const userDataBase = new UserDataBase()
        const user = await userDataBase.getUserById(id)

        if(!user){
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send({id: user.getId(), name: user.getName(), email: user.getEmail()})

    }catch(error: any){
        res.status(error.statusCode ||400).send(error.sqlMessage || error.message)
    }
}

export default getOtherProfileAsync