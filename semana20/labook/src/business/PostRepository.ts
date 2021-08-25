import { Post } from "../model/Post";

export interface PostRepository {
  create(post: Post): Promise<void>
  findPost(id: string): Promise<Post | undefined>
}