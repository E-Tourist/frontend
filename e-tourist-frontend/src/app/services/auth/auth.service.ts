import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  logIn(login: string, password: string): void {
    this.isLoggedIn = true;
  }

  logOut(): void {
    this.isLoggedIn = false;
  }
}
