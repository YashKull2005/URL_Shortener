import { nanoid } from "nanoid";
import {URI} from "../model/model.js" 

export const Short=async(req,res)=>{
    const originalUrl=req.body.originalUrl;
    try{
        new URL(originalUrl);
    }
    catch(e){
        return res.status(404).json({msg:`Invalid URL`});
    }
    try{
        const uid=nanoid(6);
        await URI.create({
            original:originalUrl,
            short:uid,
        });
        return res.status(200).json({
            url:uid,
            msg:"Successfully Created"
        });
    }catch(e){
        return res.status(404).json({
            url:"Error",
            msg:`Unexpected Error ${e}`
        });
    }
   
}