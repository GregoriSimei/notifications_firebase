import {
  BadRequest,
  IHttpRequest,
  IHttpResponse,
  SuccessRequest
} from '../../../../domain/http/HttpEntities';
import { IController } from '../../../../domain/http/IController';

export class HelloWorldHandler implements IController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    throw new BadRequest({ message: 'Erro' });
    return new SuccessRequest('Hello World');
  }
}
