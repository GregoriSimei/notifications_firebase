import EHttpStatusCode from './EHttpStatusCode';

export interface IHttpResponse {
  status: number;
  response: any;
}

export interface IHttpRequest {
  headers: any;
  query: any;
  params: any;
  body: any;
}

export class HttpResponse implements IHttpResponse {
  status: number;
  response: any;

  constructor(status: number, response: any) {
    this.status = status;
    this.response = response;
  }
}

export class SuccessRequest extends HttpResponse {
  constructor(response: any) {
    super(EHttpStatusCode.OK, response);
  }
}

export class BadRequest extends HttpResponse {
  constructor(response: any) {
    super(EHttpStatusCode.BAD_REQUEST, response);
  }
}
