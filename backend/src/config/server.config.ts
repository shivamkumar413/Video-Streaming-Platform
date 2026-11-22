import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;

export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;

export const AWS_SECRET_ACESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

export const AWS_REGION = process.env.AWS_REGION;

export const BUCKET_EXPIRY = Number(process.env.BUCKET_EXPIRY);

export const MAX_FILE_SIZE = Number(process.env.MAX_FILE_SIZE);

export const DATABASE_URL = process.env.DATABASE_URL;

export const DIRECT_DB_URL = process.env.DIRECT_DB_URL;

