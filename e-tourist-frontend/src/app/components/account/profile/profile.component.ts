import { Component } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  constructor(private userService: UserService) {
  }

  howLongWithUs: number = 0;

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
}
