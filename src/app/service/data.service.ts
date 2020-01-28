import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from './Errors/AppError';
import { NotFoundError } from './Errors/NotFoundError';
import { Person } from '../http-services/model/Person';



const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService<dataType> {


  constructor(private http: HttpClient, private url) { }



  getAll(): Observable<dataType[]> {
    try {
      return this.http.get<dataType[]>(this.url, httpOptions);
    } catch (error) {
      this.handleError(error);
    }
  }

  get(id): Observable<dataType> {
    try {
      return this.http.get<dataType>(this.url + '/' + id);
    } catch (error) {
      this.handleError(error);
    }
  }


  create(resource): Observable<dataType> {
    try {
      return this.http.post<dataType>(this.url, JSON.stringify(resource));
    } catch (error) {
      this.handleError(error);
    }
  }

  update(resource): Observable<dataType> {
    try {
      return this.http.patch<dataType>(this.url + "/" + resource.id, JSON.stringify(resource));
    } catch (error) {
      this.handleError(error);
    }
  }

  delete(id): Observable<dataType> {
    try {
      return this.http.delete<dataType>(this.url + "/" + id);
    } catch (error) {
      this.handleError(error);
    }

  }

  private handleError(error: Response) {
    if (error.status === 400) {
      throw(new AppError(error))
    }
    if (error.status === 404) {
      throw(new NotFoundError(error))
    }
  }

}
