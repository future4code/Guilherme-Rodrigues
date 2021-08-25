import { User } from "../model/User"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { UserRepository } from "./UserRepository"

export class UserBusiness {
  private userDatabase: UserRepository
  constructor(userDatabase: UserRepository) {
    this.userDatabase = userDatabase
  }

  async signup({ email, name, password }: any) {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hash = await hashManager.hash(password)

    const user = new User(
      id,
      name,
      email,
      hash
    )

    await this.userDatabase.create(user)

    const tokenManager = new TokenManager()
    const token = tokenManager.generate({ id })

    return token
  }

  async login({ email, password }: any) {
    if (!email || !password) {
      throw new Error("Email ou senha inválidos")
    }

    const user = await this.userDatabase.findByEmail(email)

    if(!user) {
      throw new Error("Usuário não encontrado")
    }

    const hashManager = new HashManager()
    const isAuth = await hashManager.compare(password, user.getPassword())

    if (!isAuth) {
      throw new Error("Email ou senha inválidos")
    }

    const tokenManager = new TokenManager()
    const token = tokenManager.generate({ id: user.getId() })

    return token
  }
}
