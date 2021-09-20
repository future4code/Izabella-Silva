import { Request, Response } from "express";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { Purchase } from "../entities/Purchase";
import { PurchaseDataBase } from "../dataBase/PurchaseDataBase";

const postPurchase = async(
    req: Request,
    res: Response
): Promise<any> => {
    try{
        const{userId, productId, quantity} = req.body

        if(!userId || !productId || !quantity){
            throw new Error("As variáveis 'userId', 'productId' e 'quantity' são obrigatórias")
        }

        if(typeof userId !== "string" || typeof productId !== "string"){
            throw new Error("As variáveis 'userId' e 'productId' devem ser do tipo string")
        }

        if(typeof quantity !== "number"){
            throw new Error("A variável 'quantity' deve ser do tipo 'number'")
        }

        const product = new ProductDataBase()
        const getProduct = await product.getProductById(productId)
        const total = getProduct[0].price * quantity

        const purchase = new Purchase(userId,productId,quantity, total)
        const createPurchase = new PurchaseDataBase()
        createPurchase.createPurchase(purchase)

        res.status(200).send("Com´pra criada com sucesso!")
    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }
}

export default postPurchase