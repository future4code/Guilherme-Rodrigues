import { compare } from "bcryptjs"
import { getAllUsers } from "../../data/users/getAllUsers"
import { generateToken, getTokenData } from "../../services/authenticator"
import { user } from "../../types/user"


export const getAllBusiness = async ({ userToken }: any) => {

      if (!userToken) {
         throw new Error("É necessário um token de acesso")
      }

      const validateUser = getTokenData(userToken)  

      if(!validateUser){
         throw new Error("Acesso não autorizado");
      }

      const user: user | null = await getAllUsers()

    return user
}
