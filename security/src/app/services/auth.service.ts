import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth(): Observable<boolean> {
    return of(true).pipe(
      delay(3000)
    );
  }
}
