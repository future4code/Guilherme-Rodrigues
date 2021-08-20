import express from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { SQLPostDatabase } from '../data/sql/SQLPostDatabase'

export const postRouter = express.Router()

const postDatabase = new SQLPostDatabase()
const postBusiness = new PostBusiness(postDatabase)
const postController = new PostController(postBusiness)

postRouter.post("/new", (req, res) => postController.createPost(req, res))
postRouter.get("/:id", (req, res) => postController.getPost(req, res))
