import express from "express";

import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import cookieParser from "cookie-parser"


import connectToMongoDB from "./db/connectToMongoDB.js";
import bodyParser from 'body-parser';
import { app, server } from "./socket/socket.js";

// const  app = express();
app.use(bodyParser.text());


dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/user", userRoutes)


const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("server working")
})

// PORT = 8000
// MONGO_DB_URI = mongodb+srv://mughalrajab26:7MAPPyVnIR4l0Z5a@cluster0.ubkpwem.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0

// JWT_SECRET = "dfghjkl/kkkkljkjlkhkjgjjfhgfhg"

// NODE_ENV =  development
server.listen(PORT, ()=> {
  connectToMongoDB();
  console.log(`server listning on Port ${PORT}`)
})
