import express from 'express';
import * as dotenv from 'dotenv';
import { errorManager } from '../../application/interfaces/http/middlewares/errorManager';
import { routes } from '../../application/interfaces/http/routes/routes';
import { serverConfig } from './server';

dotenv.config();

const app = express();
app.use(routes);
app.use(errorManager);

app.listen(serverConfig.APP_PORT, () => {
  console.log(`App runing ${serverConfig.APP_PORT}`);
});

export { app };
