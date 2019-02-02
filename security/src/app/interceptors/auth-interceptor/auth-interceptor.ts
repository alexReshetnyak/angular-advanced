import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, delay } from 'rxjs/operators';


export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('headerName', 'value')
    });
    
    return next.handle(authReq).pipe(
      retry(2),
      delay(3000),
      catchError((err: HttpErrorResponse) => {
        console.log('http error:', err);

        if (err.status === 401) {
          // * redirect to login page
        }


        if (err.status === 403) {
          // * contact admin
        }

        return throwError(err);
      })
    );
  }
}
