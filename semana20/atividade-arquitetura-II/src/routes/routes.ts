import express from 'express';
import { createTask } from "../controller/task/createTask";
import { getTaskById } from "../controller/task/getTaskById";
import { login } from "../controller/user/login";
import { signup } from "../controller/user/signup";

const Router = express.Router();

Router.post('/user/signup', signup)
Router.post('/user/login', login)

Router.put('/task', createTask)
Router.get('/task/:id', getTaskById)

export default Router 
