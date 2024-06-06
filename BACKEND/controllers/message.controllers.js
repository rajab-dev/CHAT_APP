import messageModel from "../models/message.model.js";
import conversationModel from "../models/conversation.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async ( req, res ) => {

     try {
      const receiverid = req.params.id
      const  message  = req.body;
    //   console.log("message from backend ", message)
    //   res.json(message)
      const senderid = req.user._id

      let conversation = await conversationModel.findOne({
          participants:{$all:[ senderid, receiverid ]}
      }) 
 
      if(!conversation){
          conversation = await conversationModel.create({
               participants: [ senderid, receiverid ]
          })

      }

      const newmessage = await messageModel.create({
           sender:senderid,
           receiver:receiverid,
           message,
      })

      if(newmessage){
          conversation.messages.push(newmessage._id)
          await conversation.save();
      }

      const receiverSocketId = getReceiverSocketId(receiverid)

      if(receiverSocketId){
        io.to(receiverSocketId).emit("newmessage",newmessage)
      }

      res.status(201).json(newmessage)

      //  res.send({message:"send message route",userid:id})
     } catch (error) {

      console.log("error in send-message controller", error.message)
      res.status(500).json({error:"internal server error"})

     }

}

export const getMessages = async ( req, res ) => {

       try {
          const otheruserid =  req.params.id
          const loggeduserid = req.user._id
          const conversation = await conversationModel.findOne({
             participants:{$all:[ loggeduserid, otheruserid ]}
          }).populate("messages")
   
          if(!conversation){
          res.status(400).json([])
          return 
          }
   
          res.status(200).json(conversation.messages)
       } catch (error) {
          console.log("error in get-messages controller", error.message)
          res.status(500).json({error:"internal server error"})
       }
}