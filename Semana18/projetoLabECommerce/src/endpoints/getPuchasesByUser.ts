import { Request, Response } from "express";
import { PurchaseDataBase } from "../dataBase/PurchaseDataBase";
import { PuchasesDB } from "../types";

const getPuchasesByUser = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const userId = req.params.id
        console.log()

        const purchasesDataBase = new PurchaseDataBase()
        const allPurchase: PuchasesDB[] = await purchasesDataBase.getPuchasesByUser(userId)
        console.log(allPurchase)

        res.status(200).send(allPurchase)

    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error Inesperado")
    }
}

export default getPuchasesByUser