import express from 'express';
import { createNewProduct, getProducts } from '../controllers/productController';
import { createNewTicket, getTickets } from '../controllers/ticketController';
import { createNewUser, getUsers } from '../controllers/userController';

const Router = express.Router();

Router.get('/users', getUsers)
Router.post('/users', createNewUser)
Router.get('/products', getProducts)
Router.post('/products', createNewProduct)
Router.get('/tickets', getTickets)
Router.post('/tickets', createNewTicket)

export default Router