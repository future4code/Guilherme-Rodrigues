import { Request, Response } from "express"
import { deleteUserBusiness } from "../../business/users/deleteUserBusiness"
import { getAllBusiness } from "../../business/users/getAllBusiness"

export const deleteUserController = async ( req: Request, res: Response ): Promise<void> => {
   try {

    const id = req.params.id
    const userToken = req.headers.authorization as string

      await deleteUserBusiness({
        id,
        userToken
      })

      res.send({
         message: "Usuário apagado com sucesso",
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}
