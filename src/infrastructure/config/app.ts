import express from 'express';
import * as dotenv from 'dotenv';
import { errorManager } from '../../application/interfaces/http/middlewares/errorManager';
import { routes } from '../../application/interfaces/http/routes/routes';

dotenv.config();

const app = express();
app.use(routes);
app.use(errorManager);

export { app };
