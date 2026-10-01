import {Schema,model} from "mongoose";

const urlSchema=new Schema({
    original:{
        type:String,
        unique:true,
        required:true,
        index:true,
    },
    short:{
        type:String,
        unique:true,
        required:true,
        index:true,
    },
});

export const URI= model("URl",urlSchema);