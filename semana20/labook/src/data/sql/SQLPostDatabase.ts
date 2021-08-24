import { PostRepository } from "../../business/PostRepository";
import { Post } from "../../model/Post";
import { BaseDatabase } from "./SQLBaseDatabase";

export class SQLPostDatabase extends BaseDatabase implements PostRepository {

  private static TABLE_NAME = "POST_LABOOK"
  
  async create(post: Post) {
    await this.getConnection().insert({
      id: post.getId(),
      photo: post.getPhoto(),
      description: post.getDescription(),
      type: post.getType(),
      created_at: post.getCreationTime(),
      author_id: post.getAuthor()
    }).into(SQLPostDatabase.TABLE_NAME)
  }

  async findPost(postId: string): Promise<Post | undefined> {
    const result = await this.getConnection()
      .select()
      .from(SQLPostDatabase.TABLE_NAME)
      .where({id: postId})

    if(!result[0]) return undefined
    
    const {id, photo, description, type, created_at, author_id} = result[0]
    return new Post(id, photo, description, type, created_at, author_id)
  }
}
