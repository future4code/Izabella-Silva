import app from "./app";
import dotenv from "dotenv";

dotenv.config();

import { UserController } from "./controllers/UserController";
import { PostController } from "./controllers/PostController";
import { FriendShipController } from "./controllers/FriendShipController";

const userController = new UserController()
const postController = new PostController()
const friendshipcontroller = new FriendShipController

app.post("/users/signup", (request, response) => userController.signup(request,response))
app.post("/users/login", (request, response) => userController.login(request, response))
app.post("/users/createpost", (request, response) => postController.createPost(request, response))
app.get("/users/post/:id", (request, response) => postController.getPostById(request, response))
app.post("/users/friendship", (request, response) => friendshipcontroller.toDoFriendship(request, response))
app.post("/users/undofriendship", (request, response) => friendshipcontroller.undoFriendship(request, response))