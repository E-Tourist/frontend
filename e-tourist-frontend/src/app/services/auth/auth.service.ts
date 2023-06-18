import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private loggedUserId = 0;

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getLoggedUserId(): number {
    return this.loggedUserId;
  }

  logIn(login: string, password: string): void {
    this.isLoggedIn = true;
    // set logged user id
  }

  logOut(): void {
    this.isLoggedIn = false;
    this.loggedUserId = 0;
  }
}
