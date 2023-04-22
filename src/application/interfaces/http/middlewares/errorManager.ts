import { NextFunction, Request, Response } from 'express';
import { HttpResponse } from '../../../../domain/http/HttpEntities';

export function errorManager(
  err: any,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof HttpResponse) {
    return res.status(err.status).json(err.response);
  }
  return res.status(500).json(err);
}
