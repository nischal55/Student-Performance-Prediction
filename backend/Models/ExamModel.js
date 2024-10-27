const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const examSchema = new Schema({
  studentId: {type:ObjectId, ref:'students', required:true},
  examGpa: {type:Number,required:true},
  attendance: {type:Number, required:true},
  assignment :{type:String,required:true}
});

const Exam = mongoose.model('exam',examSchema);
module.exports=Exam;