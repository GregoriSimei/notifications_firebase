import express from 'express';
import { errorManager } from '../../application/interfaces/http/middlewares/errorManager';
import { routes } from '../../application/interfaces/http/routes/routes';

const app = express();
app.use(routes);
app.use(errorManager);

export { app };
