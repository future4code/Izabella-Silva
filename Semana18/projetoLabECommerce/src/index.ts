import app from './app'
import createProduct from './endpoints/createProduct'
import createUser from './endpoints/createUser'
import getAllProducts from './endpoints/getAllProducts'
import getAllUsers from './endpoints/getAllUsers'

app.get("/allusers", getAllUsers)
app.get("/allproducts", getAllProducts)

app.post("/createuser", createUser)
app.post("/createproduct", createProduct)
