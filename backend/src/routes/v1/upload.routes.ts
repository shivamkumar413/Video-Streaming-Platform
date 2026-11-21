import express from 'express';
import { getS3SignedUrl } from '../../controllers/upload.controller.ts';
import { validateVideoUpload } from '../../validators/videoUpload.validator.ts';
const router = express.Router()

router.get('/',validateVideoUpload,getS3SignedUrl);

export default router;