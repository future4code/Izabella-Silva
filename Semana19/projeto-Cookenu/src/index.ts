import app from "./app";
import createRecipesAsync from "./endpoints/createRecipesAsync";
import createUserAsync from "./endpoints/createUserAsync";
import getOtherProfileAsync from "./endpoints/getOtherProfileAsync";
import getOwnProfileAsync from "./endpoints/getOwnProfileAsync";
import getRecipeAsync from "./endpoints/getRecipeAsync";
import loginUserAsync from "./endpoints/loginUserAsync";

app.get("/user/profile", getOwnProfileAsync)
app.get("/user/:id", getOtherProfileAsync)
app.get("/recipe/:id", getRecipeAsync)

app.post("/signup", createUserAsync)
app.post("/login", loginUserAsync)
app.post("/recipe", createRecipesAsync)