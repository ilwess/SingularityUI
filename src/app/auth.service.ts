import { Injectable } from '@angular/core';
import { User } from './models/user';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignalrService } from './signalr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user : User; /*= new User(10, "name_10", "login_10", "+375290000010", "test_email_10@mail.ru", "token", [], [], {id: 1, link: "../../assets/авадота.png"}, "password");*/
  public isAuth : boolean;
  private authUrl : string
    = "https://localhost:44336/api/auth/token"
  constructor(
    private http : HttpClient,
    private router : Router) {
      this.isAuth = false;
  }

  loginUser(
    userLogin : string,
    password : string,
    signalr : SignalrService) : void {
      this.http.post<User>(
        this.authUrl,
        {
          userName: userLogin,
          password: password
        }
      ).subscribe(p => 
        {
          this.user = p;
          if(this.user.ava == null){
            this.user.ava = {id: 1, link: "https://localhost:44336/images/default-image.jpg"}
          }
          this.isAuth = true;
          console.log(this.user.token);
          this.router.navigate(['/profile/', this.user.id]);
          signalr.connect();
          signalr.addTransferMessageListener();
        });
  }
}
