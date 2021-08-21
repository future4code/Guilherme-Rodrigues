import { compare } from "bcryptjs"
import { deleteUser } from "../../data/users/deleteUser"
import { getAllUsers } from "../../data/users/getAllUsers"
import { generateToken, getTokenData } from "../../services/authenticator"
import { user } from "../../types/user"


export const deleteUserBusiness = async ({ userToken, id }: any) => {

      if (!userToken || !id) {
         throw new Error("É necessário um token de acesso")
      }

      const validateUser = getTokenData(userToken)  

      if(!validateUser){
         throw new Error("Acesso não autorizado");
      }

      await deleteUser(id)
}
