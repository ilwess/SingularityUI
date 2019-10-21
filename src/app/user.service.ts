import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl : string
    = "https://localhost:44336/api/user";
  constructor(
    private http : HttpClient,
    private auth : AuthService) {}
   
   

   getUserById(id : number) : Observable<User>{
     let uToRet : User;
     let options = {
      headers : new HttpHeaders({
        "Authorization": "Bearer " + this.auth.user.token
      })
     }
     return this.http.get<User>(
      this.userUrl + "/getById?id=" + id,
      options
     );
   }

  public changeLogin(login : string){
    let changeLoginUrl : string =
      this.userUrl + "/change/login?id=" 
      + this.auth.user.id + "&newLogin=" + login;
    let options = {
      headers : new HttpHeaders({
        "Authorization": "Bearer " + this.auth.user.token
      })
    }
    this.http.patch<User>(
      changeLoginUrl,
      options
    ).subscribe();
  }

  public changeName(name : string){
    let changeLoginUrl : string =
      this.userUrl + "/change/login?id=" 
      + this.auth.user.id + "&newLogin=" + name;
    let options = {
      headers : new HttpHeaders({
        "Authorization": "Bearer " + this.auth.user.token
      })
    }
    this.http.patch<User>(
      changeLoginUrl,
      options
    ).subscribe();
  }

  public blockUser(id : number){
    let blockUri : string =
      this.userUrl + "/blacklist/add?userId="
      + this.auth.user.id + "&blockableId=" + id;
    let options = {
      headers : new HttpHeaders({
        "Authorization": "Bearer " + this.auth.user.token
      })
    }
    this.http.patch<User>(
      blockUri,
      options
    ).subscribe();
  }

  public addToContact(id : number){
    let addUrl : string =
      this.userUrl + "/contact/add?userId="
      + this.auth.user.id + "&newContactId=" + id;
    let options = {
      headers : new HttpHeaders({
        "Authorization": "Bearer " + this.auth.user.token
      })
    }
    this.http.patch<User>(
      addUrl,
      options
    ).subscribe();
  }
}
