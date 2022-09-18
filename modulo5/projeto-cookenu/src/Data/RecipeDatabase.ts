import { Recipe } from "../Model/Recipe";
import { IRecipeDB} from "../types";
import { BaseDataBase } from "./BaseDatabase";

export class RecipeDataBase extends BaseDataBase{

  //ADD RECIPE TO DB
  createRecipe = async (recipe: Recipe) => {
    await this.getConnetion()
    .insert({
      id: recipe.getId(),
      title: recipe.getTitle(),
      description: recipe.getDescription(),
      date_created: recipe.getDateCreated(),
      user_id: recipe.getUserId()
    }).
    into("cookenu_recipes")

    return "Receita adicionada com sucesso."
  }

  //SEARCH RECIPE BY ID
  searchRecipeById = async(id: string): Promise<IRecipeDB | undefined> => {
    const result: IRecipeDB[] = await this.getConnetion()
    .select("id", "title", "description", "date_created")
    .from("cookenu_recipes")
    .where({id})

    return result[0]
  }
}