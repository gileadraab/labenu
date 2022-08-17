import express, { Request, Response } from 'express'
import cors from "cors";
import { Produto, produtos } from './data';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//EXERCÍCIO 01
app.get("/test", (req: Request, res: Response) => {
  res.send("A API está funcionando corretamente")
})

//EXERCÍCIO 03
app.post("/add", (req: Request, res: Response) => {
  try {
    const newProduct: Produto = {
      id: String(Date.now()),
      name: req.body.name,
      price: req.body.price
    }

    if(!req.body){
      res.statusCode = 401
      throw new Error("Request must contain a body")
    }

    if (typeof (req.body.price) !== "number"){
      res.statusCode = 401
      throw new Error("'price' must be a number")
    }

    if (typeof (req.body.name) !== "string"){
      res.statusCode = 401
      throw new Error("'name' must be a string")
    }

    if (req.body.price <= 0){
      res.statusCode = 401
      throw new Error("price must be higher than 0")
    }

    if (!req.body.name || !req.body.price){
      res.statusCode = 401
      throw new Error("Request body must contain all parameters")
    }

    produtos.push(newProduct)
    res.send(produtos)

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})

//EXERCÍCIO 04
app.get("/products", (req: Request, res: Response) => {
  res.send(produtos)
})

//EXERCÍCIO 05
app.put("/editprice/:productid", (req: Request, res: Response) => {
  try {
    const id = String(req.params.productid)
    const newPrice = req.body.price

    if(!req.body.price){
      res.statusCode = 401
      throw new Error("'price' must have a value assigned")
    }

    if (typeof (req.body.price) !== "number"){
      res.statusCode = 401
      throw new Error("'price' must be a number")
    }

    if (req.body.price <= 0){
      res.statusCode = 401
      throw new Error("price must be higher than 0")
    }

    const newProductsArray = produtos.filter((produto) => {
      if (produto.id == id){
        produto.price = newPrice
        return produto
      } else {
        return produto
      }
    })
    
    res.send(newProductsArray)

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})

//EXERCICIO 06
app.delete("/products/:productId", (req: Request, res: Response) => {
  const productId = req.params.productId

  const updatedProductsArray = produtos.filter((produto) => {
    return produto.id !== productId
  })
  res.send(updatedProductsArray)
})
