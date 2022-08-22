enum ROLE {
  USER = "user",
  ADMIN = "admin"
}

type user = {
  name: string,
  email: string
  role: ROLE
}

const users = [
  {name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function searchAdmins (users: user[]) {
  const admins = users.filter((user) => {
    if (user.role == ROLE.ADMIN) {
      return user
    }
  })

  const adminsEmails = admins.map((user) => {
    return user.email
  })

  return adminsEmails
}
console.log(searchAdmins(users))