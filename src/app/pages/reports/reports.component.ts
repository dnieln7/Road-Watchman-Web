import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Report} from '../../models/Report';
import {ReportDataService} from '../../services/report.data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  protected reports: Array<Report>;

  constructor(private dataService: ReportDataService) {
  }

  ngOnInit(): void {
    this.reports = [];

    this.getReports();
  }

  private getReports() {
    this.dataService.findAll().subscribe(value => {
      this.reports = value;
    });
  }
}
