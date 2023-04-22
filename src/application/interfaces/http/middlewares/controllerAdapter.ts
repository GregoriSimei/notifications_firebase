import { NextFunction, Request, Response } from 'express';
import { IController } from '../../../../domain/http/IController';
import { IHttpRequest } from '../../../../domain/http/HttpEntities';

export function controllerAdapter(controller: IController) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers
    };

    try {
      const httpResponse = await controller.handle(httpRequest);
      res.status(httpResponse.status).json(httpResponse.response);
    } catch (err) {
      next(err);
    }
  };
}
