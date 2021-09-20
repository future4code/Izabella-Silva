import { Request, Response } from "express";
import { FollowDataBase } from "../data/FollowDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Autenticator";

const createdFollowAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization
        const userToFollowId = req.body.userToFollowId

        if(!userToFollowId){
            throw new Error("O campo 'userToFollowId' é obrigatório")
        }

        if(!token){
            throw new Error("Obrigatório autorização")
        }

        const authenticator = new Authenticator()
        const user = await authenticator.getTokenData(token)

        if(!user){
            throw new Error("Usuário da conta não autorizado")
        }

        const verifyFollowUser = new UserDataBase().getUserById(userToFollowId)

        if(!verifyFollowUser){
            throw new Error("Usuário a ser seguindo não encontrado")
        }

        const followDataBase = new FollowDataBase().createdFollow({id_user: user.id, id_user_follow: userToFollowId})

        res.status(200).send("Usuário seguido com sucesso")

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }
}

export default createdFollowAsync