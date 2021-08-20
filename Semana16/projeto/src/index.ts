import express, {Request, Response} from "express";
import cors from 'cors';
import { AddressInfo } from "net";
import connection from './connection'
import { now } from "tarn/dist/utils";

const app = express();
app.use(express.json());
app.use(cors())

//01 criar usuário
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
        );`)

        res.status(200).send("User Created Successfully")

    }catch(error){

        switch(error.code){
            case "ER_DUP_ENTRY":
                res.status(409).send("Email ou nickname em uso")
                break
            default:
                res.status(500).send("Unexpected error")
        }
        res.status(400).send(error.message)
    }
})

// 06 Pegar todos os ususários
app.get("/user/all", async(req:Request, res: Response) => {
    try{
        const result = await connection.raw(`SELECT id, name FROM ToDoListUser;`)

        const users = result[0]

        if(!users.length){
            throw new Error("No users found")
        }

        res.status(200).send(users)
    }catch(error){
        res.status(400).send(error.message)
    }
})

//02 pegar usuário pelo id
app.get("/user/:id", async(req: Request, res: Response) => {
    try{
        const result = await connection.raw(`SELECT * FROM ToDoListUser
        WHERE id="${req.params.id}";`)

        const user = result[0]

        if(!user.length){
            throw new Error("No users Found")
        }

        res.status(200).send(user)
    }catch(error){
        res.status(400).send(error.message)
    }
})

//03 Editar Usuário
app.put("/user/edit/:id", async(req: Request, res: Response) => {
    try{
        const {name, nickname} = req.body
        if(!name || !nickname){
            throw new Error("Missing filled field")
        }

        await connection.raw(`UPDATE ToDoListUser
        SET name="${name}", nickname="${nickname}"
        WHERE id="${req.params.id}";
        `)

        res.status(200).send("Update Successfully")

    }catch(error){
        res.status(400).send(error.message)
    }
})

// 04 Criar Tarefa
app.post("/task", async(req: Request, res: Response) => {
    try{
        const {title, description, limitDate, creatorUserId} = req.body

        if(!title || !description || !limitDate || !creatorUserId){
            throw new Error("Missing filled field")
        }

        await connection.raw(` INSERT INTO ToDoListTask (id, title, description, limiteDate, creatorUserId)
        VALUES(
            ${Date.now().toString()},
            "${title}",
            "${description}",
            "${limitDate.split("/").reverse().join("/")}",
            "${creatorUserId}"
        );`)

        res.status(200). send("Task Created Successfully")

    }catch(error){
        res.status(400).send(error.message)
    }
})

//05 Pegar Tarefa por id
app.get("/task/:id", async(req: Request, res: Response) => {
    try{
        const result = await connection.raw(`SELECT * FROM ToDoListTask
        WHERE id = "${req.params.id}";`)

        const task = result[0]

        if(!task.length){
            throw new Error("No task found")
        }

        res.status(200).send(task)

    }catch(error){
        res.status(400).send(error.message)
    }
})



// 07) Pegar tarefas criadas por um usuário
app.get("/task", async(req: Request, res: Response) => {
    try{
        const result = await connection.raw(`SELECT t.id as taskId, title,
        description, limiteDate, creatorUserId, status, u.nickname as creatorUserNickname
        FROM ToDoListTask t
        RIGHT JOIN ToDoListUser u ON t.creatorUserId = u.id`)

        const tasks = result[0]

        // tasks.map((task : any) => {
        //     const newDate = task.limiteDate.split("T")[0]
        //     task.limiteDate = newDate.split("/").reverse().join("/")
        // })

        res.status(200).send({tasks: tasks})

    }catch(error){
        res.status(500).send("Unexpected Error")
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