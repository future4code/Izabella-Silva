import app from "./app";
import changePasswordAsync from "./endpoints/changePasswordAsync";
import createdFollowAsync from "./endpoints/createdFollowAsync";
import createRecipesAsync from "./endpoints/createRecipesAsync";
import createUserAsync from "./endpoints/createUserAsync";
import deleteFollowAsync from "./endpoints/deleteFollowAsync";
import deleteRecipeAsync from "./endpoints/deleteRecipeAsync";
import deleteUserAsync from "./endpoints/deleteUserAsync";
import editeRecipeAsync from "./endpoints/editeRecipeAsync";
import getAllFeedAsync from "./endpoints/getAllFeedAsync";
import getOtherProfileAsync from "./endpoints/getOtherProfileAsync";
import getOwnProfileAsync from "./endpoints/getOwnProfileAsync";
import getRecipeAsync from "./endpoints/getRecipeAsync";
import loginUserAsync from "./endpoints/loginUserAsync";
import sendEmailChangePasswordAsync from "./endpoints/sendEmailChangePasswordAsync";

app.get("/user/profile", getOwnProfileAsync)
app.get("/user/feed", getAllFeedAsync)
app.get("/user/:id", getOtherProfileAsync)
app.get("/recipe/:id", getRecipeAsync)

app.post("/signup", createUserAsync)
app.post("/login", loginUserAsync)
app.post("/recipe", createRecipesAsync)
app.post("/user/follow", createdFollowAsync)
app.post("/sendemail", sendEmailChangePasswordAsync)
app.post("/changepassword", changePasswordAsync)

app.put("/editrecipe/:id", editeRecipeAsync)

app.delete("/user/unfollow", deleteFollowAsync)
app.delete("/deleteRecipe/:id", deleteRecipeAsync)
app.delete("/deleteuser/:id", deleteUserAsync)