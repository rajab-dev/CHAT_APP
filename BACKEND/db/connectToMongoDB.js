import mongoose from "mongoose";

const connectToMongoDB = async () => {
   try {
     
      await mongoose.connect(process.env.MONGO_DB_URI)
      console.log("CONNECTED TO MONGODB ATLAS!!!")
    
   } catch (error) {
     console.log("Error connecting to MONGODB",error.message)
   }

}

export default connectToMongoDB;