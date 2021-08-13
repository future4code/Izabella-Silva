import express, {Express,Request, Response} from 'express'
import cors from 'cors'

enum TYPE_TRANSACTION {
    TRANSFERENCIA = "transferência",
    PAGAMENTO = "pagamento",
    DEPOSITO = "deposito"
}

type User = {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    balance: number | 0,
    // extract:[
    // {
    //     type: TYPE_TRANSACTION,
    //     value: number,
    //     date: string,
    //     description: string
    // }
    // ]
}

let users: User[] =[
    {
        id: 1,
        name: "Izabella",
        cpf: "11111111120",
        birthDate: "08/11/1991",
        balance: 10,
        // extract:[
        // {
        //     type: TYPE_TRANSACTION.DEPOSITO,
        //     value: 10,
        //     date: "12/08/2021",
        //     description: "deposito para manutenção de conta"
        // }
        // ]
    },
    {
        id: 2,
        name: "Daniella",
        cpf: "22222222220",
        birthDate: "16/04/1993",
        balance: 10,
        // extract:[
        // {
        //     type: TYPE_TRANSACTION.DEPOSITO,
        //     value: 10,
        //     date: "12/08/2021",
        //     description: "deposito para manutenção de conta"
        // }
        // ]
    }
]

function getAge(birthDate: string): number {
    console.log("data de aniversario", birthDate)
    let today = new Date();
    let newBirthDate = new Date(birthDate.split("/").reverse().join("/"));
    let age = today.getFullYear() - newBirthDate.getFullYear();
    let m = today.getMonth() - newBirthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < newBirthDate.getDate())) {
        age--;
    }
    return age;
}

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        if(!req.body.name && !req.body.cpf && !req.body.birthDate){
            throw new Error("Falta Parametros")
        }
        if(isNaN(Number(req.body.cpf))){
            throw new Error ("CPF deve conter apenas números")
        }
        if(req.body.cpf.length !== 11){
            throw new Error("CPF deve conter 11 caracteres")
        }

        const indexUser = users.find((user) => user.cpf === req.body.cpf)

        if(indexUser){
            throw new Error("Já existe usuário cadastrado nesse CPF")
        }

        if(getAge(req.body.birthDate) < 18){
            throw new Error("Idade menor de 18 anos, proibido abertura de conta")
        }

        const newUser: User = {
            id: users.length + 1,
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: 0,
        }

        users.push(newUser)
        res.status(200).send("Conta criada com sucesso")

    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

app.get("/users", (req:Request, res: Response) => {
    let errorCode: number = 400
    try{
        res.status(200).send(users)
    }catch(error){ 
        res.status(errorCode).send(error.message)
    }
})

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

        // res.status(204).send("Usuário não encontrado")
    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor está rodando na porta http://localhost:3003")
})