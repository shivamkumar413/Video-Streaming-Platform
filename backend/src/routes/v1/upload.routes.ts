import express from 'express';
import { getS3SignedUrl } from '../../controllers/upload.controller.ts';
import { validate } from '../../middlewares/validate.ts';
import { videoUploadSchema } from '../../dtos/video.dto.ts';
const router = express.Router()

router.get('/',validate(videoUploadSchema),getS3SignedUrl);

export default router;