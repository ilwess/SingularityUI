import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl : string
    = "https://localhost:44336/api/user";
  constructor(
    private http : HttpClient,
    private auth : AuthService) {}
   
   

   getUserById(id : number) : User{
     let uToRet : User;
     let options = {
      headers : new HttpHeaders({
        "Authorization": "Bearer " + this.auth.user.token
      })
     }
     this.http.get<User>(
      this.userUrl + "/getById&id=" + id,
      options
     ).subscribe(u => uToRet = u);
     
     return uToRet;
   }
}
