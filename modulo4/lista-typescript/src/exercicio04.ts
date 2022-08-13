enum SECTOR {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro"
}

type employee = {
  nome: string,
  salário: number,
  setor: SECTOR,
  presencial: boolean
}

const employees = [
	{ nome: "Marcos", salário: 2500, setor: SECTOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SECTOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SECTOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SECTOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SECTOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SECTOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SECTOR.MARKETING, presencial: true }
]

function findPresentialEmployees (employees: employee[]) : employee[] {
  const presentialEmployees = employees.filter((employee) => {
    return employee.setor == SECTOR.MARKETING && employee.presencial == true
  })
  return presentialEmployees
}

console.log(findPresentialEmployees(employees))