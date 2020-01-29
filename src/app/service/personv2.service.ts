import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Person } from '../http-services/model/Person';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './httpConfig';

// if person-controller was done in consistent with data service

@Injectable({
  providedIn: 'root'
})
export class Personv2Service extends DataService<Person>{

  constructor(http:HttpClient) {
    super( http , baseUrl+"person-controller")
   }
}
