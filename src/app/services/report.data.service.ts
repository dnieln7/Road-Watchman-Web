import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {handleError} from './data.service.utils';
import {Report} from '../models/Report';

@Injectable()
export class ReportDataService {

  apiURL = 'https://calm-gorge-58988.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  findAll(user: number): Observable<Array<Report>> {
    return this.http.get<Array<Report>>(this.apiURL + '/report?user=' + user, this.httpOptions)
      .pipe(retry(1), catchError(handleError));
  }

  update(report: Report): Observable<Report> {
    return this.http.put<Report>(this.apiURL + '/report/' + report.id, this.httpOptions)
      .pipe(retry(1), catchError(handleError));
  }
}
