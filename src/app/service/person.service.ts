import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './httpConfig'



@Injectable({
  providedIn: 'root'
})
export class PersonService extends DataService {

  constructor(http: HttpClient) { 
    super(http, baseUrl+"person-controller/read-all")
  }



}
