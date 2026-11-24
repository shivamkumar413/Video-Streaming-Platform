import { prisma } from "../config/db.config.ts";

export async function createVideo(data : any){
    const video = await prisma.video.create({
        data : {
            id : data.videoId,
            title : data.videoTitle,
            description : data.videoDescription,
            objectKey : data.objectKey,
            userId : data.userId
        }
        
    })

    return video;
}