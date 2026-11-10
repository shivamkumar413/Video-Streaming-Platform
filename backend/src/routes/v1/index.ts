import express from 'express';
import type { Request, Response } from 'express';

const v1router = express.Router();

v1router.get('/ping', (_req : Request, res : Response) => {
    return res.json({
        message: 'pong'
    })
});

export default v1router;
