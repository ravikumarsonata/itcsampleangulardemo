import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import * as userdatajson from '../assets/users.json';




@Injectable({
  providedIn: 'root'
})
export class CurdService {
  constructor(private http: HttpClient) { }
  public BASE_API_URL= environment.BASE_API_URL;
  public getuserData:any= userdatajson;

  public responsedata:any;
  public headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  public requestOptions = {
    headers: new HttpHeaders(this.headers),
  };

  post(url:any, data:any) {
    return this.http.post(url, data, {
      observe: 'response',
      headers: this.createHeaders(),
    });
  }
  createHeaders() {
    return new HttpHeaders().set('Content-Type', `application/json`);
  }
  getData(): Observable<any> {
    debugger;
    return this.http.get("./assets/users.json");
  }
  deleteData(id:number): Observable<any> {
    return this.http.delete(this.BASE_API_URL+ "/api/users/"+id);
  }
  addData(employee:Employee): Observable<any> {
    debugger;
    return this.http.post(this.BASE_API_URL+ "/api/users/",employee);
  }
  updateData(employee:Employee): Observable<any> {
    debugger;
    return this.http.post(this.BASE_API_URL+ "/api/users/",employee);
  }

}
