import { UserRepository } from "../../business/UserRepository";
import { User } from "../../model/User";
import { BaseDatabase } from "./SQLBaseDatabase";

export class SQLUserDatabase extends BaseDatabase implements UserRepository {

  private static TABLE_NAME = "USERS_LABOOK"
  
  async create(user: User) {
    await this.getConnection().insert({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword()
    }).into(SQLUserDatabase.TABLE_NAME)
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const result = await this.getConnection()
      .select()
      .from(SQLUserDatabase.TABLE_NAME)
      .where({ email })

    if(!result[0]) return undefined
    
    const {id, name, email: userEmail, password} = result[0]
    return new User(id, name, userEmail, password)
  }
}
