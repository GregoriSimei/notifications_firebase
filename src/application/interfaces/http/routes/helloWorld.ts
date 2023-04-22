import { Router } from 'express';
import { controllerAdapter } from '../middlewares/controllerAdapter';
import { HelloWorldHandler } from '../handlers/HelloWorldHandler';
import { IController } from '../../../../domain/http/IController';

const helloWorldHandler: IController = new HelloWorldHandler();

const router = Router();
router.get('/hello_world', controllerAdapter(helloWorldHandler));

export { router as helloWorldRoute };
