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

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
