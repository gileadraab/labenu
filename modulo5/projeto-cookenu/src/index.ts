import { app } from "./app";
import { RecipeEndpoint } from "./Endpoints/RecipesEndpoinst";
import { UserEndpoint } from "./Endpoints/UserEndpoints";

//USER REQUESTS
const user = new UserEndpoint()
//sign up
app.post("/signup", user.signUp)

//login
app.post("/login", user.login)

//get own profile info
app.get("/user/profile", user.profile)

//get other user profile info
app.get("/user/:id", user.getProfile)

//follow user
app.post("/user/follow", user.follow)

//unfollow user


//RECIPE REQUESTS
const recipe = new RecipeEndpoint()
//add new recipe
app.post("/recipe", recipe.newRecipe)

//get recipe
app.get("/recipe/:id", recipe.getRecipe)


//RECIPES FEED

//USER ROLES

//EDIT RECIPE

//DELETE RECIPE

//DELETE ACCOUNT

//FORGOT PASSWORD