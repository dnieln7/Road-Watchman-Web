import {Component, OnInit} from '@angular/core';
import {Reporte} from '../models/reporte';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dateBegin: string;
  dateEnd: any;
  reportes: Reporte[];
  reportesFilter: Reporte[];
  reporte: Reporte;
  address: string;
  date: any;

  constructor(private pipe: DatePipe) { }

  ngOnInit() {
    this.reporte = new Reporte();

    this.reporte.id = 1;
    this.reporte.lat = 1;
    this.reporte.lon = 1;
    this.reporte.img = 'link';
    this.reporte.address = 'Calle pascual de los Santos';
    this.reporte.date = new Date();

    this.date = this.pipe.transform(this.reporte.date, 'yyyy-MM-dd');

    this.reportesFilter = [this.reporte];
  }

  search() {
    if (this.date > this.dateBegin && this.date <= this.dateEnd) {

    }
  }
}
