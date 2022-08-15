const fs = require('fs')


const saveData = fs.readFileSync(__dirname + "/save.json")
let tasks = JSON.parse(saveData)
const newTask = process.argv[2]



const addTask = (tasks, newTask) => {
  tasks.push(newTask)
  const tasksString = JSON.stringify(tasks)
  
  fs.writeFileSync(__dirname + "/save.json", tasksString)

  return (`Tarefa adicionada com sucesso!\nTarefas: ${tasks} `)
}

console.log(addTask(tasks, newTask))