import {Component, Input} from '@angular/core';
import {User} from "../../../models/user";

@Component({
  selector: 'app-friend-profile-box',
  templateUrl: './friend-profile-box.component.html',
  styleUrls: ['./friend-profile-box.component.less']
})
export class FriendProfileBoxComponent {

  @Input()
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

  howLongWithUs: number = 0;
}
