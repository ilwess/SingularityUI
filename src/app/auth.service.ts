import { Injectable } from '@angular/core';
import { User } from './models/user';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user : User;
  private isAuth : boolean;
  private authUrl : string
    = "https://localhost:44336/api/auth/token"
  constructor(
    private http : HttpClient,
    private router : Router) {
      this.isAuth = false;
  }

  loginUser(
    userLogin : string,
    password : string) : void {
      this.http.post<User>(
        this.authUrl,
        {
          userName: userLogin,
          password: password
        }
      ).subscribe(p => 
        {
          this.user = p;
          this.isAuth = true;
          this.router.navigate(['/profile/', this.user.id]);
        });
  }
}
