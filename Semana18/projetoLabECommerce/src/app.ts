import express, {Express} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'

const app: Express = express();

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const addres = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${addres.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})

export default app