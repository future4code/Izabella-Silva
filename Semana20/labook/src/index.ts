import app from "./app";
import dotenv from "dotenv";

dotenv.config();

import { UserController } from "./controllers/UserController";
import { PostController } from "./controllers/PostController";

const userController = new UserController()
const postController = new PostController()

app.post("/users/signup", (request, response) => userController.signup(request,response))
app.post("/users/login", (request, response) => userController.login(request, response))
app.post("/users/createpost", (request, response) => postController.createPost(request, response))
app.get("/users/post/:id", (request, response) => postController.getPostById(request, response))