import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class ServiceProvider {
  private apiUrl = "https://jsonplaceholder.typicode.com";

  constructor(public http: Http) {
  }

  getPhotos() {
    return this.http.get(this.apiUrl + '/photos').map(res => res.json());
  }



}
