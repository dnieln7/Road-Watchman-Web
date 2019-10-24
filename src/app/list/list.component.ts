import {Component, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';
import Marker = google.maps.Marker;
import LatLng = google.maps.LatLng;
import Map = google.maps.Map;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    const myPosition = new LatLng(35.2271, -80.8431);

    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

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
