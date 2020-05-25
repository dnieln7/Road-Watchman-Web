import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {ReportDataService} from '../../services/report.data.service';
import {Report} from '../../models/Report';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit, AfterViewInit {

  private report: Report;
  private map;

  constructor(private dataService: ReportDataService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const container = document.getElementById('map');

    this.map = L.map(container, {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private findReport() {

  }
}
