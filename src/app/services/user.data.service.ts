import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {handleError} from './data.service.utils';
import {Login} from '../models/Login';
import {Session} from '../models/Session';

@Injectable()
export class UserDataService {

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

  login(login: Login): Observable<Session> {
    return this.http.post<Session>(this.apiURL + '/login?type=' + login.type, login, this.httpOptions)
      .pipe(retry(1), catchError(handleError));
  }
}