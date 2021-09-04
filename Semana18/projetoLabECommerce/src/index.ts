import app from './app'
import createProduct from './endpoints/createProduct'
import createTiket from './endpoints/CreateTiket'
import createUser from './endpoints/createUser'
import getAllProducts from './endpoints/getAllProducts'
import getAllTickets from './endpoints/getAllTickets'
import getAllUsers from './endpoints/getAllUsers'

app.get("/allusers", getAllUsers)
app.get("/allproducts", getAllProducts)
app.get("/alltickets", getAllTickets)

app.post("/createuser", createUser)
app.post("/createproduct", createProduct)
app.post("/createticket", createTiket)
