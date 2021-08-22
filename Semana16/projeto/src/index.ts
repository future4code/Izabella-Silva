import express, {Request, Response} from "express";
import cors from 'cors';
import { AddressInfo } from "net";
import connection from './connection'
import { now } from "tarn/dist/utils";

const app = express();
app.use(express.json());
app.use(cors())

// função para verificar se existe o usuário informado
const verifyUser = async (id: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM ToDoListUser
    WHERE id = "${id}"`)
    const findUser = result[0].length ?  true :  false
    return findUser
}

// Verificar se existe a tarefa informada
const verifyTask = async (id: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM ToDoListTask
    WHERE id = "${id}"`)
    const findTask = result[0].length ? true : false
    return findTask
}

// verificar se há relacionamento entre a tarefa e o usuario digitado
const verifyResponsibleUserTaskRelation = async (taskId: string, userId: string): Promise<any> =>{
    const result = await connection.raw(`SELECT * FROM TodoListResponsibleUserTaskRelation
    WHERE task_id = "${taskId}" AND responsible_user_id = "${userId}"`)
    const relation = result[0].length ? true : false
    return relation
}

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

        if(await verifyUser(req.params.id) === false){
            throw new Error("No user")
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

        if(await verifyUser(creatorUserId) === false){
            throw new Error("User doesn't registered")
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

// 14) Pegar todas as tarefas atrasadas
app.get("/task/delayed", async(req: Request, res: Response) => {
    try{
        const result = await connection.raw(`SELECT t.id as taskId, title,
        description, limiteDate as limitDate,status, creatorUserId, u.nickname as creatorUserNickname
        FROM ToDoListTask t
        RIGHT JOIN ToDoListUser u ON t.creatorUserId = u.id
        WHERE limiteDate < CURDATE() AND status = "to_do";`)

        const task = result[0]

        if(!task.length){
            throw new Error("No Tasks")
        }

        res.status(200).send({task: task})


    }catch(error){
        res.status(400).send(error.message)
    }
})

// 05) Pegar Tarefa por id
// 11) Pegar tarefa pelo id
app.get("/task/:id", async(req: Request, res: Response) => {
    try{

        if(await verifyTask(req.params.id) === false){
            throw new Error("task does not exist")
        }
        
        const result = await connection.raw(`SELECT t.id as taskId, title,
        description, limiteDate, creatorUserId, status, u.nickname as creatorUserNickname
        FROM ToDoListTask t
        RIGHT JOIN ToDoListUser u ON t.creatorUserId = u.id
        WHERE t.id = "${req.params.id}"`)

        const responsibleUserRelation = await connection.raw(`SELECT * FROM TodoListResponsibleUserTaskRelation
        WHERE task_id = "${req.params.id}"`)

        const responsibleUser: Array<Object> = []

        await Promise.all(responsibleUserRelation[0].map(async (user: any) => {
            const data = await connection.raw(`SELECT id, name
            FROM ToDoListUser WHERE id = "${user.responsible_user_id}";
            `)
            responsibleUser.push(data[0][0])
        }))

        const task =  result[0]

        if(!task.length){
            throw new Error("No task")
        }

        res.status(200).send({taskId: task[0].taskId, title: task[0].title, description: task[0].description,
            limitDate: task[0].limiteDate, creatorUserId: task[0].creatorUserId, status: task[0].status,
            creatorUserNickname: task[0].creatorUserNickname, responsibleUser: responsibleUser})

    }catch(error){
        res.status(400).send(error.message)
    }
})



// 07) Pegar tarefas criadas por um usuário
// 13) Pegar todas as tarefas por status
// 17) Procurar tarefa por termos
app.get("/task", async(req: Request, res: Response) => {
    try{
        let result = []

        if(await verifyUser(req.query.creatorUserId as string) === false){
            throw new Error("User Doesn't exist")
        }

        if(req.query.creatorUserId){
            result = await connection.raw(`SELECT t.id as taskId, title,
            description, limiteDate, creatorUserId, status, u.nickname as creatorUserNickname
            FROM ToDoListTask t
            RIGHT JOIN ToDoListUser u ON t.creatorUserId = u.id
            WHERE creatorUserId = "${req.query.creatorUserId}"`)
        }

        if(req.query.status){
            result = await connection.raw(`SELECT t.id as taskId, title,
            description, limiteDate, creatorUserId, u.nickname as creatorUserNickname
            FROM ToDoListTask t
            RIGHT JOIN ToDoListUser u ON t.creatorUserId = u.id
            WHERE status = "${req.query.status}"`)
        }

        if(req.query.query){
            result = await connection.raw(`SELECT t.id as taskId, title,
            description, limiteDate, creatorUserId, u.nickname as creatorUserNickname
            FROM ToDoListTask t
            RIGHT JOIN ToDoListUser u ON t.creatorUserId = u.id
            WHERE name LIKE "%${req.query.query}%" OR nickname LIKE "%${req.query.query}%"
            OR title LIKE "%${req.query.query}%" OR description LIKE "%${req.query.query}%"`)
        }
        
        const tasks = result[0]

        res.status(200).send({tasks: tasks})

    }catch(error){
        res.status(500).send("Unexpected Error")
    }
})

// 08 Pesquisar Usuário
app.get("/user", async(req: Request, res: Response) => {
    try{
        const name = req.query.query
        const result = await connection.raw(`SELECT id, nickname
        FROM ToDoListUser 
        WHERE name LIKE "%${name}%" || nickname LIKE "%${name}%";`)

        const users = result[0]

        res.status(200).send({users: users})

    }catch(error){
        res.status(500).send("Unexpected Error")
    }
})

// 09 Atribuir um usuário responsável a uma tarefa
// 16) Atribuir mais de um responsável a uma tarefa
app.post("/task/responsible", async(req:Request, res: Response) => {
    try{
        const {taskId,responsibleUserId} = req.body

        if(!taskId || !responsibleUserId){
            throw new Error("Missing filled field")
        }

        await responsibleUserId.map(async(user: string) => {
            if(await verifyResponsibleUserTaskRelation(taskId, user) === true){
                throw new Error("UserId already linked to task")
            }

            if(await verifyUser(user) === false){
                throw new Error("User dosen't exist")
            }

            await connection.raw(`INSERT INTO TodoListResponsibleUserTaskRelation
            VALUES(
            "${taskId}",
            "${user}"
            );`)
        })

        res.status(200).send("Successfully assigned responsibility")

    }catch(error){
        res.status(400).send(error.message)
    }
})

// 10 Pegar usuários responsáveis por uma tarefa
app.get("/task/:id/responsible", async(req: Request, res: Response) => {
    try{

        if(await verifyTask(req.params.id) === false){
            throw new Error("task does not exist")
        }

        const result = await connection.raw(`SELECT u.id, u.name
        FROM TodoListResponsibleUserTaskRelation r
        LEFT JOIN ToDoListTask t ON t.id = r.task_id
        JOIN ToDoListUser u ON u.id = t.creatorUserId
        WHERE r.task_id = "${req.params.id}";
        `)

        const users = result[0]

        res.status(200).send({users: users})
    }catch(error){
        res.status(400).send(error.message)
    }
})

// 12) Atualizar o status da tarefa pelo id
// 18) Atualizar o status de várias tarefas
app.put("/task/status/edit", async(req: Request, res: Response) => {
    try{
        const {task_id, status} = req.body

        if(!task_id || !status){
            throw new Error("Missing filled field")
        }
        if(await verifyTask(task_id) === false){
            throw new Error("task does not exist")
        }

        await task_id.map(async (task : any) => {
            await connection.raw(`UPDATE ToDoListTask SET status="${status}"
            WHERE id = "${task}"`)
        })

        res.status(200).send("Update Successfully")
    }catch(error){
        res.status(500).send("Unexpected Error")
    }
})

// 15) Retirar um usuário responsável de uma tarefa
app.delete("/task/:taskId/responsible/:responsibleUserId", async(req: Request, res: Response) => {
    try{
        if(await verifyTask(req.params.taskId) === false){
            throw new Error("task does not exist")
        }
        if(await verifyUser(req.params.responsibleUserId) === false){
            throw new Error("User does not exist")
        }
        if(await verifyResponsibleUserTaskRelation(req.params.taskId, req.params.responsibleUserId) === false){
            throw new Error("Task and user are not related")
        }

        await connection.raw(`DELETE FROM TodoListResponsibleUserTaskRelation
        WHERE task_id = "${req.params.taskId}" AND responsible_user_id = "${req.params.responsibleUserId}"`)

        res.status(200).send("Delete Successfully!")
    }catch(error){
        res.status(400).send(error.message)
    }
})

// 19) Deletar tarefa
app.delete("/task/:id", async(req: Request, res: Response) => {
    try{
        if(await verifyTask(req.params.id) === false){
            throw new Error("task does not exist")
        }

        await connection.raw(`DELETE FROM ToDoListTask
        WHERE id = "${req.params.id}"`)

        res.status(200).send("Delete task successfully")

    }catch(error){
        switch(error.code){
            case "ER_ROW_IS_REFERENCED_2":
                res.status(409).send("Task linked to a user, delete the relationship")
                break
            default:
                res.status(400).send(error.message)
        }
    }
})

// 20) Deletar Usuário
app.delete("/user/:id", async(req: Request, res: Response) => {
    try{
        if(await verifyUser(req.params.id) === false){
            throw new Error("No user")
        }

        await connection.raw(`DELETE FROM ToDoListUser
        WHERE id = "${req.params.id}"`)

        res.status(200).send("Delete user successfully")

    }catch(error){
        switch(error.code){
            case "ER_ROW_IS_REFERENCED_2":
                res.status(409).send("User linked to some task(s)")
                break
            default:
                res.status(400).send(error.message)
        }
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