import { Request, Response } from "express";
import { Authenticator } from "../services/Autenticator";
import { mailTransporter } from "./mailTransporter";

const sendEmailChangePasswordAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization
        const {email} = req.body

        if(!token){
            throw new Error("Deve estar logado")
        }

        const authenticator = new Authenticator()
        const user = await authenticator.getTokenData(token)

        if(!user){
            throw new Error("Token inválido")
        }

        await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: `Solicitação de alteração de senha`,
            html: `
                <p>Clique no botão abaixo para alterar senha</p>
                <button>Alterar Senha</button>
            `
        })

        res.status(200).send("E-mail criado")

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }

}

export default sendEmailChangePasswordAsync