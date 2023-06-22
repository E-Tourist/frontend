import { Injectable } from '@angular/core';
import {RouteMinimumInfo} from "../../models/route-minimum-info";
import {RouteDetails} from "../../models/route-details";
import {RouteComments} from "../../models/route-comments";
import {RouteNavigation} from "../../models/route-navigation";

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

  getUserLastActivity(userId: number): RouteMinimumInfo[] {
    let routes: RouteMinimumInfo[] = [
      this.mockRoutes[0],
      this.mockRoutes[3]
    ];

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

  getRouteNavigation(routeId: number): RouteNavigation {
    let routeNavigation: RouteNavigation = {
      routePaths: [
        {
          description: "Przechodzimy pomiędzy budynkami uczelni, zarówno ZUTu jak i innych znajdujących się w Szczecinie. Po przejściu przez bramę trafiamy do naszego pierwszego celu",
          pictureUrls: ["assets/places/route-1-1.jpg", "assets/places/route-1-2.jpg"],
          startPointId: 1,
          endPointId: 2,
        },
        {
          description: "Droga prowadzi ulicami miasta (nie idźcie ulicami tylko po chodniku), całkiem przyjemnie się idzie",
          pictureUrls: ["assets/places/route-2-1.jpg"],
          startPointId: 2,
          endPointId: 3,
        },
        {
          description: "Teraz czeka nas dłuuugi spacer, ale nie dość że nogi będą wyćwiczone to nasz ostatni punkt warto zobaczyć ;)",
          pictureUrls: ["assets/places/route-3-1.jpg", "assets/places/route-3-2.jpg", "assets/places/route-3-3.jpg"],
          startPointId: 3,
          endPointId: 4,
        }
      ],
      routePoints: [
        {
          description: "Trasę rozpoczynamy od Budynku 1 Wydziału Informatyki ZUT. Studiują tutaj studenci.",
          pictureUrls: ["assets/places/zut.jpg"],
          place: {
            address: "Żołnierska 49, 71-210 Szczecin",
            id: 1,
            latitude: 53.44717630281187,
            longitude: 14.491878454207477,
            name: "Wydział Informatyki ZUT",
            pictureUrl: "assets/places/zut.jpg",
            rating: 4.1,
            type: "Uczelnia"
          }
        },
        {
          description: "Trafiamy do popularnego w Szczecinie Kebaba \"Na Wernyhory\" - możemy tutaj zjeść, lub od razu iść dalej",
          pictureUrls: ["assets/places/kebab-wernyhory.jpg"],
          place: {
            address: "Wernyhory 17, 71-240 Szczecin",
            id: 2,
            latitude: 53.449211664979224,
            longitude: 14.496163597098201,
            name: "Kebab \"Na Wernyhory\" Turecki",
            pictureUrl: "assets/places/kebab-wernyhory.jpg",
            rating: 4.2,
            type: "Restauracja"
          }
        },
        {
          description: "Znajdujemy się pod Netto Areną - miejscem w którym organizowane są wydarzenia. Jest to doprawdy jedno z miejsc w Szczecinie",
          pictureUrls: ["assets/places/netto-1.jpg", "assets/places/netto-2.jpg", "assets/places/netto-3.jpg", "assets/places/netto-4.jpg"],
          place: {
            address: "Władysława Szafera 3/5/7, 71-245 Szczecin",
            id: 3,
            latitude: 53.457682389864175,
            longitude: 14.494752095784591,
            name: "Netto Arena",
            pictureUrl: "assets/places/netto-1.jpg",
            rating: 4.4,
            type: "Kompleks sportowy"
          }
        },
        {
          // 53.429812619693784, 14.565431247620376 WAŁY CHROBREGO
          description: "Trasę kończymy na Wałach Chrobrego - Szczecińskiej promenadzie z 1902 roku, z widokiem na wodę i ścieżkami biegnącymi wśród słynnych budynków",
          pictureUrls: ["assets/places/waly-1.jpg", "assets/places/waly-2.jpg", "assets/places/waly-3.jpg"],
          place: {
            address: "Wały Chrobrego, 71-899 Szczecin",
            id: 4,
            latitude: 53.429812619693784,
            longitude: 14.565431247620376,
            name: "Wały Chrobrego",
            pictureUrl: "assets/places/waly-1.jpg",
            rating: 4.7,
            type: "Obiekt historyczny"
          }
        }
      ]
    };

    return routeNavigation;
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
