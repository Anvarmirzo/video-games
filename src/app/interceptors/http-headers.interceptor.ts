import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': `${environment.API_KEY}`,
        'X-RapidAPI-Host': `${environment.API_HOST}`
      },
      setParams: {
        key: 'e40e743af2c94b0c916a8aa618fb4473',
      }
    });
    return next.handle(req);
  }
}
