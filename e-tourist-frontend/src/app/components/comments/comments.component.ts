import { Component } from '@angular/core';
import {RouteComments} from "../../models/route-comments";
import {RoutesService} from "../../services/routes/routes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent {
  routeComments: RouteComments = {
    comments: [],
    routeId: 0,
    routeName: ""
  };

  routeId: number = 0;

  constructor(private routesService: RoutesService, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.routeId = params['id'];
      this.routeComments = this.routesService.getRouteComments(this.routeId);
    })
  }
}
