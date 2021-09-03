import { Request, Response } from "express";
import { CreateProductDataBase } from "../dataBase/CreateProductDataBase";
import { Product } from "../entities/Product";

export const createProduct = async(
    req: Request,
    res: Response
): Promise<void> => {

    try{
        const {name, description, price} = req.body

        if(!name || !description || !price){
            throw new Error("Todos os itens deve ser preenchidos")
        }

        const id: string = (Date.now() + Math.random().toString())

        const product = new Product(id, name, description, price)

        const createProductDataBase = new CreateProductDataBase()
        createProductDataBase.create(product)

        res.status(200).send("Produto criado com sucesso")

    }catch (error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }
    
}

export default createProduct