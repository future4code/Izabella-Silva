import { Request, Response } from "express";
import { PurchaseDataBase } from "../dataBase/PurchaseDataBase";
import { PuchasesDB } from "../types";

const getAllPurchase = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const purchaseDataBase = new PurchaseDataBase()
        const allPurchase: PuchasesDB[]= await purchaseDataBase.getAllPurchase()

        console.log(allPurchase)
        res.status(200).send(allPurchase)

    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }
    
}

export default getAllPurchase