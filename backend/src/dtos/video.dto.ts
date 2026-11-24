import {z} from 'zod'
import { VideoVisibility } from '../utils/enums/enum.utils.ts'


export const videoUploadSchema = z.object({
    videoTitle: z.string()
        .trim()
        .min(3, { error: "Video title must be at least 3 characters long" })
        .max(300, { error: "Video title must be at most 300 characters long" }),

    videoDescription: z.string()
        .trim()
        .min(3, { error: "Video description must be at least 3 characters long" })
        .max(300, { error: "Video description must be at most 300 characters long" }),

    videoVisibility: z.enum(VideoVisibility, {
        error: "Invalid video visibility"
    }).default(VideoVisibility.PRIVATE)
});