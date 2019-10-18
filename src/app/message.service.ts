import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './models/message';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private msgUrl : string =
    "https://localhost:44336/api/user/messages/&id=";
  public messages : Message[];
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
}
