const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new Schema({
  fullName: { type: String, required: true },
  contact: { type: String, required: true },
  gender : {type:String, required:true},
  guardianName: { type: String, required: true },
  semester: { type: String, required: true },
  ecaInvolve : {type:String, required:true},
  partTimeJob : {type:String, required:true},
  address :{type:String, required:true},
  createdBy: { type: ObjectId, required: true, ref: "users" }
});

const Student = mongoose.model("students", studentSchema);
module.exports = Student;
