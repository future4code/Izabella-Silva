import express, {Express,Request, Response} from 'express'
import cors from 'cors'
import {Account, Transaction, TYPE_TRANSACTION} from './type'
import {users} from './accounts'

const app: Express = express()

app.use(express.json())
app.use(cors())

//abertura de conta
app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        const {name, cpf,birthDate} = req.body
        if(!name && !cpf && !birthDate){
            throw new Error("Falta Parametros")
        }
        if(isNaN(Number(cpf))){
            throw new Error ("CPF deve conter apenas números")
        }
        if(cpf.length !== 11){
            throw new Error("CPF deve conter 11 caracteres")
        }

        const indexUser = users.find((user) => user.cpf === req.body.cpf)

        if(indexUser){
            throw new Error("Já existe usuário cadastrado nesse CPF")
        }

        const [day, month, year] = birthDate.split("/")
        const newBirthDate: Date = new Date(`${year}-${month}-${day}`)
        const ageInMilisseconds: number = Date.now() - newBirthDate.getTime()
        const ageInYears: number = ageInMilisseconds/1000/60/60/24/365

        if(ageInYears < 18){
            throw new Error("Idade menor de 18 anos, proibido abertura de conta")
        }

        const newUser: Account = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: newBirthDate,
            balance: 0,
            statement: []
        }

        users.push(newUser)
        res.status(200).send("Conta criada com sucesso")

    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

//pegar todos os usuários
app.get("/users", (req:Request, res: Response) => {
    let errorCode: number = 400
    try{
        res.status(200).send(users)
    }catch(error){ 
        res.status(errorCode).send(error.message)
    }
})

//Mostrar saldo de um usuário
app.get("/users/:cpf", (req:Request, res: Response) => {
    let errorCode: number = 400
    try{
        const cpf: string = req.params.cpf
        if(isNaN(Number(cpf)) || !cpf){
            throw new Error("Parâmetro inválido")
        }

        users.forEach((user) => {
            if(user.cpf === cpf){
                return res.status(200).send(user)
            }
        })

        throw new Error("Usuário não encontrado")

    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

//Deposito Desafio 3 e 4
app.put("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        const{name,cpf,value} = req.body
        if(!name && !cpf && value){
            throw new Error("Todos os Campos devem ser preenchidos")
        }

        users.forEach((user) =>{
            if(user.name === name && user.cpf === cpf){
                const transaction: Transaction  = {
                    value: value,
                    date: new Date(),
                    description: TYPE_TRANSACTION.DEPOSITO,
                    consolidated: false
                }
                user.statement.push(transaction)
                return res.status(200).send("Depósito Realizado com sucesso")
            }
        })

        throw new Error("Usuário não encontrado")

    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

//endpoint para pagamento Desafio 5, 7 e 8
app.put("/users/payment", (req:Request, res: Response) => {
    let errorCode: number = 400
    try{
        const{cpf,value,date} = req.body
        if(!cpf && !value){
            throw new Error("CPF e valor são obrigatórios")
        }

        let newDate: Date
        if(!date){
            newDate = new Date()
        }else{
            const [day, month, year] = date.split("/")
            newDate = new Date(`${year}-${month}-${day}`)
        }
        const verifyDate: number = newDate.getTime() - Date.now()

        if(verifyDate < 0){
            throw new Error("Data de Pagamento deve ser igual ou superior a data atual")
        }

        users.forEach((user)=>{
            if(user.cpf === cpf){
                const verifyValue = user.balance - value

                if(verifyValue < 0){
                    throw new Error("Sem Saldo Suficiente")
                }

                const transaction: Transaction = {
                    value: value,
                    date: newDate,
                    description: TYPE_TRANSACTION.PAGAMENTO,
                    consolidated: false
                }
                user.statement.push(transaction)
                return res.status(200).send("Pagamento efetuado com sucesso!")
            }
        })

        throw new Error("Usuário não encontrado")

    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

//atualizar saldo Desafio 6
app.put("/users/updatebalance/:cpf", (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        if(!req.params.cpf){
            throw new Error("CPF deve ser informado como parâmetro")
        }
        if(isNaN(Number(req.params.cpf))){
            throw new Error("Parâmetro Inválido")
        }

        users.forEach((user) =>{
            if(user.cpf === req.params.cpf){
                let sum = 0
                user.statement.forEach((transaction) => {
                    const verifyDate: number = transaction.date.getTime() - Date.now()
                    if(verifyDate < 0 && !transaction.consolidated){

                        if(transaction.description === "C - Depósito em dinheiro" || transaction.description === "C - Transferência Recebida"){
                            sum += transaction.value
                            transaction.consolidated = true
                        }
                        if(transaction.description === "D - Pagamento" || transaction.description === "D - Transferência Efetuada"){
                            sum -= transaction.value
                            transaction.consolidated = true
                        }
                    }
                    
                })
                user.balance += sum
                res.status(200).send("Saldo Atualizado com sucesso!")
            }
        })

        throw new Error("Usuário não encontrado")
    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

//transferência Desafio 9,10 e 11
app.post("/users/transfer", (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        const{nameUser, cpfUser, recipientsName, recipientsCPF, value} =  req.body
        if(!nameUser && !cpfUser && !recipientsName && !recipientsCPF && !value){
            throw new Error("Falta itens! Itens Obrigatórios: nome e CPF do remetente e do destinátário e valor")
        }
        if(isNaN(value) || isNaN(Number(cpfUser)) || isNaN(Number(recipientsCPF))){
            throw new Error("Valor inválindo, enviar do tipo number")
        }

        const dateUser = users.find((user) => user.name.includes(nameUser) && user.cpf === cpfUser)

        if(!dateUser){
            throw new Error("Usuário não encontrado")
        }else if((dateUser.balance - value) < 0){
            throw new Error("Saldo Insuficiente")
        }

        const dateRecipient = users.find((user) => user.name.includes(recipientsName) && user.cpf === recipientsCPF)

        if(!dateRecipient){
            throw new Error("Destinatário não encontrado")
        }

        const transactionUser: Transaction ={
            value: value,
            date: new Date(),
            description: TYPE_TRANSACTION.TRANSFERENCIA_EFETUADA,
            consolidated: false
        }

        const transactionRecipient: Transaction = {
            value: value,
            date: new Date(),
            description: TYPE_TRANSACTION.TRANSFERENCIA_RECEBIDA,
            consolidated: false
        }

        users.forEach((user) =>{
            if(user.name.includes(nameUser) && user.cpf === cpfUser){
                user.statement.push(transactionUser)
            }
            if(user.name.includes(recipientsName) && user.cpf === recipientsCPF){
                user.statement.push(transactionRecipient)
            }
        })

        res.status(200).send("Transferência efetuada com sucesso")

    }catch(error){
        res.status(errorCode).send(error.message)
    }
})


app.listen(3003, () => {
    console.log("Servidor está rodando na porta http://localhost:3003")
})