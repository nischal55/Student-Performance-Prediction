const express = require('express');
const studentRoutes = express.Router();

const {createStudents,getStudents,deleteStudent,updateStudent,getOneStudent} = require('../Controllers/studentController');
const checkAuthentication = require('../Middleware/auth');

    studentRoutes.get('/students/:id',getStudents);
    studentRoutes.post('/students',createStudents);
    studentRoutes.put('/students/:id',updateStudent);
    studentRoutes.delete('/students/:id',deleteStudent)
    studentRoutes.get('/student/:id',getOneStudent)

module.exports = studentRoutes;