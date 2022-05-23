import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { LoginRequest } from '../interfaces/login-request';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly registerUrl = 'http://localhost:3000/register';
  private readonly loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post<User>(this.registerUrl, user, {
      observe: 'response',
    });
  }

  login(loginReq: LoginRequest) {
    return this.http.post<LoginRequest>(this.loginUrl, loginReq, {
      observe: 'response',
    });
  }
}
