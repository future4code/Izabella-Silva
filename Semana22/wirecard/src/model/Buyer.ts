export class Buyer{
    constructor(
        private name: string,
        private email: string,
        private cpf: string
    ){}

    public getName(): string{
        return this.name
    }

    public getEmail(): string{
        return this.email
    }

    public getCpf(): string{
        return this.cpf
    }

    public setName(name: string){
        this.name = name
    }

    public setEmail(email: string){
        this.email = email
    }

    public setCpf(cpf: string){
        this.cpf = cpf
    }
}