import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express"


dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//CREATE USER
app.post("/user", async (req: Request, res: Response) => {
  try {
    const id: string = Date.now().toString()
    await connection("to_do_list_users").insert({
      id: id,
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email
    })

    res.send("Usuario cadastrado com sucesso")
  } catch (error) {
    res
      .status(500)
      .send("Um erro inesperado aconteceu");
  }
})

//GET USER BY ID
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
          SELECT * FROM to_do_list_users
          WHERE id = "${req.params.id}" 
      `)
    
    if (!result.length){
      res.statusCode = 401
      throw new Error("Usuário não encontrado")
    }
    res.send(result)
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message });
  }
})


//EDIT USER
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    if (
      !req.body.name ||
      !req.body.nickname ||
      !req.body.email
    ) {
      res.statusCode = 400
      throw new Error("Todos os valores solicitados devem ser enviados no body")     
    }

    await connection("to_do_list_users").update({
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email
    }).where({
      id: req.params.id
    })

    res.send("Usuario alterado com sucesso")
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message });
  }
})

//CREATE TASK
app.post("/task", async (req: Request, res: Response) => {
  try {

    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.deadline
    ) {
      res.statusCode = 400
      throw new Error("Todos os valores solicitados devem ser enviados no body")     
    }

    const id: string = Date.now().toString()

    const deadlineUnchanged = req.body.deadline
    const [day, month, year] = deadlineUnchanged.split('/')
    const deadline: Date = new Date (`${year}-${month}-${day}`)

    await connection("to_do_list_tasks").insert({
      id: id,
      name: req.body.name,
      description: req.body.description,
      deadline: deadline,
      status: req.body.status,
    })

    res.send("Tarefa cadastrada com sucesso")
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message });
  }
})

//GET TASK BY ID
app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
          SELECT * FROM to_do_list_tasks
          WHERE id = "${req.params.id}" 
      `)
    
    if (!result.length){
      res.statusCode = 401
      throw new Error("Tarefa não encontrado")
    }
    res.send(result)
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message });
  }
})