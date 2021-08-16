import express from 'express';
import { deleteUserController } from '../controller/users/deleteUserController';
import { getAllController } from '../controller/users/getAllController';
import { loginController } from '../controller/users/loginController';
import { signupController } from "../controller/users/signupController"
import { getTaskById } from "../endpoints/getTaskById"

const Router = express.Router();

Router.post('/users/signup', signupController)
Router.get('/users/login', loginController)
Router.get('/all', getAllController)
Router.delete('/:id', deleteUserController)


export default Router  
