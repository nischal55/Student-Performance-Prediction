const express = require('express');
const examRoutes = express.Router();

const {getRecords,newRecord,getStudentsAndAcademmics,updateExam,deleteExam,getOneExam} = require('../Controllers/examController')

    examRoutes.get("/exam",getRecords);
    examRoutes.post('/exam',newRecord);
    examRoutes.get("/examAndStudents",getStudentsAndAcademmics)
    examRoutes.put("/exam/:id",updateExam)
    examRoutes.delete("/exam/:id",deleteExam)
    examRoutes.get("/exam/:id",getOneExam)
    

module.exports = examRoutes