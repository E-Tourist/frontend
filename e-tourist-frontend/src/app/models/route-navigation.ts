import {NavigationPoint} from "./navigation-point";
import {NavigationBetweenPoints} from "./navigation-between-points";

export interface RouteNavigation {
  routePoints: NavigationPoint[];
  routePaths: NavigationBetweenPoints[];
}
