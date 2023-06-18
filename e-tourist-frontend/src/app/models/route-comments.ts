import {RouteComment} from "./route-comment";

export interface RouteComments {
  routeName: string;
  routeId: number;
  comments: RouteComment[]
}
