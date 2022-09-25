import { app } from "./app";
import { UserEndpoint } from "./Endpoints/UserEndpoints";

const user = new UserEndpoint()
app.post("/user/signup", user.create)
app.post("/user/login", user.login)
app.get("/user/profile", user.profile)