import {PlaceSearchResult} from "./place-search-result";

export interface NavigationPoint {
  id: number;
  name: string;
  description: string;
  pictureUrls: string[];
  place: PlaceSearchResult;
}
