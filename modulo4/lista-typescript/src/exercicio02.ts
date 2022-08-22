const param: any = process.argv[2]

function typeOfVariable (param: any) {
  console.log("A variável é do tipo:", typeof param)
}

typeOfVariable(param)