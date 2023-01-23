import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {SnackbarService} from "./snackbar.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private snackbarService: SnackbarService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      this.snackbarService.openSnackBar("Ein Fehler ist aufgetreten (" + err.statusText + "). Bitte erneut versuchen.", "OK");
      throw err;
    }));
  }
}
