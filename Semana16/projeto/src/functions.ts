import connection from './connection'

// Verificar se existe o usuário informado
export const verifyUser = async (id: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM ToDoListUser
    WHERE id = "${id}"`)
    const findUser = result[0].length ?  true :  false
    return findUser
}

// Verificar se existe a tarefa informada
export const verifyTask = async (id: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM ToDoListTask
    WHERE id = "${id}"`)
    const findTask = result[0].length ? true : false
    return findTask
}

// verificar se há relacionamento entre a tarefa e o usuario digitado
export const verifyResponsibleUserTaskRelation = async (taskId: string, userId: string): Promise<any> =>{
    const result = await connection.raw(`SELECT * FROM TodoListResponsibleUserTaskRelation
    WHERE task_id = "${taskId}" AND responsible_user_id = "${userId}"`)
    const relation = result[0].length ? true : false
    return relation
}

// Pegar dados de responsáveis por uma tarefa
export const getResponsibleUserRelation = async(taskId: string): Promise<any> => {
    const responsibleUserRelation = await connection.raw(`SELECT * FROM TodoListResponsibleUserTaskRelation
    WHERE task_id = "${taskId}"`)

    const responsibleUser: Array<Object> = []

    await Promise.all(responsibleUserRelation[0].map(async (user: any) => {
        const data = await connection.raw(`SELECT id, name
        FROM ToDoListUser WHERE id = "${user.responsible_user_id}";
        `)
        responsibleUser.push(data[0][0])
    }))

    return responsibleUser
}

// converter data
export const convertDate = async(date: Date): Promise<any> => {
    const newDate = date.toISOString().split("T")[0]
    const limitDate = newDate.split("-").reverse().join("/")
    return limitDate
}

// imprimir tasks
export const printTasks = async(tasks: any): Promise<any> => {
    const allTasks: Array<object> = []
    tasks.map(async (task: any) =>{
        const limitDate = await convertDate(task.limitDate)
        const dataTask = {
            taskId : task.taskId,
            title: task.title,
            description: task.description,
            status: task.status,
            limitDate: limitDate,
            creatorUserNickname: task.creatorUserNickname
        }

        allTasks.push(dataTask)
    })

    return allTasks
}