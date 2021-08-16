import { compare } from "bcryptjs"
import { selectUserByEmail } from "../../data/users/selectUserByEmail"
import { generateToken } from "../../services/authenticator"
import { user } from "../../types/user"


export const loginBusiness = async ({ email, password }: any) => {

      if (!email || !password) {
         throw new Error("'email' e 'senha' são obrigatórios")
      }

      const user: user | null = await selectUserByEmail(email)

      if (!user) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const token: string = generateToken({
         id: user.id,
         role: user.role
      })

    return token
}
