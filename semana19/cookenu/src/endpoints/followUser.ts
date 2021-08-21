import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export default async function followUser(req: Request, res: Response): Promise<void> {
   try {

      const token = req.headers.authorization as string;
      const {follow} = req.body
    

      const tokenData = new Authenticator()
      const getTokenData = tokenData.getTokenData(token)

      if(!getTokenData){
         res.statusCode = 401;
         throw new Error("Unauthorized");
      }

      if(!follow){
        res.statusCode = 422;
        throw new Error("É preciso inserir um id de um usuario para segui-lo");
      }

      const newFollower = {user_id: getTokenData.id, follower_id: follow}

      await connection("followers")
      .insert(newFollower)
     
      res.status(200).send({Message: "Followed successfully"})

   }
   catch (error){
      res.status(404).send(error.sqlMessage || error.message)
   }
}