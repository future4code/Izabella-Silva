import { Request, Response } from "express";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { ProductDB } from "../types";

const getAllProducts = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const order = req.query.order || "name"

        if(typeof order !== "string"){
            throw new Error("Informar ordenação por 'name' ou 'order'")
        }

        if(order !== "price" && order !== "name"){
            throw new Error("ordenação deve ser por 'price' ou 'name'")
        }
        const products = new ProductDataBase()
        const allProducts: ProductDB[] = await products.getAll(order)

        res.status(200).send(allProducts)

    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }
}

export default getAllProducts