import { Request, Response } from "express";
import connection from "../connection";
import { hashManager } from "../services/hashManager";

export default async function getUser(req: Request, res: Response): Promise<void> {
   try {

      const email = req.body.email



      if (!email) {
         res.statusCode = 422
         throw new Error("Preencha o campo de'email'")
      }

      //const idg = new IdGenerator()

      const getUserByEmail = async(email: string): Promise<any> => {
        const result = await connection
          .select("*")
          .from("users_e55")
          .where({ email });
     
        return result[0];
       }
     
        const getInfo = await getUserByEmail(email)

      //sempre depois da transação com o banco


      res.status(200).send(getInfo)

   }
   catch (error){
      res.status(404).send(error.message || error.sqlMessage)
   }
}