import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl(""),
    password: new FormControl("")
  });
  
  constructor(
    private auth : AuthService,
    private signalr : SignalrService,
    private route : ActivatedRoute) {
    }

  ngOnInit() {
  }

  login() : void{
    this.auth.loginUser(
      this.loginForm.get("login").value,
      this.loginForm.get("password").value,
      this.signalr
    );
  }

}
