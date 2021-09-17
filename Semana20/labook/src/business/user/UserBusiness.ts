import { User } from "../../model/User";
import { Authenticator } from "../../services/Autenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGeneratos";
import { UserRepository } from "./UserRepository";

export interface SignupDTO{
    name: string,
    email: string,
    password: string
}

export class UserBusiness {
    private userDataBase: UserRepository
    private hashManager: HashManager
    private authenticator: Authenticator

    constructor(
        userDataBase: UserRepository
    ){
        this.userDataBase = userDataBase
        this.hashManager = new HashManager()
        this.authenticator = new Authenticator()
    }

    async signup(signupDTO: SignupDTO){
        const idGenerator = new IdGenerator().generateId()

        const passwordHash = await this.hashManager.hash(signupDTO.password)

        const userWithEmail = await this.userDataBase.findUserByEmail(signupDTO.email)

        if(userWithEmail){
            throw new Error("Usauário com esse email já existe")
        }

        const userModel: User = {
            id: idGenerator,
            email: signupDTO.email,
            name: signupDTO.name,
            password_hash: passwordHash
        }

        await this.userDataBase.save(userModel)

        const token = this.authenticator.generateToken({id: userModel.id})

        return {
            user: userModel,
            token: token
        }
    }

    async login(email: string, password: string){
        const user = await this.userDataBase.findUserByEmail(email)

        if(!user){
            throw new Error("Usuário não existe")
        }

        const isPasswordCorrect = await this.hashManager.compare(password, user.password_hash)

        if(!isPasswordCorrect){
            throw new Error("Senha Incorreta")
        }

        const token = this.authenticator.generateToken({id: user.id})

        return{
            token: token,
            user: user
        }
    }
}