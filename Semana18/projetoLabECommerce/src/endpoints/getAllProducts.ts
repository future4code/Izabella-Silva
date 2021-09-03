import { Request, Response } from "express";
import { CreateProductDataBase } from "../dataBase/CreateProductDataBase";
import { ProductDB } from "../types";

const getAllProducts = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const products = new CreateProductDataBase()
        const allProducts: ProductDB[] = await products.getAll()

        res.status(200).send(allProducts)

    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }
}

export default getAllProducts