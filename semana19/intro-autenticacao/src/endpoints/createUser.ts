import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { IdGenerator } from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator";

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {

      const { email, password } = req.body



      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      if (!email.includes("@") || email === "") {
         throw new Error("email inválido");
      }

      if (password.length < 6) {
         throw new Error("senha muito pequena, 6 digitos ou mais");
      }
      //const idg = new IdGenerator()

      const id: string = new IdGenerator().generateId();

      const newUser: user = { id, email, password }

      await connection('users_e55')
         .insert(newUser);

      //sempre depois da transação com o banco
      const auth = new Authenticator();

      const token = auth.generateToken({ id: newUser.id });

      res.status(201).send({ token })

   }
   catch (error){
      res.status(404).send(error.message || error.sqlMessage)
   }
}