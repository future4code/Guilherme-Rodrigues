import { Post } from "../model/Post"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { PostRepository } from "./PostRepository"

export class PostBusiness {
  private postDatabase: PostRepository
  constructor(postDatabase: PostRepository) {
    this.postDatabase = postDatabase
  }

  async createPost({ photo, description, type }: any, token: string) {
    const tokenManager = new TokenManager().getData(token);
    const author_id = tokenManager.id

    if (!photo || !description || !type) {
      throw new Error("Dados inválidos (photo, description, type)")
    }
    
    if (!tokenManager) {
      throw new Error("Unauthorized");
    }

    if(type === "normal" || type === "event"){
      
      const idGenerator = new IdGenerator()
      const id = idGenerator.generate()
      const created_at = new Date().getTime()
      
      const post = new Post(
        id,
        photo,
        description,
        type,
        created_at,
        author_id
        )
        
        await this.postDatabase.create(post)
        
        return post
      }
      else{
        throw new Error("Dados inválidos type deve ser apenas normal ou event")
      }
    }

  async getPost(postId: string, token: string) {
    if (!postId) {
      throw new Error("É necessário um id para realizar a pesquisa")
    }
    const tokenManager = new TokenManager().getData(token);
    const authorization = tokenManager.id

    if (!authorization) {
      throw new Error("Usuario não tem autorização para procurar")
    }

    const post = await this.postDatabase.findPost(postId)

    if(!post) {
      throw new Error("Post não encontrado")
    }

    return post
  }
}
