export enum TYPE_TRANSACTION {
    TRANSFERENCIA = "transferência",
    PAGAMENTO = "pagamento",
    DEPOSITO = "deposito"
}

export type Transaction ={
    value: number,
    date: Date,
    description: TYPE_TRANSACTION
}

export type Account = {
    name:string,
    cpf: string,
    birthDate: Date,
    balance: number,
    extraxt: Array<Transaction>
}