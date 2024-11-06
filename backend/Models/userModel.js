const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {type:String, required:true},
  password: {type:String,required:true},
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: async function (email) {
        const user = await User.findOne({ email });
      },
      message: props => `Email ${props.value} is already in use!`
    }
  },
  contact : {type:String, required:true},
  role:{type:String, default:"Client"}

});

const User = mongoose.model('users',userSchema);
module.exports=User;