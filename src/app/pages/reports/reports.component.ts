import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Report} from '../../models/Report';
import {ReportDataService} from '../../services/report.data.service';
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  private reports: Array<Report>;
  protected currentReports: Array<Report>;

  private hoveredDate: NgbDate;
  private from: NgbDate;
  private to: NgbDate;

  constructor(
    private dataService: ReportDataService,
    private calendar: NgbCalendar,
    private formatter: NgbDateParserFormatter
  ) {
    this.reports = [];
    this.currentReports = null;

    this.hoveredDate = null;
    this.from = null;
    this.to = null;
  }

  ngOnInit(): void {
    this.getReports();
  }

  protected getReports() {
    this.dataService.findAll().subscribe(responseData => {
      this.reports = responseData;
      this.currentReports = responseData;
    });
  }

  protected onDateSelection(date: NgbDate) {
    if (!this.from && !this.to) {
      this.from = date;
    } else if (this.from && !this.to && date.after(this.from)) {
      this.to = date;
    } else {
      this.to = null;
      this.from = date;
    }

    if (this.from && this.to) {

      const fromDate = new Date(this.from.year, this.from.month - 1, this.from.day);
      const toDate = new Date(this.to.year, this.to.month - 1, this.to.day);

      this.currentReports = this.reports.filter(value => {
        const reportDate = new Date(value.date);
        if (reportDate >= fromDate && reportDate <= toDate) {
          return value;
        }
      });
    }
  }

  protected isHovered(date: NgbDate) {
    return this.from && !this.to && this.hoveredDate && date.after(this.from) && date.before(this.hoveredDate);
  }

  protected isInside(date: NgbDate) {
    return this.to && date.after(this.from) && date.before(this.to);
  }

  protected isRange(date: NgbDate) {
    return date.equals(this.from) || (this.to && date.equals(this.to)) || this.isInside(date) || this.isHovered(date);
  }

  protected validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
