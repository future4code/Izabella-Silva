import {Request, Response} from 'express'
import { getUserById } from '../data/connection'
import { getData } from '../services/generateToken'
import { ROLE } from '../types'

const userProfile = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        if(user.role !== ROLE.NORMAL){
            throw new Error("Apenas usuário normal pode acessar essa aplicação")
        }

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        })
    }catch(error: any){
        res.status(400).send({
            message: error.message
        })
    }
}

export default userProfile