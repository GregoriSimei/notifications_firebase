import { Router } from 'express';
import { helloWorldRoute } from './helloWorld';

const routes = Router();
routes.use(helloWorldRoute);

export { routes };
