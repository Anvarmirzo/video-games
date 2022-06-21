import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err)
      })
    )
  }
}
