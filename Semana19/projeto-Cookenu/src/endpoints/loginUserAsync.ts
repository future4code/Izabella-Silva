import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Autenticator";
import { HashManager } from "../services/HashManager";

const loginUserAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const {email, password} = req.body

        if(!email || !password){
            throw new Error("Os campos 'email' e 'password' são obrigatorios")
        }

        const getUser = new UserDataBase()
        const user = await getUser.getUserByEmail(email)

        const hashpassword = new HashManager()
        const isPassword = await hashpassword.compare(password,  user.getPassword())

        if(!user || !isPassword){
            throw new Error("E-mail e ou senha inválidos")
        }

        const generateToken = new Authenticator()
        const token = await generateToken.generate({id: user.getId(), role: user.getRole()})

        res.status(200).send({message: "Login efetuado com sucesso", token: token})

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }

}

export default loginUserAsync