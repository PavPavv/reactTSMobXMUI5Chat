import { makeAutoObservable } from "mobx";

const API_KEY = 'AIzaSyDkKbOanLKA-MCjgGOxAlA_Vdesz8JItmQ';

export interface Auth {
  isSignUp: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
}

//  auth store class
export class AuthStore implements Auth {
  isSignUp: boolean = false;
  isLoading: boolean = false;
  isLoggedIn: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsSignUpToFalse(): void {
    this.isSignUp = false;
  }

  setIsLoading(val: boolean): void {
    this.isLoading = val;
  }

  async signUp(name: string, email: string, password: string): Promise<any> {
    this.isLoading = true;
    localStorage.setItem('MY_CHAT_NAME', name);

    try {
      const request = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const response = await request;
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        this.isSignUp = true;
      }
      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      this.isSignUp = false;
      console.log('auth request error', err);
    }
  }

  async logIn(email: string, password: string): Promise<any> {
    this.isLoading = true;

    try {
      const request = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const response = await request;
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        const { idToken, refreshToken } = res;
        console.log('idToken', idToken);
        console.log('refreshToken', refreshToken);
        localStorage.setItem('MY_CHAT_TOKEN', refreshToken);
        this.isLoggedIn = true;
      }
      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      this.isLoggedIn = false;
      console.log('auth request error', err);
    }
  }
}