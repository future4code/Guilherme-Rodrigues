import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { IdGenerator } from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator";
import { hashManager } from "../services/hashManager";
import { userRegistration } from "../services/checkInputs";

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {

      const { name, email, password } = req.body

      userRegistration(name, email, password)

      const id: string = new IdGenerator().generateId();

      const hashPassword = new hashManager()

      const cryptoPassword = await hashPassword.generateHash(password)

      const newUser: user = { id, name, email, password: cryptoPassword }

      await connection('aula49_users')
         .insert(newUser);

      const auth = new Authenticator();

      const token = auth.generateToken({ id: newUser.id });

      res.status(201).send({ token })

   }
   catch (error){
      res.status(404).send( error.sqlMessage || error.message)
   }
}