import {Component, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';
import LatLng = google.maps.LatLng;
import Marker = google.maps.Marker;
import Map = google.maps.Map;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  map: Map;

  constructor() { }

  ngOnInit() {
    const myPosition = new LatLng(35.2271, -80.8431);

    const myMap = new Map(this.mapElement.nativeElement, {
      zoom: 10,
      center: myPosition
    });

    const marker = new Marker({
      position: myPosition,
      map: myMap,
      title: 'hi!'
    });

    this.map = myMap;
  }
}
