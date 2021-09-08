import app from "./app"
import createUser from './endpoints/createUser'
import userLogin from "./endpoints/userLogin"
import userProfile from "./endpoints/userProfile"

app.get("/user/profile", userProfile)

app.post('/users/signup', createUser)
app.post('/users/login', userLogin)

