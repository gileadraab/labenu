import { app } from "./app";
import { UserEndpoint } from "./Endpoints/UserEndpoints";


const user = new UserEndpoint()
 
//SIGN UP
app.post("/signup", user.signUp)

//LOGIN
app.post("/login", user.login)

//GET OWN PROFILE 
app.get("/user/:id", user.profile)

//GET OTHER PROFILES

//ADD RECIPE

//GET RECIPE

//FOLLOW USER

//UNFOLLOW USER

//GET RECIPES FEED

//USER ROLES

//EDIT RECIPE

//DELETE RECIPE

//DELETE ACCOUNT

//FORGOT PASSWORD