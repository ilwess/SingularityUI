import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private users : User[] = [];
  private isLoad : boolean = false;
  private formSearch = new FormGroup({
    search : new FormControl("")
  })
  constructor(
    private auth : AuthService,
    private userService : UserService,
    private router : Router
  ) {
    if(!this.auth.isAuth){
      this.router.navigate(['/login'])
    }
    // this.users.push(new User(1, "name_1", "login_1", "+375290000001", "test_email_1@mail.ru", "token", [], [], {id: 1, link: "../../assets/авадота.png"}, "password"));
    // this.users.push(new User(2, "name_2", "login_2", "+375290000002", "test_email_2@mail.ru", "token", [], [], {id: 1, link: "../../assets/авадота.png"}, "password"));
    // this.users.push(new User(3, "name_3", "login_3", "+375290000003", "test_email_3@mail.ru", "token", [], [], {id: 1, link: "../../assets/авадота.png"}, "password"));
    // this.users.push(new User(4, "name_4", "login_4", "+375290000004", "test_email_4@mail.ru", "token", [], [], {id: 1, link: "../../assets/авадота.png"}, "password"));
    // this.users.push(new User(5, "name_5", "login_5", "+375290000005", "test_email_5@mail.ru", "token", [], [], {id: 1, link: "../../assets/авадота.png"}, "password"));
    // this.users.push(new User(6, "name_6", "login_6", "+375290000006", "test_email_6@mail.ru", "token", [], [], {id: 1, link: "../../assets/авадота.png"}, "password"));
    this.getContacts();
   }

  ngOnInit() {
  }

  private getContacts(){
    this.userService.getContacts()
    .subscribe(
      u => {
        this.users = u;
        this.isLoad = true;
      }
    )
  }

  private search(){
    this.users = [];
    this.isLoad = false;
    this.userService
      .getUsers("")
      .subscribe(u => {
        u.forEach(element => {
          if(
            element.email.includes(
            this.formSearch.get("search").value) ||
            element.phone.includes(
              this.formSearch.get("search").value
            )){
              this.users.push(element);
            }
        });
        this.isLoad = true;
      });
  }

  isUserOnline(id : number) : boolean{
    return this.userService.isUserOnline(id);
  }
}
