import {Component, Input} from '@angular/core';
import {RouteMinimumInfo} from "../../models/route-minimum-info";

@Component({
  selector: 'app-route-list-single-route',
  templateUrl: './route-list-single-route.component.html',
  styleUrls: ['./route-list-single-route.component.less'],
})
export class RouteListSingleRouteComponent {
  @Input()
  route: RouteMinimumInfo = {
    id: 0,
    name: "",
    mainImageUrl: "",
    distance: 0,
    time: 0,
    rating: 0,
    isVerified: false
  };
}
