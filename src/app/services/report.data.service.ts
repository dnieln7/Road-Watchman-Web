import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {handleError} from './data.service.utils';
import {Report} from '../models/Report';

@Injectable()
export class ReportDataService {

  private apiURL = 'https://calm-gorge-58988.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  findAll(): Observable<Array<Report>> {
    return this.http.get<Array<Report>>(this.apiURL + '/report', this.httpOptions)
      .pipe(retry(1), catchError(handleError));
  }

  findById(id: number): Observable<Report> {
    return this.http.get<Report>(this.apiURL + '/report/' + id, this.httpOptions)
      .pipe(retry(1), catchError(handleError));
  }

  update(report: Report): Observable<Report> {
    return this.http.put<Report>(this.apiURL + '/report/' + report.id, report, this.httpOptions)
      .pipe(retry(1), catchError(handleError));
  }
}
