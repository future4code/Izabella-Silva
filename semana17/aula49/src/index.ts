import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllRecipes } from "./endpoints/getAllRecipes"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUsersByName } from "./endpoints/getUsersByName"
import {getUsersBytype} from "./endpoints/getUsersBytype"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/recipes", getAllRecipes)
app.get("/recipes/allUsers", getAllUsers)
app.get("/recipes/users", getUsersByName)
app.get("/recipes/users/:type", getUsersBytype)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})