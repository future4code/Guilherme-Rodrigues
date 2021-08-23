import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";


export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  async createPost(req: Request, res: Response) {
    try {
      const { photo, description, type } = req.body
      const userToken = req.headers.authorization as string

      await this.postBusiness.createPost({ photo, description, type }, userToken)

      res.send({
        message: "Post criado com sucesso",
      })
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async getPost(req: Request, res: Response) {
    try {
      const userToken = req.headers.authorization as string
      const { id } = req.params;

      const post = await this.postBusiness.getPost(id, userToken)

      res.send({
        post
      })
    } catch (error) {
      res.status(error.statusCode || 400).send(error.message)
    }
  }
}
