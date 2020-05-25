import {Component, OnInit} from '@angular/core';
import {Report} from '../../models/Report';
import {ReportDataService} from '../../services/report.data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reports: Array<Report>;

  constructor(private dataService: ReportDataService) {
  }

  ngOnInit(): void {
    this.reports = [];

    this.getReports();
  }

  getReports() {
    this.dataService.findAll(1).subscribe(value => {
      this.reports = value;
    });
  }
}
