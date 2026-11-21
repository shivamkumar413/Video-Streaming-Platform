import type { NextFunction, Request, Response } from "express";
import { videoUploadSchema } from "./zodSchema/videoUpload.schema.ts";

export async function validateVideoUpload(req: Request, res: Response, next: NextFunction) {

    try{
        await videoUploadSchema.validateAsync(req.body)
        next()
    }
    catch(err){
        return res.status(400).json({
            message : 'Invalid request body',
            error : err
        })
    }
    

}