import { Injectable } from '@angular/core';
import {PlaceSearchResult} from "../../models/place-search-result";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor() { }

  searchPlace(name: string): PlaceSearchResult {
    const searchResult: PlaceSearchResult = {
      address: "Żołnierska 49, 71-210 Szczecin",
      id: 1,
      latitude: 53.44717630281187,
      longitude: 14.491878454207477,
      name: "Wydział Informatyki ZUT",
      pictureUrl: "assets/places/zut.jpg",
      rating: 4.1,
      type: "Uczelnia"
    };

    return searchResult;
  }
}
