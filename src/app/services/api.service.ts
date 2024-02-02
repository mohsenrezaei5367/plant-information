import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './app-global';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {

    this.http = Global.Injector?.get(HttpClient);

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': ' application/json-patch+json'
    })
  };


  public post(url: string, obj: any) {
    return this.http.post<any>(url, obj);
  }
}
