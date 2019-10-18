import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Message } from '../models/message';
import { MessageService } from '../message.service';
import { User } from '../models/user';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  private messagesOfUsers : Message[][];
  constructor(
    private auth : AuthService,
    private router : Router,
    private messageService : MessageService
    ) {
    if(!this.auth.isAuth){
      this.router.navigate(['/login']);
    }
    this.messagesOfUsers = [][0];
    this.getMessagesOfUsers();
   }

  getMessagesOfUsers() : void{
    let messagesOfUser = 
      this.messageService.getUserMessages();
      if(this.messagesOfUsers != null){
        messagesOfUser.reverse();
        while(messagesOfUser.length != 0){
          let user : User = null ;
          if(messagesOfUser[0].sender.id == this.auth.user.id){
            user = messagesOfUser[0].reciever;
          } else {
            user = messagesOfUser[0].sender;
          }
          let messages : Message[] = null;
          messagesOfUser.forEach((v, i) => {
            if((v.sender.id == user.id) || (v.reciever.id == user.id)){
              messages.push(messagesOfUser.splice(i, 1)[0]);
            }
          });
          this.messagesOfUsers.push(messages);
        }
    }
  }
  ngOnInit() {
  }

}
