import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { Request } from "express";
import { randomUUID } from "node:crypto";
import { BUCKET_EXPIRY } from "../config/server.config.ts";
import s3 from "../config/s3.config.ts";
import { createVideo } from "../repositories/upload.repository.ts";
import { internalServerError } from "../utils/errors/api-error.ts";

export async function getSignedUrlService(data: Request['body']) {
    try {
        const videoId = randomUUID();
        const objectKey = `raw-video/${videoId}.mp4`;
        const command = new PutObjectCommand({
            Bucket : process.env.S3_BUCKET_NAME!,
            Key : objectKey,
            ContentType: "video/mp4",
        })

        const signedUrl = await getSignedUrl(s3,command,{
            expiresIn : BUCKET_EXPIRY,
        })

        const response = await createVideo({...data,videoId,objectKey});
        return {
            signedUrl,
            videoId : response.id
        }
    } catch (error) {
        throw internalServerError("Internal server error while generating presigned url for video upload");
    }
}