import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export default async function getUser(req: Request, res: Response): Promise<void> {
   try {

      const token = req.headers.authorization as string;

      const tokenData = new Authenticator()
      const getTokenData = tokenData.getTokenData(token)

      if(!getTokenData){
         res.statusCode = 401;
         throw new Error("Unauthorized");
      }

      const [user] =  await connection("aula49_users")
          .select("id","name", "email")
          .where({id: getTokenData.id});
     
      res.status(200).send(user)

   }
   catch (error){
      res.status(404).send(error.sqlMessage || error.message)
   }
}