import { S3 } from "@aws-sdk/client-s3";
import { AWS_ACCESS_KEY, AWS_REGION, AWS_SECRET_ACESS_KEY } from "./server.config.ts";

const s3 = new S3({
    region : AWS_REGION!,
    credentials : {
        accessKeyId : AWS_ACCESS_KEY!,
        secretAccessKey : AWS_SECRET_ACESS_KEY!  
    }
})

export default s3;