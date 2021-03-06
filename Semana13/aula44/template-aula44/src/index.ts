import express, { request, Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: USER_TYPE,
  age: number
}

enum USER_TYPE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: USER_TYPE.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: USER_TYPE.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: USER_TYPE.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: USER_TYPE.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: USER_TYPE.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: USER_TYPE.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//Exercicio 1,2 e 3

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400

  try{
    for(let key in req.query){
      if(key !== "name" && key !== "type"){
        throw new Error("Digite um paramentro valido. Parametros válidos são name ou type")
      }
    }

    const type = req.query.type && (req.query.type as string).toUpperCase()
    const name = req.query.name && (req.query.name as string).toUpperCase()

    if(type){
      if(type in USER_TYPE){
        const userType = users.filter((user) => user.type === type)
  
        if(!userType.length){
          throw new Error("Nenhum usuário encontrado")
        }
        return res.status(200).send(userType)
      }
      throw new Error("Nenhum usuário encontrado")
    }

    if(name){
      const userName = users.filter((user) => user.name.toUpperCase().includes(name))

      if(!userName.length){
        throw new Error("Nenhum usuário encontrado")
      }

      return res.status(200).send(userName)
    }

    res.status(200).send(users)

  }catch(error){
    res.status(errorCode).send(error.message)
  }
})

//Exercicio 4

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try{
    const {name,email,age, type} = req.body

    if(!name || !email || !age || !type){
      throw new Error("Falta parametros")
    }
    if(typeof name !== "string" || typeof email !== "string" || typeof age !== "number"){
      throw new Error("Parâmetro Inválido")
    }

    if(!(type.toUpperCase() in USER_TYPE)){
      throw new Error("Tipo Inválido, informe ADMIN ou NORMAL")
    }

    users.forEach((user)=>{
      if(user.email === email){
        throw new Error("E-mail já existe")
      }
    })

    const user: User ={
      id: users[users.length-1].id + 1,
      name,
      email,
      type,
      age
    }

    users.push(user)

    res.status(200).send("Usuário Adicionado com sucesso")

  }catch(error){
    res.status(errorCode).send(error.message)
  }
})

//Exercicio 5

app.put("/users/:id", (req:Request, res: Response)=>{
  let errorCode: number = 400
  try{
    const id = Number(req.params.id)

    if(isNaN(id)){
      throw new Error("Insira um id válido")
    }

    users.forEach((user)=>{
      if(user.id === id){
        user.name += "-ALTERADO"
        return res.status(200).end()
      }
    })

    res.status(204).send("Usuário não encontrado")
  }catch(error){
    res.status(errorCode).send(error.message)
  }
})

//Exercicio 6

app.patch("/users/:id", (req: Request, res:Response)=>{
  try{
    const id = Number(req.params.id)

    if(isNaN(id)){
      throw new Error("Id Inválido")
    }

    users.forEach((user)=>{
      if(user.id === id){
        user.name += "-REALTERADO"
      }
      return res.status(200).end()
    })

    res.status(204).send("Usuário não encontrado")
  }catch(error){
    res.status(400).send(error.message)
  }
})

//Exercicio 7

app.delete("/users/:id", (req: Request, res: Response) =>{
  try{
    const id = Number(req.params.id)

    if(isNaN(id)){
      throw new Error("Id Inválido")
    }

    for(let i =0; i < users.length; i++){
      if(users[i].id === id){
        users.splice(i,1)
        return res.status(200).send("Usuário deletado com sucesso")
      }
    }

    res.status(204).send("Usuário não encontrado")
  }catch(error){
    res.status(400).send(error.message)
  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
