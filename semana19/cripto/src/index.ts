import app from "./app"
import createUser from './endpoints/createUser'
import getUser from "./endpoints/getUser"
import logIn from "./endpoints/login"

app.post('/user', createUser)
app.get('/user', getUser)
app.post('/login', logIn)

