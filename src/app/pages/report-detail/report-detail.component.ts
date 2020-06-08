import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ReportDataService} from '../../services/report.data.service';
import {Report} from '../../models/Report';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';

import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit, AfterViewInit {

  private id: number;
  private report: Report;
  private map: L.map;

  constructor(
    private dataService: ReportDataService,
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {
    this.route.pathFromRoot[2].url.subscribe(value => {
      this.id = Number(value[2].path);
    });
  }

  ngOnInit(): void {
    this.loadReport();
  }

  ngAfterViewInit(): void {
    const mapContainer = document.getElementById('map');

    this.map = L.map(mapContainer, {
      center: [this.report.location[0], this.report.location[1]],
      zoom: 10,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    L.circleMarker([this.report.location[0], this.report.location[1]]).addTo(this.map);
  }

  private setMakeMarker(map: L.map): void {

  }

  open(target) {
    this.modalService.open(target, {ariaLabelledBy: 'title'})
      .result.then((closeResult) => {
      console.log('Closed with result ' + closeResult);
    }, (dismissReason) => {
      console.log('Closed by ' + dismissReason);
    });
  }

  private loadReport() {
    this.dataService.findById(this.id).subscribe(value => this.report = value);
  }
}
