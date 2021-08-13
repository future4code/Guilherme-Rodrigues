import app from "./app"
import createRecipe from "./endpoints/createRecipe"
import createUser from './endpoints/createUser'
import getRecipebyId from "./endpoints/findRecipe"
import getUserbyId from "./endpoints/findUser"
import followUser from "./endpoints/followUser"
import getUser from "./endpoints/getUser"
import logIn from "./endpoints/login"
import unfollowUser from "./endpoints/unfollowUser"

app.post('/signup', createUser)
app.get('/user/profile', getUser)
app.get('/user/:id', getUserbyId)
app.get('/recipe/:id', getRecipebyId)
app.post('/login', logIn)
app.post('/recipe', createRecipe)
app.post('/user/follow', followUser)
app.post('/user/unfollow', unfollowUser)

