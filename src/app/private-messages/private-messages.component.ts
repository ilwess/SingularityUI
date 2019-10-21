import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from '../models/message';
import { SignalrService } from '../signalr.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-private-messages',
  templateUrl: './private-messages.component.html',
  styleUrls: ['./private-messages.component.css']
})
export class PrivateMessagesComponent implements OnInit {
  private isLoaded : boolean = false;
  private user : User;
  private messages : Message[];
  private messageForm = new FormGroup({
    text: new FormControl(""),
  })
  constructor(
    private messageService : MessageService,
    private userService : UserService,
    private auth : AuthService,
    private route : ActivatedRoute,
    private router : Router,
    private signalr : SignalrService
  ) 
  { 
    this.isLoaded = false;
    if(this.auth.isAuth){
      let userO = this.userService.getUserById(Number
        .parseInt(
          this.route.snapshot
          .paramMap.get('id')));
      userO.subscribe(u => {
        this.user=u;
        this.messageService
          .getDialog(this.auth.user.id, u.id);
        this.isLoaded = true;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  send() : void{
    let msg : Message = new Message();
    msg.text = this.messageForm.get("text").value;
    msg.sender = this.auth.user;
    msg.reciever = this.user;
    msg.images = null;
    msg.videos = null;
    msg.audios = null;
    this.signalr.sendMessage(msg);
    this.updateMessages();
  }

  public updateMessages(){
    // let userO = this.userService.getUserById(Number
    //   .parseInt(
    //     this.route.snapshot
    //     .paramMap.get('id')));
    // userO.subscribe(u => {
    //   this.user=u;
    //   let o = this.messageService
    //     .getDialog(this.auth.user.id, u.id);
    //   this.router.navigate([this.route.url]);
    // });
    this.router.navigate(["/profile/" + this.auth.user.id]);
    this.router.navigate(["/messages/" + this.auth.user.id]);
  }

  ngOnInit() {
  }

}
