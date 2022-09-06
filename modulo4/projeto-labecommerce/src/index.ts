import { app } from "./app";
import { addProduct }  from './endpoints/products/addProduct'
import { getAllProducts } from "./endpoints/products/getAllProducts";
import { getProductById } from "./endpoints/products/getProductById";
import { newPurchase } from "./endpoints/transactions/newPurchase";
import { addUser } from "./endpoints/users/addUser";
import { getAllUsers } from "./endpoints/users/getAllUsers";
import { getUserPurchases } from "./endpoints/users/getUserPurchases";

//ADD USER
app.post("/users", addUser)

//GET ALL USERS
app.get("/users", getAllUsers)

//ADD PRODUCT
app.post("/products", addProduct)

//GET ALL PRODUCTS
app.get("/products", getAllProducts)

//GET PRODUCT BY ID
app.get("/products/:id", getProductById)

//NEW PURCHASE
app.post("/purchases", newPurchase)

//GET USER PURCHASES
app.get("/:user_id/purchases", getUserPurchases)


