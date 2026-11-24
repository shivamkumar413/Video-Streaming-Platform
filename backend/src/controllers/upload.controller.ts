import type { Request, Response } from 'express';
import { customErrorResponse, internalServerErrorResponse } from '../utils/commonResponse/responseObject.utils.ts';
import { StatusCodes } from 'http-status-codes';
import { getSignedUrlService } from '../services/upload.service.ts';


export async function getS3SignedUrl(req : Request,res : Response){

    // Now what i have to figure out when some one will only send file/video then how to know its name and type
    try{
        const response = await getSignedUrlService(req.body);

        return res.status(StatusCodes.OK).json({
            message : 'Successfully generated presigned url for video upload',
            data : response
        })
    }catch(err : any){
        console.log(`Error while getting presigned url for video upload ${err}`)
        if(err.statusCode){
            return res
                .status(err.statusCode)
                .json(customErrorResponse(err));
        }

        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(internalServerErrorResponse(err));
    }
    
    
}