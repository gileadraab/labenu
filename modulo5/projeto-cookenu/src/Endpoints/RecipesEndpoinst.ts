import { Request, Response } from "express"; 
import { IdGenerator } from "../Services/IdGenerator";
import { Authenticator, TokenPayload } from "../Services/Authenticator";
import { NotAuthorized } from "../Error/NotAuthorized";
import { Recipe } from "../Model/Recipe";
import { RecipeDataBase } from "../Data/RecipeDatabase";
import { NotFound } from "../Error/NotFound";

export class RecipeEndpoint {
  //ADD NEW RECIPE
  newRecipe = async(req: Request, res: Response) => {
    try{
      const token = req.headers.authorization as string
      const {title, description} = req.body

      if(!token){
        throw new NotAuthorized()
      }

      //Check if token is valid
      const payload: TokenPayload = new Authenticator().verifyToken(token)

      if(!payload){
        throw new NotAuthorized()
      }

      //Generate new ID
      const newId = new IdGenerator()
      const id = newId.createId()

      //Get date_created
      const dateInTimestamp = Date.now()
      const [month, day, year] = new Date(dateInTimestamp).toLocaleDateString().split("/")
      const date = `${year}-${month}-${day}`
      
      //Get user_id
      const userId = payload.id

      const recipe = new Recipe(id, title, description, date, userId)

      const recipeDataBase = new RecipeDataBase()
      await recipeDataBase.createRecipe(recipe)

      res.status(201).send({message: "Receita cadastrada com suceso!"})

    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  } 
  
  //GET RECIPE BY ID
  getRecipe = async(req: Request, res: Response) => {
    try{
      const token = req.headers.authorization as string
      const id = req.params.id

      if(!token){
        throw new NotAuthorized()
      }

      //Check if token is valid
      const payload: TokenPayload = new Authenticator().verifyToken(token)

      if(!payload){
        throw new NotAuthorized()
      }

      //search recipe by id
      const recipeDataBase = new RecipeDataBase()
      const recipeDB = await recipeDataBase.searchRecipeById(id)

      //check if recipe exists
      if (!recipeDB){
        throw new NotFound()
      }
      
      //format the way the recipe is displayed
      const d = recipeDB.date_created
      const createdAt = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`

      const recipe = {
        id: recipeDB.id,
        title: recipeDB.title,
        description: recipeDB.description,
        createdAt: createdAt
      }

      //display recipe
      res.status(201).send({recipe})

    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  } 
}