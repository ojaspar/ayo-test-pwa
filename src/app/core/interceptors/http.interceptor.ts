import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token: any = '';

  constructor() {}

  private AUTH_HEADER = 'Authorization';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = sessionStorage.getItem('token');
    req = this.addAuthenticationToken(req);
    return next.handle(req).pipe(
      retry(1),
      tap((evt) => {
        // certain conditions can be added here
      }),

      catchError((_error: HttpErrorResponse) => {
        // extra logic can be added here
        return throwError(_error);
      })
    );
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    if (!this.token) return request;
    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + this.token),
    });
  }
}
