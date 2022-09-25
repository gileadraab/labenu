export enum USER_ROLES{
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export type IUserDB = {
  id: string
  email: string
  password: string
  role: USER_ROLES
}

export type IRecipeDB = {
  id: string
  title: string
  description: string
  date_created: Date
  userId: string
}