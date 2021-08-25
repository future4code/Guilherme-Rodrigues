import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { UserDatabase } from "../data/UserDatabase";


export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const userBusiness =
         new UserBusiness(
            new IdGenerator(),
            new HashGenerator(),
            new TokenGenerator(),
            new UserDatabase());

         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body;
         const userBusiness = new UserBusiness(
         new IdGenerator(),
         new HashGenerator(),
         new TokenGenerator(),
         new UserDatabase());
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async profile(req: Request, res: Response) {
      try {
         const { id } = req.params;
         const userBusiness = new UserBusiness(
         new IdGenerator(),
         new HashGenerator(),
         new TokenGenerator(),
         new UserDatabase());
         const result = await userBusiness.profile(id);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
}

export default new UserController()