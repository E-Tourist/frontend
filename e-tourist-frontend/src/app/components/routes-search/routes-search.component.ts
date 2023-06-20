import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {PlaceSearchResult} from "../../models/place-search-result";
import {PlacesService} from "../../services/places/places.service";

@Component({
  selector: 'app-routes-search',
  templateUrl: './routes-search.component.html',
  styleUrls: ['./routes-search.component.less']
})
export class RoutesSearchComponent implements AfterViewInit {
  map!: L.Map;

  searchInputValue: string = "";

  searchResult: PlaceSearchResult = {
    address: "", id: 0, latitude: 0, longitude: 0, name: "", pictureUrl: "", rating: 0, type: ""
  };

  isSlideInVisible: boolean = false;

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  constructor(private placesService: PlacesService) {
  }

  ngAfterViewInit() {
    L.Icon.Default.imagePath = "assets/leaflet/"
    this.initMap();
  }

  searchForPlace() {
    this.searchResult = this.placesService.searchPlace(this.searchInputValue);

    this.map?.setView([this.searchResult.latitude, this.searchResult.longitude], 16);
    L.marker([this.searchResult.latitude, this.searchResult.longitude]).addTo(this.map);
  }

  toggleSlideIn() {
    this.isSlideInVisible = !this.isSlideInVisible;
  }
}
