const Exam = require('../Models/ExamModel');

const newRecord = async(req,res)=>{
   try{
    let exam = await Exam.create({...req.body});
    if(exam){
        res.send("Successfully Recorded")
    }
   }catch(e){
    res.status(500).send(e);
   }
}

const getRecords = async(req,res)=>{
    try{
        let exam = await Exam.find();
        res.send(exam);
    }catch(e){
        res.status(500).send(e)
    }

}

const getStudentsAndAcademmics = async(req,res) =>{
    try{
        let exam = await Exam.find().populate('studentId')
        res.send(exam)
    }catch(e){
        res.status(500).send(e)
    }
}

const updateExam = async(req,res)=>{
    try{
        let exam = await Exam.findByIdAndUpdate(req.params.id,{...req.body},{ new: true, runValidators: true })
        res.send("Update Successfully")
    }catch(e){
        res.status(500).send(e)
    }
}

const deleteExam = async(req,res)=>{
    try{
        let exam  = await Exam.findByIdAndDelete({_id:req.params.id});
        res.send("Deleted Successfully")
    }catch(e){
        res.status(500).send(e)
    }
}

const getOneExam = async(req,res)=>{
    try{
        let exam = await Exam.findOne({_id:req.params.id}).populate('studentId')
        res.send(exam)
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports ={
    newRecord,
    getRecords,
    getStudentsAndAcademmics,
    updateExam,
    deleteExam,
    getOneExam
}