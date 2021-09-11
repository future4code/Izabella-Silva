import app from "./app";
import createdFollowAsync from "./endpoints/createdFollowAsync";
import createRecipesAsync from "./endpoints/createRecipesAsync";
import createUserAsync from "./endpoints/createUserAsync";
import deleteFollowAsync from "./endpoints/deleteFollowAsync";
import getAllFeedAsync from "./endpoints/getAllFeedAsync";
import getOtherProfileAsync from "./endpoints/getOtherProfileAsync";
import getOwnProfileAsync from "./endpoints/getOwnProfileAsync";
import getRecipeAsync from "./endpoints/getRecipeAsync";
import loginUserAsync from "./endpoints/loginUserAsync";

app.get("/user/profile", getOwnProfileAsync)
app.get("/user/feed", getAllFeedAsync)
app.get("/user/:id", getOtherProfileAsync)
app.get("/recipe/:id", getRecipeAsync)

app.post("/signup", createUserAsync)
app.post("/login", loginUserAsync)
app.post("/recipe", createRecipesAsync)
app.post("/user/follow", createdFollowAsync)

app.delete("/user/unfollow", deleteFollowAsync)