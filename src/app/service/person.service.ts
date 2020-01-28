import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl, httpOptions } from './httpConfig'



@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    try {
      return this.http.get(baseUrl + "person-controller/read-all");
    } catch (error) {
      console.log(error)
    }
  }

  post(person) {
    console.log(JSON.stringify(person))
    try {
      return this.http.post(baseUrl + "person-controller/create", person)
    } catch (error) {
      console.log(error)
    }
  }

  put(person) {
    try {      
      return this.http.put(baseUrl + "person-controller/update/" + person.id, JSON.stringify(person), httpOptions)
    } catch (error) {
      console.log(error);
    }
  }

  delete(id){
    try{
      return this.http.delete(baseUrl+"person-controller/delete/"+id)
    } catch(error){
      console.log(error)
    }
  }

}
