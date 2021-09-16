import {Request, Response} from 'express'
import { SignupDTO, UserBusiness } from '../business/UserBusiness'
import { MemoryUserDataBase } from '../data/memory/MemoryUserDataBase'

export class UserController{
    private userBusiness: UserBusiness

    constructor(){
        this.userBusiness = new UserBusiness(new MemoryUserDataBase())
    }

    async signup(req: Request, res: Response){
        try{
            const signupDTO: SignupDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            if(!signupDTO.name || !signupDTO.email || !signupDTO. password){
                throw new Error("Todos os parâmetros devem ser preenchidos")
            }

            if(signupDTO.password.length < 6){
                throw new Error("Senha deve ter no minimo 6 caracteres")
            }

            if(!signupDTO.email.includes("@")){
                throw new Error("E-mail deve ser no formato de e-mail")
            }

            const outPut = await this.userBusiness.signup(signupDTO)

            res.status(200).send({token: outPut.token})

        }catch(error: any){
            res.status(error.statusCode || 500).send(error.message || "Unexpected Error")
        }
    }

    async login(req: Request, res: Response){
        try{
            const email = req.body.email
            const password = req.body.password

            if(!email || !password){
                throw new Error("Unexpected Error")
            }

            const outPut = await this.userBusiness.login(email,password)

            res.status(200).send({token: outPut.token})

        }catch(error: any){
            res.status(error.statusCode || 500).send(error.message || "Unexpected Error")
        }
    }
}