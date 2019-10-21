import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { AuthService } from './auth.service';
import { Message } from './models/message';
import { $ } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConn : signalR.HubConnection;
  constructor(
    private auth : AuthService,
    private route : ActivatedRoute,
    private messageService : MessageService
  ) {
  }

  public connect(){
    let options : signalR.IHttpConnectionOptions;
    this.hubConn = 
      new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:44336/message", { accessTokenFactory: () => this.auth.user.id.toString()})
        .build();
    this.hubConn
      .start()
      .then(() => console.log("Connection started"))
      .catch(err=>console.log("Error while conntecting" + err));
  }

  public addTransferMessageListener() {
    this.hubConn.on('Recieve', (msg) => {
      if(this.route.snapshot.routeConfig.component.name == "PrivateMessagesComponent"){
        var id = this.route.snapshot
        .paramMap.get('id');
        if((msg.reciever.id == id) || (msg.sender.id == id)){
          this.messageService.getDialog(this.auth.user.id,Number.parseInt(id));
        }
      }
    })
  }

  public sendMessage(msg : Message){
    this.hubConn.invoke("Send", msg);
  }
}
