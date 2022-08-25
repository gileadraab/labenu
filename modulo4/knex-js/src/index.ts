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


// Exercicio 1
// b)
app.get("/actor/:name", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
          SELECT * FROM Actor
          WHERE name = "${req.params.name}" 
      `)
    res.send(result)
  } catch (error) {
    res
      .status(500)
      .send("Ocorreu um erro");
  }
})

//c
app.get("/actor/:gender", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
      SELECT * FROM Actor
      WHERE gender = "${req.params.gender}" 
    `)
    res.send(result)
  } catch (error) {
    res
      .status(500)
      .send("Ocorreu um erro");
  }
})

// Exercicio 2
//a)
app.put("/actor/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor").update({
      salary: req.body.salary
    }).where({
      id: req.params.id
    })

    res.send("salário atualizado!")
  } catch (error) {
    res
      .status(500)
      .send("Um erro inesperado aconteceu");
  }
})

//b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor").delete()
      .where({ 
      id: req.params.id
    })

    res.send("Ator deletado")
  } catch (error) {
    res
      .status(500)
      .send("Um erro inesperado aconteceu");
  }
})

//c)
app.get("/actor/:gender", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
      SELECT AVG(salary) FROM Actor
      WHERE gender = "${req.params.gender}" 
    `)
    res.send(result)
  } catch (error) {
    res
      .status(500)
      .send("Um erro inesperado aconteceu");
  }
})

//Exercício 03
//a)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
          SELECT * FROM Actor
          WHERE id = "${req.params.id}" 
      `)
    res.send(result)
  } catch (error) {
    res
      .status(500)
      .send("Ocorreu um erro");
  }
})

//b)
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
          SELECT COUNT(*) FROM Actor
          WHERE gender = "${req.query.gender as string}" 
      `)
    res.send(result)
  } catch (error) {
    res
      .status(500)
      .send("Ocorreu um erro");
  }
})

//Exercício 04
//a)
app.put("/actor/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor").update({
      salary: req.body.salary
    }).where({
      id: req.params.id
    })

    res.send("salário atualizado!")
  } catch (error) {
    res
      .status(500)
      .send("Um erro inesperado aconteceu");
  }
})

