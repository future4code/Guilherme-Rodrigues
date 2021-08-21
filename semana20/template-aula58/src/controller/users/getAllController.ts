import { Request, Response } from "express"
import { getAllBusiness } from "../../business/users/getAllBusiness"

export const getAllController = async ( req: Request, res: Response ): Promise<void> => {
   try {

    const userToken = req.headers.authorization as string

      const users = await getAllBusiness({
        userToken,
      })

      res.send({
         message: "Lista de usuários",
         users
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}
