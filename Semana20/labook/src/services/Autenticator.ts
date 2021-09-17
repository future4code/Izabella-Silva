import * as jwt from 'jsonwebtoken'

interface AuthenticatorData{
    id: string
}

export class Authenticator {
    generateToken(info: AuthenticatorData): string{
        const token = jwt.sign(
            {id: info.id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRATION_TIME}
        )

        return token
    }

    getTokenData(token: string): any{
        console.log(token)
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return payload as AuthenticatorData
    }
}