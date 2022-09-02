import { app } from "./app";
import { addProduct }  from './endpoints/addProduct'

app.post("/products", addProduct)
