import {Request, Response} from 'express'
import { getUserById } from '../data/connection'
import { getData } from '../services/generateToken'

const userProfile = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })
    }catch(error: any){
        res.status(400).send({
            message: error.message
        })
    }
}

export default userProfile