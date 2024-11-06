const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const feedbackSchema = new Schema({
  rating: {type:Number, required:true},
  feedback: {type:String, required: true},
  createdBy: { type: ObjectId, required: true, ref: "users" }
});

const Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
