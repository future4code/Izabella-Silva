import { Request, Response } from "express";
import { PurchaseDataBase } from "../dataBase/PurchaseDataBase";
import { PuchasesDB } from "../types";
import { User } from "../entities/User";
import { UserDataBase } from "../dataBase/UserDataBase";

const getPuchasesByUser = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const userId = req.params.id

        const purchasesDataBase = new PurchaseDataBase()
        const allPurchase: PuchasesDB[] = await Promise.all( await purchasesDataBase.getPuchasesByUser(userId))

        // const userDataBase = new UserDataBase()
        // const user = userDataBase.getUserById(allPurchase[0].user_id)
        // const newUser = new User(
        //     `${user[0].id}`, `${user[0].email}`, user[0].age, 
        // )

        // allPurchase.map((purchase) => {
        //     const newPurchase = new User
        // })
        res.status(200).send(allPurchase)

    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error Inesperado")
    }
}

export default getPuchasesByUser