import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouteNavigation} from "../../models/route-navigation";
import {RoutesService} from "../../services/routes/routes.service";

@Component({
  selector: 'app-route-navigation',
  templateUrl: './route-navigation.component.html',
  styleUrls: ['./route-navigation.component.less']
})
export class RouteNavigationComponent {
  id: number = 0;

  routeNavigation: RouteNavigation = {
    routePoints: [],
    routePaths: []
  };

  isShowingPoint: boolean = false;
  isLastPoint: boolean = false;

  currentPointId: number = -1;
  currentPathId: number = -1;

  constructor(private route: ActivatedRoute, private routesService: RoutesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.routeNavigation = this.routesService.getRouteNavigation(this.id);
    });

    if (this.routeNavigation.routePoints.length <= 1 || this.routeNavigation.routePaths.length == 0) {
      return;
    }

    this.isShowingPoint = true;
    this.currentPointId = 0;
    this.currentPathId = 0;
  }

  goToNext(): void {
    if (this.isShowingPoint) {
      this.isShowingPoint = false;
      this.currentPointId += 1;

      if (this.currentPointId >= this.routeNavigation.routePoints.length) {
        this.isLastPoint = true;
      }
    }
    else {
      this.isShowingPoint = true;
      this.currentPathId += 1;
    }
  }
}
