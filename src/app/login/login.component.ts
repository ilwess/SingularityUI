import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
    private auth : AuthService) {}

  ngOnInit() {
  }

  login() : void{
    this.auth.loginUser(
      this.loginForm.get("login").value,
      this.loginForm.get("password").value
    );
  }

}
