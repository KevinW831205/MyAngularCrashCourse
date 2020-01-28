import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl, httpOptions } from './httpConfig'
import { Person } from '../http-services/model/Person';
import { Observable } from 'rxjs';
import { AppError } from './Errors/AppError';
import { NotFoundError } from './Errors/NotFoundError';
import { BadRequestError } from './Errors/BadRequestError';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Person[]> {
    try {
      return this.http.get<Person[]>(baseUrl + "person-controller/read-all");
    } catch (error) {
      this.handleError(error);
    }
  }

  post(person): Observable<Person> {
    console.log(JSON.stringify(person))
    try {
      return this.http.post<Person>(baseUrl + "person-controller/create", person)
    } catch (error) {
      this.handleError(error);
    }
  }

  put(person): Observable<Person> {
    try {      
      return this.http.put<Person>(baseUrl + "person-controller/update/" + person.id, null, httpOptions)
    } catch (error) {
      this.handleError(error);
    }
  }

  delete(id) : Observable<Person>{
    try{
      return this.http.delete<Person>(baseUrl+"person-controller/delete/"+id)
    } catch(error){
      this.handleError(error);
    }
  }

  private handleError(error: Response) {
    console.log("service error handling")
    if (error.status === 400) {
      throw(new BadRequestError(error))
    }
    if (error.status === 404) {
      throw(new NotFoundError(error))
    }
  }

}
