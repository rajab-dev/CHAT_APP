import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"

export const protectRoute = async (req, res, next) => {
   
   try {
    
    const token = req.cookies.jwt;
    
    if(!token){
      return res.status(401).json({error:"Unauthorized - Non token provided"})
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if(!decoded){
      return res.status(401).json({error:"Unauthorized - Invalid Token"})
    }

    const user = await userModel.findOne({_id:decoded.userid})

    if(!user){
      return res.status(401).json({error:"user not found"})
    }

     req.user = user

     next();


       
   } catch (error) {
    console.log("error in protectRoute controller", error.message)
    res.status(500).json({error:"internal server error"})
   }

}