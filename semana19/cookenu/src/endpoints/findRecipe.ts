import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipebyId(req: Request, res: Response): Promise<void> {
   try {

      const token = req.headers.authorization as string;
      const id = req.params.id
    

      const tokenData = new Authenticator()
      const getTokenData = tokenData.getTokenData(token)

      if(!getTokenData){
         res.statusCode = 401;
         throw new Error("Unauthorized");
      }

      const [recipe] =  await connection.raw(`
      SELECT id, title, description,
      DATE_FORMAT((FROM_UNIXTIME(MAX(created_at/1000))),'%d/%m/%Y') AS created_at
      FROM aula49_recipes
      WHERE id = '${id}'
      `)
     
      res.status(200).send(recipe)
      
   }
   catch (error){
      res.status(404).send(error.sqlMessage || error.message)
   }
}