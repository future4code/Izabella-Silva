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
    let errorCode: number = 400

    try{
        const result = countries.find(
            (country) => {return country.id === Number(req.params.id)}
        )

        if(!result){
            errorCode = 404
            throw new Error()
        }

        res.status(200).send(result)

    }catch(error){
        console.log(error)
        res.status(errorCode).send(error.message)
    }

    

    if(result === undefined){
        res.status(404).send("country not found")
    }else{
        res.status(207).send(result)
    }
})

app.post("/countries/:id", (req:Request, res: Response) =>{
    let errorCode: number = 400

    try{
        const countryIndex = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if(countryIndex === -1){
            errorCode = 404
            throw new Error()
        }

        if(!req.body.name && !req.body.capital){
            throw new Error("Parametro Inválido")
        }

        if(req.body.name){
            countries[countryIndex].name = req.body.name
        }
        if(req.body.capital){
            countries[countryIndex].capital = req.body.capital
        }

        res.status(200).send("País Atualizado com sucesso!")

    }catch(error){
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})

app.delete("/countries/:id", (req:Request, res:Response)=>{
    let errorCode: number = 400

    try{
        const authorization = req.headers.authorization as string
        if(!authorization || authorization.length<10){
            errorCode = 401
            throw new Error("Sem autorização")
        }
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if (countryIndex === -1){
            errorCode = 404
            throw new Error();
        }
        countries.splice(countryIndex,1)

        res.status(200).send("País Deletado com sucesso")

    }catch(error){
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})

app.post("/countries", (req:Request, res:Response)=>{
    let errorCode = 400

    try{
        const authorization = req.headers.authorization as string

        if(!authorization || authorization.length < 10){
            throw new Error("Sem autorização")
        }

        if(!req.body.name && !req.body.capital && !req.body.continent){
            throw new Error("Todos os parâmetros devem ser preenchidos")
        }

        const findCountry = countries.find(
            (country) => country.name === req.body.name
        )

        if(findCountry){
            errorCode = 409
            throw new Error("País já existe")
        }

        const newCountry: country = {
            id: countries[countries.length-1].id + 1,
            name:req.body.name,
            capital: req.body.capital,
            continent: req.body.continent,
        }
        countries.push(newCountry)

        res.status(200).send({message:"Success!", country: newCountry})
    }catch(error){
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})


app.listen(3003, () =>{
    console.log("Servidor Pronto! em  http://localhost:3003")
})