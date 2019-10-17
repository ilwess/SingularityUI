import { Injectable } from '@angular/core';
import { User } from './models/user';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : User;
  private isAuth : boolean;
  private authUrl : string
    = "https://localhost:44336/api/auth/token"
  constructor(
    private userService : UserService,
    private http : HttpClient) {
      this.isAuth = false;
  }

  getUser(
    userLogin : string,
    password : string) : void {
      this.http.post<User>(
        this.authUrl,
        {
          userName: userLogin,
          password: password
        }
      ).subscribe(p => this.user = p);
  }
}
