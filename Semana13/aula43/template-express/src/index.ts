import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {countries} from './data'
import { country } from './types'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/countries", (req: Request, res: Response) => {
    res.send(countries)
})

app.get("/countries/search", (req:Request, res: Response) => {
    let result: country[] = countries

    try{
        if(!req.query.name && !req.query.capital && !req.query.continent){
            throw new Error("Invalid Parameters")
        }
        if(req.query.name){
            result = result.filter((country) => {
                const name: string = country.name.toLowerCase()
                return name.includes((req.query.name as string).toLowerCase())
            })
        }
    
        if(req.query.capital){
            result = result.filter((country) => {
                const capital: string = country.capital.toLowerCase()
                return capital.includes((req.query.capital as string).toLowerCase())
            })
        }
    
        if(req.query.continent){
            result = result.filter((country) => {
                const continent: string = country.continent.toLowerCase()
                return continent.includes(req.query.continent as string)
            })
        }
        res.status(200).send(result)
    } catch (error){
        res.status(400).send(error.message)
    }
})

app.get("/countries/:id", (req: Request, res: Response) => {
    const result = countries.find(
        (country) => {return country.id === Number(req.params.id)}
    )

    if(result === undefined){
        res.status(404).send("country not found")
    }else{
        res.status(207).send(result)
    }
})


app.listen(3003, () =>{
    console.log("Servidor Pronto! em  http://localhost:3003")
})