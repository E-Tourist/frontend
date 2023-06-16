import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn = authService.getIsLoggedIn();
  }

  goToSearchComponent() {
    this.router.navigate(['/search']);
  }

  goToListComponent() {
    this.router.navigate(['/list']);
  }

  goToProfileComponent() {
    let navigationRoute = this.isLoggedIn ? "/profile" : "/login";

    this.router.navigate([navigationRoute]);
  }
}
