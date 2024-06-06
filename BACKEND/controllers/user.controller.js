import userModel from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {

     try {
        
       const loggedinuser = req.user._id;

       const filtereduser = await userModel.find( { _id: { $ne:loggedinuser } } ).select("-password")


       res.status(200).json(filtereduser)









     } catch (error) {
      console.log("error in get-users-for-sidebar controller", error.message)
          res.status(500).json({error:"internal server error"})
     }
}