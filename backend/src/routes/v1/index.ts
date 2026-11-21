import express from 'express';
import type { Request, Response } from 'express';
import router from './upload.routes.ts'

const v1router = express.Router();

v1router.use('/upload',router);

v1router.get('/ping', (_req : Request, res : Response) => {
    return res.json({
        message: 'pong'
    })
});

export default v1router;
