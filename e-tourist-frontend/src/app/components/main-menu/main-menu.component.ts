import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent {
  @Input()
  isLoggedIn: boolean = true;

  constructor(private router: Router) {
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
