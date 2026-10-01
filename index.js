console.log("Hello");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { Short } from "./Controller/short.controller.js";
import { Redirect } from "./Controller/redirect.controller.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors())
app.post("/short",Short)
app.get("/:redirect",Redirect)

const PORT=process.env.PORT || process.env.LOCAL_PORT;
const start=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        app.listen(PORT,"0.0.0.0",(req,res)=>{
            console.log("Server is running")
        })

    } catch(e){
        console.warn(e);
    }
}


start();