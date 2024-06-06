import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
  sender:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  receiver:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  message:{
     type:String,
     require:true
  }
},{timestamps:true})

const message = mongoose.model("message",messageSchema)

export default message;