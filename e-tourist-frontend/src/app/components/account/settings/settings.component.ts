import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent {
  constructor(private authService: AuthService, private userService: UserService) {
  }

  user: User = {
    avatarUrl: "",
    currentMonthDistance: 0,
    description: "",
    joinedDate: new Date(),
    routesCreated: 0,
    totalDistance: 0,
    userId: 0,
    userName: ""
  };

  ngOnInit() {
    this.user = this.userService.getUserById(1);
  }

  logOut() {
    this.authService.logOut();
  }
}
