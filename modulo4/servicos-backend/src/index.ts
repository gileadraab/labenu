
import { app } from "./app";
import { addAdress } from "./endpoints/getAddress";

app.post("/address", addAdress)
