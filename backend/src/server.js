import {io,myHttpServer,app} from "./socket/socket.js";
import express from "express"
import cookieParser from "cookie-parser";
import {configDotenv} from "dotenv"
configDotenv();


app.use(express.json())
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("server working")
})



const PORT=process.env.PORT||5000

myHttpServer.listen(PORT,()=>{
    console.log("server running at:-",PORT)
})
