import {PlaceSearchResult} from "./place-search-result";

export interface NavigationPoint {
  description: string;
  pictureUrls: string[];
  place: PlaceSearchResult;
}
