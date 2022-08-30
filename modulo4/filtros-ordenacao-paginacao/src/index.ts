import { app } from "./app";
import { getUsers } from "./endpoints/getUsers";

app.get("/users", getUsers)

app.get("/users/:type", getUsers)