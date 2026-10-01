import { URI } from "../model/model.js"

export const Redirect= async (req,res)=>{
        const param =req.params.redirect;

        if(!param){
            return res.status(400).json({
                msg:`Provide params`
            });
        }
        try{
            const url = await URI.findOne({ short: param});
            if(!url){
                return res.status(404).json({ msg:"url not found"});
            }
            res.status(300).redirect(url.original);
        } catch(e){
            console.warn(e)
            return res.status(400).json({
                msg:"Error in redirection"
            })
        }
}