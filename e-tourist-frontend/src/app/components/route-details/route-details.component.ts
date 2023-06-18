import { Component } from '@angular/core';
import {RoutesService} from "../../services/routes/routes.service";
import {RouteDetails} from "../../models/route-details";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.less']
})
export class RouteDetailsComponent {
  id: number = 0;
  isDescriptionHidden: boolean = true;
  currentImageIndex: number = 0;

  routeDetails: RouteDetails = {
    authorId: 0,
    authorName: "",
    description: "",
    distance: 0,
    id: 0,
    isVerified: false,
    mainImagesUrls: [],
    name: "",
    rating: 0,
    time: 0
  };
  constructor(private routesService: RoutesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.routeDetails = this.routesService.getRouteDetails(this.id);
    })
  }

  get currentImage(): string {
    return this.routeDetails.mainImagesUrls[this.currentImageIndex];
  }

  toggleDescription() {
    this.isDescriptionHidden = !this.isDescriptionHidden;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.routeDetails.mainImagesUrls.length) % this.routeDetails.mainImagesUrls.length;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.routeDetails.mainImagesUrls.length;
  }
}
