import { Request, Response } from "express";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { ProductDB } from "../types";

const getAllTickets = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const tickets = new ProductDataBase()
        const allTickets: ProductDB[] = await tickets.getAllTravels()

        res.status(200).send(allTickets)

    }catch(error: any){
        res.status(error.statusCode || 400)
        .send(error.message || "Error inesperado")
    }
}

export default getAllTickets