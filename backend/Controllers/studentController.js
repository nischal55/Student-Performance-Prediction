const Student = require('../Models/studentModel');
const createStudents = async(req,res) =>{
    try{
        let student = await Student.create({...req.body});
        res.send("Successfully Created new Student")
    }catch(e){
        res.status(500).send(e)
    }
}
const getStudents = async(req,res) =>{
    try{
        let student = await Student.find();
        res.send(student)
    }catch(e){
        res.status(500).send(e)
    }
}
const updateStudent = async(req,res)=>{
    try{

        let student = await Student.findByIdAndUpdate(req.params.id,{...req.body},{ new: true, runValidators: true })
        res.send("Successfully Updated")
    }catch(e){
        res.status(500).send("Updated Successfully")
    }
}

const deleteStudent = async(req,res)=>{
    try{
        let student  = await Student.findByIdAndDelete({_id:req.params.id});
        res.send(student)
    }catch(e){
        res.status(500).send("Deleted")
    }
}

const getOneStudent = async(req,res)=>{
    try{
        let student = await Student.findById({_id:req.params.id})
        res.send(student)
    }catch(e){
        res.status(500).send(e)
    }
}


module.exports={
    createStudents,
    getStudents,
    updateStudent,
    deleteStudent,
    getOneStudent
}