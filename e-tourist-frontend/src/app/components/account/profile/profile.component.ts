import { Component } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {RouteMinimumInfo} from "../../../models/route-minimum-info";
import {RoutesService} from "../../../services/routes/routes.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService, private routesService: RoutesService) {
  }

  howLongWithUs: number = 0;
  userId: number = 0;

  lastActivityRoutes: RouteMinimumInfo[] = [];

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
    this.route.params.subscribe(params => {
      this.userId = params['id'] ? params['id'] : this.authService.getLoggedUserId();
      this.user = this.userService.getUserById(this.userId);
      this.lastActivityRoutes = this.routesService.getUserLastActivity(this.userId);
    })
  }
}
