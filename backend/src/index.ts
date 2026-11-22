import express from 'express';
import type { Express } from 'express';
import { PORT } from './config/server.config.ts';
import apiRouter from './routes/index.ts';

const app : Express = express();

app.use('/api',apiRouter);

app.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT);
})



