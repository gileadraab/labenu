import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type User = {
  id: number,
  name: string,
  cpf: number,
  birthDate: number,
  
}

type Account = {
  id: number,
  user: string,
  email: string,
  type: string,
  age: number
}


app.post('/',(req: Request, res: Response) => {

})