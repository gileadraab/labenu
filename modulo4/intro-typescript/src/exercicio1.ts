const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
const c: number = Number(process.argv[4])


function checaTriangulo(a: number, b: number, c: number) : string  {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
}

console.log(checaTriangulo(a, b, c))
