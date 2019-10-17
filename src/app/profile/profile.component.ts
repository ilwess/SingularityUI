import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatCard } from '@angular/material';
import { AuthService } from '../auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private thisUser : boolean;
  private user : User;
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
        } else{
          this.thisUser = false;
          this.user = this.userService.getUserById(id);
        }

    }

  ngOnInit() {
  }

}
