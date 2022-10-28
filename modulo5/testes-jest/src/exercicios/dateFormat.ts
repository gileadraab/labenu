//Crie uma função que recebe uma data no formato “aaaa/mm/dd” e retorna outra string no formato “dd/mm/aaaa”.

export const dateFormat = (date: string) : string => {
  const [year, month, day] = date.split("/")
  const formattedDate = `${day}/${month}/${year}`

  return formattedDate
}