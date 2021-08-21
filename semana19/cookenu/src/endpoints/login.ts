import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { userLogin } from "../services/checkInputs";
import { hashManager } from "../services/hashManager";
import getUser from "./getUser";

export default async function logIn(req: Request, res: Response): Promise<void> {
   try {

      const {email, password} = req.body
      

      userLogin(email, password)

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         res.statusCode = 422
         throw new Error("O campo de'email' é inválido")
      }

      const [user] =  await connection("aula49_users")
          .where({ email });
       

       const hm = new hashManager()
       const compare = await hm.compare(password, user.password)

       if(!compare){
        throw new Error("Invalid password");
       }
      
      const auth = new Authenticator();

      const token = auth.generateToken({ id: user.id });

      res.status(201).send({ token })

   }
   catch (error){
      res.status(404).send(error.message || error.sqlMessage)
   }
}