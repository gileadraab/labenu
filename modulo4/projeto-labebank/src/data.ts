export type Transaction = {
  ammount: number,
  date: Date,
  description: string 
}

export type Account = {
  id: number,
  name: string,
  cpf: number,
  birthDate: Date,
  balance: number,
  statement: Transaction[] 
}

export const accounts: Account[] = [

]


