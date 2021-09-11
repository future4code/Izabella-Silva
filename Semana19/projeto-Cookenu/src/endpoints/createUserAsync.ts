import {Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { User } from '../entities/User'
import { Authenticator } from '../services/Autenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { USER_ROLES } from '../types'

const createUserAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{

        const{name, email, password} = req.body

        const newRole = (req.body.role as string).toUpperCase() || "NORMAL"

        if(!name || !email || !password){
            throw new Error("O campos 'name', 'email' e 'password' são obrigatorios")
        }

        if(newRole !== USER_ROLES.ADMIN && newRole !== USER_ROLES.NORMAL){
            throw new Error("O campo role deve ser igual a 'NORMAL' OU 'ADMIN'")
        }

        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string" || typeof newRole !== "string"){
            throw new Error("Todos os campos devem ser do tipo string")
        }

        const id = new IdGenerator().generateId()

        const hashPassword = new HashManager()
        const newHashPassword = await hashPassword.hash(password)
        
        const user = new User(id,name,email,newHashPassword,newRole)

        const userDataBase = new UserDataBase().createUser(user)

        const token = new Authenticator().generate({id: id, role: newRole})


        res.status(200).send({message: "usuário criado com sucesso", token: token})

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }
}

export default createUserAsync