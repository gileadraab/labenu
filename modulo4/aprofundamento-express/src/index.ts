import express, { Request, Response } from 'express'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//EXERCÍCIO 01
app.get("/ping", (req: Request, res: Response) => {
  res.send("pong")
})

//EXERCÍCIO 02
type ToDo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

//EXERCÍCIO 03
let toDoList: ToDo[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  }
]

//EXERCÍCIO 04
app.get("/tasks/:doneornot", (req: Request, res: Response) => {
  if (req.params.doneornot === "done"){
    const completedTasks = toDoList.filter((task) => {
      if (task.completed) {
        return task
      } 
    })
    res.send(completedTasks)
  } else if (req.params.doneornot === "todo"){
    const uncompletedTasks = toDoList.filter((task) => {
      if (!task.completed) {
        return task
      } 
    })
    res.send(uncompletedTasks)
  }
})

//EXERCÍCIO 05
app.post("/tasks", (req: Request, res: Response) => {
  const {userId, title, completed } = req.body
  toDoList.push({
    userId: userId,
    id: Date.now(),
    title: title,
    completed: completed
  })
  res.send(toDoList)
})

//EXERCÍCIO 06
app.put("/tasks/:taskId", (req: Request, res: Response) => {
  const taskId = Number(req.params.taskId)
  const updatedTasksArray = toDoList.filter((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed
        return task
      } else {
        return res.status(400).send("Task not found")
      }
  })
  toDoList = updatedTasksArray
  res.send(toDoList)
})

//EXERCICIO 07
app.delete("/tasks/:taskId", (req: Request, res: Response) => {
  const taskId = Number(req.params.taskId)
  
  const updatedTasksArray = toDoList.filter((task) => {
    return task.id !== taskId
  })
  toDoList = updatedTasksArray
  res.send(toDoList)
})

//EXERCICIO 08
app.get("/tasks/:userId", (req: Request, res: Response) => {
  const userId = Number(req.params.userId)

  const userList = toDoList.filter((task) => {
      if(task.userId === userId){
          return task
      }
  })
  res.send(userList)
})