import express from "express";

import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import cookieParser from "cookie-parser"


import connectToMongoDB from "./db/connectToMongoDB.js";
import bodyParser from 'body-parser';
import { app, server } from "./socket/socket.js";
import cors from 'cors';
// const  app = express();
app.use(bodyParser.text());


dotenv.config();

const allowedOrigins = ['https://yaptime.netlify.app'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/user", userRoutes)


const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("server working")
})


// NODE_ENV =  development
server.listen(PORT, ()=> {
  connectToMongoDB();
  console.log(`server listning on Port ${PORT}`)
})
