enum HistoricalAge {
  PRE = "Pré-história",
  ANCIENT = "Idade Antiga",
  MIDLE = "Idade Média",
  MODERN = "Idade Moderna",
  CONTEMPORARY = "Idade Contemporânea",
}

function defineHistoricalAge(year: number, acdc: string) : string {
  if (!year || (acdc !== "ac" && acdc !== "dc")){
    return "Verifique os parâmetros inseridos" 
  } else {
    if( year > 4000 && acdc == "ac") {
      return HistoricalAge.PRE
    } else if((year <= 4000 && year > 0 && acdc == "ac") || (year >= 0 && year < 476 && acdc == "dc")){
      return HistoricalAge.ANCIENT
    } else if (year >= 476 && year < 1453 && acdc == "dc"){
      return HistoricalAge.MIDLE
    } else if (year >= 1453 && year < 1789 && acdc == "dc"){
      return HistoricalAge.MODERN
    } else {
      return HistoricalAge.CONTEMPORARY
    }
  }
}
  
console.log(defineHistoricalAge(Number(process.argv[2]), process.argv[3].toLowerCase()))