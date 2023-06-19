import { Component } from '@angular/core';
import {RouteMinimumInfo} from "../../models/route-minimum-info";
import {RoutesService} from "../../services/routes/routes.service";

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.less'],
})
export class RoutesListComponent {
  routesFound: RouteMinimumInfo[] = [];

  constructor(private routesService: RoutesService) {
  }

  ngOnInit() {
    this.routesFound = this.routesService.getRoutesList();
  }
}
