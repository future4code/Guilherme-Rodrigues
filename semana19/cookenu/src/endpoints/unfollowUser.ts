import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export default async function unfollowUser(req: Request, res: Response): Promise<void> {
   try {

      const token = req.headers.authorization as string;
      const {unfollow} = req.body
    

      const tokenData = new Authenticator()
      const getTokenData = tokenData.getTokenData(token)

      if(!getTokenData){
         res.statusCode = 401;
         throw new Error("Unauthorized");
      }

      if(!unfollow){
        res.statusCode = 422;
        throw new Error("É preciso inserir um id de um usuario para segui-lo");
      }

      const userId = getTokenData.id

      await connection("followers")
      .delete(userId)
      .where("user_id", userId)
      .andWhere("follower_id", unfollow)
     
      res.status(200).send({Message: "Unfollowed successfully"})

   }
   catch (error){
      res.status(404).send(error.sqlMessage || error.message)
   }
}