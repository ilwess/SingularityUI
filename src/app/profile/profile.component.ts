import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatCard } from '@angular/material';
import { AuthService } from '../auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private isLoaded : boolean = false;
  private thisUser : boolean;
  private user : User = null;
  private prevUrl : string;
  private login : FormControl;
  private name : FormControl;
  constructor(private userService : UserService,
    private auth : AuthService,
    private route : ActivatedRoute) {
        let id = Number
        .parseInt(
          this.route.snapshot
          .paramMap.get('id'));
        if(id == this.auth.user.id){
          this.thisUser = true;
          this.user = this.auth.user;
          this.isLoaded = true;
        } else{
          this.thisUser = false;
          let u = this.userService.getUserById(id);
          u.subscribe(us => {
            this.user = us;
            if(this.user.ava == null){
              this.user.ava = { id: 1, link: "https://localhost:44336/images/default-image.jpg"};
            }
            this.isLoaded = true;
          });
        }
    }
  
  changeLogin(){
    this.login = new FormControl("");
    this.userService.changeLogin(this.login.value);
  }

  changeName(){
    this.name = new FormControl("");
    this.userService.changeName(this.name.value);
  }

  addToContact(){
    this.userService.addToContact(this.user.id);
  }

  blockUser(){
    this.userService.blockUser(this.user.id);
  }
  
  ngOnInit() {}
}
