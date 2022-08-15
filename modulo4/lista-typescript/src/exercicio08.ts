const birthDate: string[] = process.argv[2].split("/")
const docEmission: string[] = process.argv[3].split("/")
 
function checkForRenewal(birthDate: string[], docEmission: string[]) : boolean {
  const timestampCurrentDate: number = new Date().getTime()
  const timestampBirthDate: number = new Date(`${birthDate[2]}-${birthDate[1]}-${birthDate[0]}T00:00:00`).getTime()
  const timestampDocEmission: number = new Date(`${docEmission[2]}-${docEmission[1]}-${docEmission[0]}T00:00:00`).getTime()
  const oneYearInTimestamp: number = 365*24*60*60*1000

  const userAge: number = timestampCurrentDate - timestampBirthDate
  const documentAge: number = timestampCurrentDate - timestampDocEmission

  if (userAge <= (oneYearInTimestamp * 20) && documentAge >= (oneYearInTimestamp * 5) ) {
    return true
  } else if (userAge > (oneYearInTimestamp * 20) && userAge <= (oneYearInTimestamp * 50) && documentAge >= (oneYearInTimestamp * 10)){
    return true
  } else if (userAge > (oneYearInTimestamp * 50) && documentAge >= (oneYearInTimestamp * 10) && documentAge >= (oneYearInTimestamp * 15)){
    return true
  } else {
    return false
  }
}

console.log(checkForRenewal(birthDate, docEmission))