import { Component } from '@angular/core';
import {RouteMinimumInfo} from "../../models/route-minimum-info";
import {RoutesService} from "../../services/routes/routes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.less']
})
export class RoutesListComponent {
  routesFound: RouteMinimumInfo[] = [];
  placeId: number = 0;

  constructor(private routesService: RoutesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.placeId = params['placeId'];
    });

    if (this.placeId > 0) {
      this.routesFound = this.routesService.getRoutesListByPlace(this.placeId);
    }
    else {
      this.routesFound = this.routesService.getRoutesList();
    }
  }
}
