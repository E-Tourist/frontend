import { Component } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.less']
})
export class FriendsComponent {
  userId: number = 0;

  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService) {
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
    this.route.params.subscribe(params => {
      this.userId = params['id'] ? params['id'] : this.authService.getLoggedUserId();
      this.user = this.userService.getUserById(this.userId);
    })

    this.user = this.userService.getUserById(this.userId);
    this.friends = this.userService.getUserFriends(this.userId);
  }
}
