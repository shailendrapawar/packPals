import express from "express";
const app=express();

import {createServer} from "http"
const myHttpServer=createServer(app);

import {Server}from "socket.io"

const io=new Server(myHttpServer,{
    cors:{
        origin:["*"],
        credentials:true
    }
})

export {io,app,myHttpServer};

