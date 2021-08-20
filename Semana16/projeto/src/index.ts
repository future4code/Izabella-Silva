import express, {Request, Response} from "express";
import cors from 'cors';
import { AddressInfo } from "net";
import connection from './connection'

const app = express();
app.use(express.json());
app.use(cors())

//01 criando usuário
app.post("/user", async(req: Request, res: Response)=>{
    try{
        const {name, nickname, email} =  req.body
        if(!name || !nickname || !email){
            throw new Error("Missing filled field")
        }

        await connection.raw(`INSERT INTO ToDoListUser
        VALUES(
            ${Date.now().toString()},
            "${name}",
            "${nickname}",
            "${email}"
        )`)

        res.status(200).send("User Created Successfully")

    }catch(error){
        res.status(400).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error("Failure upon starting server.")
    }
})