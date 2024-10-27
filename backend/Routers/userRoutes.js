const express = require('express');
const userRoutes = express.Router();

//importing Controllers
const {createUser,getAllUser,loginUser,deleteUser,updateUser} = require('../Controllers/userController');

//Middlewares
const checkAuthentication = require('../Middleware/auth')

    userRoutes.post('/users',createUser);
    userRoutes.get('/users',getAllUser);
    userRoutes.post('/users/auth',loginUser);
    userRoutes.delete('/users/:id',checkAuthentication,deleteUser)
    userRoutes.put('/users/:id',checkAuthentication,updateUser)

module.exports=userRoutes;