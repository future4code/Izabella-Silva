export enum TYPE_TRANSACTION {
    TRANSFERENCIA_EFETUADA = "D - Transferência Efetuada",
    TRANSFERENCIA_RECEBIDA = "C - Transferência Recebida",
    PAGAMENTO = "D - Pagamento",
    DEPOSITO = "C - Depósito em dinheiro"
}

export type Transaction ={
    value: number,
    date: Date,
    description: TYPE_TRANSACTION,
    consolidated: boolean
}

export type Account = {
    name:string,
    cpf: string,
    birthDate: Date,
    balance: number,
    extract: Array<Transaction>
}