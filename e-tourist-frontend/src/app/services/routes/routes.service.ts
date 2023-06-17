import { Injectable } from '@angular/core';
import {RouteMinimumInfo} from "../../models/route-minimum-info";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  getRoutesList(): RouteMinimumInfo[] {
    let routes: RouteMinimumInfo[] = [
      {
        id: 1,
        name: "Magiczny Szlak Szczeciński",
        mainImageUrl: "assets/routes-list/Waly_chrobrego.jpg",
        distance: 10,
        time: 2.5,
        rating: 4.6,
        isVerified: true
      },
      {
        id: 2,
        name: "Miejski Szlak Turystyczny Szczecin",
        mainImageUrl: "assets/routes-list/miejski_szlak_turystyczny.jpg",
        distance: 7,
        time: 2,
        rating: 42,
        isVerified: true
      },
      {
        id: 3,
        name: "Łatwy szlak na Nosal - Zakopane",
        mainImageUrl: "assets/routes-list/nosal.jpg",
        distance: 1.8,
        time: 1,
        rating: 3.5,
        isVerified: false
      },
      {
        id: 4,
        name: "Dookoła jeziora Głębokiego",
        mainImageUrl: "assets/routes-list/glebokie.jpg",
        distance: 5.2,
        time: 1.1,
        rating: 3,
        isVerified: false
      }
    ];

    return routes;
  }
}
