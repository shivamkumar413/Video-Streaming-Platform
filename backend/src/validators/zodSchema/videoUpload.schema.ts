import {z} from 'zod'
import { MAX_FILE_SIZE } from '../../config/server.config.ts'

export const videoUploadSchema = z.object({
    fileName : z.string()
                .trim()
                .min(3, {message : 'File name must be at least 3 characters long'})
                .max(100, {message : 'File name must be at most 100 characters long'}),

    fileSize : z.number()
                .int()
                .positive()
                .max(MAX_FILE_SIZE)
})