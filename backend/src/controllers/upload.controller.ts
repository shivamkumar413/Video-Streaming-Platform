import type { Request, Response } from 'express';
import s3 from '../config/s3.config.ts';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { BUCKET_EXPIRY } from '../config/server.config.ts';
import { randomUUID } from 'node:crypto';


export async function getS3SignedUrl(req : Request,res : Response){

    // Now what i have to figure out when some one will only send file/video then how to know its name and type
    const videoId = randomUUID();

    const command = new PutObjectCommand({
        Bucket : process.env.S3_BUCKET_NAME!,
        Key : `video/${videoId}.mp4`,
        ContentType: "video/mp4",
    })

    const signedUrl = await getSignedUrl(s3,command,{
        expiresIn : BUCKET_EXPIRY,
    })
    
    return res.json({
        uploadURL : signedUrl
    })
    
}