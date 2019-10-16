import { Injectable } from '@angular/core';
import { User } from './models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : User;
  private isAuth : boolean;
  constructor(private userService : UserService) {
      this.user = this.userService.getUserById(0);
      this.isAuth = true;
    }
}
