import { Request, Response } from "express";
import connection from "../connection";
import { recipe, user } from "../types";
import { IdGenerator } from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator";
import { hashManager } from "../services/hashManager";
import { recipeRegistration } from "../services/checkInputs";

export default async function createRecipe(req: Request, res: Response): Promise<void> {
   try {

      const userToken = req.headers.authorization as string;
      const {title, description} = req.body
      const tokenData = new Authenticator()
      const getTokenData = tokenData.getTokenData(userToken)

      if(!getTokenData){
         res.statusCode = 401;
         throw new Error("Unauthorized");
      }

      recipeRegistration(title, description)

      const id: string = new IdGenerator().generateId();

      const date = new Date().getTime()

      const newRecipe: recipe = { id, title, description, user_id: getTokenData.id, created_at: date}

      await connection('aula49_recipes')
         .insert(newRecipe);


      res.status(201).send({ Message: "Receita adicionada com sucesso" })

   }
   catch (error){
      res.status(404).send( error.sqlMessage || error.message)
   }
}