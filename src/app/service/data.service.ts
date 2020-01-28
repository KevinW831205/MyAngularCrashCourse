import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './httpConfig';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private url: string) { }

  getAll() {
    try {
      return this.http.get(this.url, httpOptions);
    } catch (error) {
      console.log(error)
      // this.handleError(error);
    }
  }

  get(id: number) {

  }

  post(body) {

  }

  put(body) {

  }

  delete(id: number) {

  }
}
