import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {


 try {
   // res.send("signup route")
   const {fullName, username, password, confirmPassword, gender} = req.body;
   if(password!==confirmPassword ){
     return res.status(400).json({error:"Passwords don't match"})
   }
     
   const user = await userModel.findOne({username})
 
   if(user){
     return res.status(400).json({error:"User already exists"})
   }
 
   const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
   const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
 
   const salt = await bcrypt.genSalt(10);
   const hashedpass = await bcrypt.hash(password, salt)
 
    const newuser = await userModel.create({
       username,
       fullName,
       password:hashedpass,
       gender,
       profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    })

    if (newuser){

     generateTokenAndSetCookie(newuser._id, res) 
     res.status(201).json(newuser)
     
       
    }else {
       res.status(400).json({error:"Invalid user data"})

    }

 } catch (error) {

    console.log("error in signup",error.message)
    res.status(500).json({error:"Internal server error"})
 }

}


export const login = async (req, res) => {

    try {

      const  { username, password } = req.body;
      const user = await userModel.findOne({username})
      const ispasscorrect = await bcrypt.compare(password, user?.password || "") 

      if(!user || !ispasscorrect){

        return res.status(400).json({error:"invalid username or password"})

      }
      
      generateTokenAndSetCookie(user._id, res)

      res.status(200).json(user)

    } catch (error) {

       console.log("error in login controller", error.message)
       res.status(500).json({error:"internal server error"})

    }
}


export const logout = async (req,res) => {
   
   try {
       
      res.cookie("jwt","",{maxAge:0})
      res.status(200).json({message:"Logout successfully"})

   } catch (error) {
    console.log("error in logout controller", error.message)
    res.status(500).json({error:"internal server error"})
   }

}

