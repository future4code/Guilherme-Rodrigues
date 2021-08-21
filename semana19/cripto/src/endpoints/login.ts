import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { hashManager } from "../services/hashManager";
import getUser from "./getUser";

export default async function logIn(req: Request, res: Response): Promise<void> {
   try {

      const userData = {
       email: req.body.email,
       password: req.body.password
      }



      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         res.statusCode = 422
         throw new Error("O campo de'email' é inválido")
      }

      //const idg = new IdGenerator()

      const getUserByEmail = async(email: string): Promise<any> => {
        const result = await connection
          .select("*")
          .from("users_e55")
          .where({ email });
     
        return result[0];
       }

       const user = await getUserByEmail(userData.email);

       const compare = new hashManager().compare(userData.password, user.password)

       if(!compare){
        throw new Error("Invalid password");
       }

      //sempre depois da transação com o banco
      
      const auth = new Authenticator();

      const token = auth.generateToken({ id: user.id });

      res.status(201).send({ token })

   }
   catch (error){
      res.status(404).send(error.message || error.sqlMessage)
   }
}