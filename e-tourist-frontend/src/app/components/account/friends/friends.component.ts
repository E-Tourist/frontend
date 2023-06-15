import { Component } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.less']
})
export class FriendsComponent {
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

  friends: User[] = [];

  ngOnInit() {
    this.user = this.userService.getUserById(1);
  }
}
