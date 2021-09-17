import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Autenticator";

const getOwnProfileAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization

        if(!token){
            throw new Error("Obrigatório autorização")
        }

        const authenticator =  new Authenticator()
        const data = await authenticator.getTokenData(token)

        const userDataBase = new UserDataBase()
        const user = await userDataBase.getUserById(data.id)

        res.status(200).send({id: user.getId(),name: user.getName(), email: user.getEmail() })

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }
}

export default getOwnProfileAsync