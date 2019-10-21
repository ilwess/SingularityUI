import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './models/message';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private msgUrl : string =
    "https://localhost:44336/api/user/messages?id=";
  private dialogUrl : string =
    "https://localhost:44336/api/user/dialog?id1="
  public messages : Message[];
  public dialog : Message[];
  public isLoad : boolean = false;
  constructor(
    private http : HttpClient,
    private auth : AuthService
  ) { }

  getUserMessages() : Message[]{
    let options = {
      headers : new HttpHeaders({
        "Authorization": "Bearer " + this.auth.user.token
      })
    }
    this.http.get<Message[]>(
        this.msgUrl + this.auth.user.id,
        options
      ).subscribe(ms => {this.messages = ms;});
    return this.messages;
  }

  getDialog(id1 : number, id2 : number) : void{
    let options = {
      headers : new HttpHeaders({
        "Authorization": "Bearer " + this.auth.user.token
      })
    }
    this.http.get<Message[]>(
      this.dialogUrl + id1
      + "&id2=" + id2,
      options
    ).subscribe(m => {
      this.isLoad = false;
      this.dialog = m;
      if(this.dialog != null){
        this.dialog.forEach((v, i) => {
          console.log(v.text);
        })
      this.isLoad = true;
      }});
  }

}
