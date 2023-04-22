import { IHttpRequest, IHttpResponse } from './HttpEntities';

export interface IController {
  handle(request: IHttpRequest): Promise<IHttpResponse>;
}
