import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  allUsers : User[] = [];
  constructor() {
    this.allUsers.push(new User(0, "name_0", "login_0", "+375290000000", "email_0@mail.ru", "token_0", [], [], { id: 0, link: ""}));
    this.allUsers.push(new User(1, "name_1", "login_1", "+375290000001", "email_1@mail.ru", "token_1", [], [], { id: 0, link: ""}));
    this.allUsers.push(new User(2, "name_2", "login_2", "+375290000002", "email_2@mail.ru", "token_2", [], [], { id: 0, link: ""}));
    this.allUsers.push(new User(3, "name_3", "login_3", "+375290000003", "email_3@mail.ru", "token_3", [], [], { id: 0, link: ""}));
    this.allUsers.push(new User(4, "name_4", "login_4", "+375290000004", "email_4@mail.ru", "token_4", [], [], { id: 0, link: ""}));
    this.allUsers.push(new User(5, "name_5", "login_5", "+375290000005", "email_5@mail.ru", "token_5", [], [], { id: 0, link: ""}));
    this.allUsers.push(new User(6, "name_6", "login_6", "+375290000006", "email_6@mail.ru", "token_6", [], [], { id: 0, link: ""}));
    this.allUsers.push(new User(7, "name_7", "login_7", "+375290000007", "email_7@mail.ru", "token_7", [], [], { id: 0, link: ""}));
   }
   
   getUsersById(ids : number[]) : User[]{
     let usersToRet : User[];
     ids.forEach(
       (v, i) => 
       usersToRet
       .push(this.allUsers.find(u => u.id = v)));
      return usersToRet;
   }

   getUserById(id : number) : User{
     let uToRet : User;
     uToRet = this.allUsers.find(u => u.id == id);
     return uToRet;
   }
}
