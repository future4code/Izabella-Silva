import * as bcrypt from 'bcryptjs'

export class HashManager{
    async hash(password: string): Promise<string>{
        const cost = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(cost)
        const cypherText = await bcrypt.hash(password, salt)

        return cypherText
    }

    async compare(password: string, hash: string): Promise<boolean>{
        const hashCompare: boolean = await bcrypt.compare(password, hash)
        return hashCompare
    }
}