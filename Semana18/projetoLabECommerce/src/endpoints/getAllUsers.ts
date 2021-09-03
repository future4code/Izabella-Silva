import { Request, Response } from "express";
import { CreateUserDataBase } from "../dataBase/CreateUserDataBase";
import { UserDb } from "../types";

const getAllUsers = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const users = new CreateUserDataBase()
        const getUsers: UserDb[] = await users.getAll()

        res.status(200).send(getUsers)
    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }
}

export default getAllUsers