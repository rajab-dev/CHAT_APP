import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    require:true,
  },
  username:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true, 
    minlength:6,
  },
  gender:{
    type:String,
    require:true,
    enum:["male","female"]
  },
  profilePic:{
    type:String,
    default:""
  }
},{timestamps:true})

const user = mongoose.model("user",userSchema)

export default user