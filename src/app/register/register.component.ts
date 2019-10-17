import { Component, OnInit } from '@angular/core';
import { 
  FormGroupDirective,
  NgForm, 
  FormGroup, 
  FormControl } 
    from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private regUrl = "https://localhost:44336/api/user/register";
  private registerForm = new FormGroup({
    email: new FormControl(""),
    login: new FormControl(""),
    name: new FormControl(""),
    phone: new FormControl(""),
    password: new FormControl(""),
  });
  constructor(
    private http : HttpClient
  ) { }

  ngOnInit() {
  }

  register() : void{
    // let user : User = new User(
    //   null, this.registerForm.get("name").value, this.registerForm.get("login").value, this.registerForm.get("phone"), this.registerForm.get("email"), null, [], [], null, this.registerForm.get("password")); 
    // );
    this.http.post<User>(this.regUrl,
      {
        name: this.registerForm.get("name").value,
        email: this.registerForm.get("email").value,
        login: this.registerForm.get("login").value,
        phone: this.registerForm.get("phone").value,
        password: this.registerForm.get("password").value})
        .subscribe();
  }

}
