import { Injectable } from '@angular/core';
import {RouteMinimumInfo} from "../../models/route-minimum-info";
import {RouteDetails} from "../../models/route-details";
import {RouteComments} from "../../models/route-comments";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  mockRoutes: RouteMinimumInfo[] = [
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
      rating: 4.2,
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

  constructor() { }

  getRoutesList(): RouteMinimumInfo[] {
    let routes: RouteMinimumInfo[] = this.mockRoutes;

    return routes;
  }

  getRoutesListByPlace(placeId: number): RouteMinimumInfo[] {
    let routes: RouteMinimumInfo[] = this.mockRoutes;

    return routes;
  }

  getRouteDetails(routeId: number): RouteDetails {
    let route: RouteDetails = {
      authorId: 1,
      authorName: "Jan Kowalski",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially Vivamus pellentesque massa quis urna faucibus tincidunt. Duis id congue risus, sit amet viverra turpis. Sed lobortis eros libero. Cras vehicula et erat sit amet rhoncus. Nullam dapibus, purus eget maximus sagittis, quam lorem tempus leo, nec porta libero tortor gravida sapien. Quisque quis eros in dolor egestas sollicitudin eget id metus. Sed non placerat metus, vitae ornare libero. In in odio iaculis, dapibus libero sed, tristique lacus. Sed dapibus justo et rhoncus finibus.",
      distance: 10,
      id: 1,
      isVerified: true,
      mainImagesUrls: [ "assets/routes-list/Waly_chrobrego.jpg", "assets/routes-list/miejski_szlak_turystyczny.jpg", "assets/routes-list/glebokie.jpg"],
      name: "Magiczny Szlak Szczeciński",
      rating: 4.6,
      time: 2.5
    };

    return route;
  }

  getRouteComments(routeId: number): RouteComments {
    let routeComments: RouteComments = {
      comments: [
        {
          authorId: 1,
          authorName: "Jan Kowalski",
          authorAvatarUrl: "https://i.stack.imgur.com/TV9im.jpg?s=256&g=1",
          commentDate: new Date("2023-01-01"),
          content: "Super trasa jestem z niej dumny",
        },
        {
          authorId: 2,
          authorName: "Ted Turner",
          authorAvatarUrl: "https://i.imgur.com/RaZj7VX_d.webp?maxwidth=520&shape=thumb&fidelity=high",
          commentDate: new Date("2023-05-02"),
          content: " My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.",
        },
        {
          authorId: 4,
          authorName: "Goro Takemura",
          authorAvatarUrl: "https://i.imgur.com/wKHBV9i_d.webp?maxwidth=520&shape=thumb&fidelity=high",
          commentDate: new Date("2022-10-30"),
          content: "Good route but I was too tired after 8km",
        },
      ],
      routeId: 1,
      routeName: "Magiczny Szlak Szczeciński"

    };

    return routeComments;
  }
}
