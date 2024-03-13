import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { DataStorageService } from '../shared/_services/data-storage.service';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('__________ADD FIREBASE URL ENDPOINT HERE__________', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(responseData => {
      this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('__________ADD FIREBASE URL ENDPOINT HERE__________', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(responseData => {
      this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
    }));;
  }

  autologin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration)
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Firebase Error:', error.error.error.message);
    let errorMessage = 'An unknown error occurred';
    if (error.error && error.error.error) {
      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'Email já cadastrado.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'Email não encontrado.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Senha Inválida.';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = 'Email ou senha inválidos.';
          break;
        default:
          errorMessage = error.error.error.message;
          break;
      }
    }
    return throwError(errorMessage);
  }
}
