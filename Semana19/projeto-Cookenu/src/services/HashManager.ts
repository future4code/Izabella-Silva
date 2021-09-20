import * as bcrypt from "bcryptjs"

export class HashManager{
    public async hash(text: string): Promise<any>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(text,salt)
    }

    public async compare(text: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(text,hash)
    }
}