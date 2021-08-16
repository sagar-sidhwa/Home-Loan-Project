import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { APPLICATION } from './Models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }

  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44302/api/Applications";

  //Method to get the list of all Dcouments from the API.
  getApplications():Observable<APPLICATION[]>
  {
    return this.http.get<APPLICATION[]>(this.req);
  }

  getApplicationsbyID(id:number):Observable<APPLICATION[]>
  {
    return this.http.get<APPLICATION[]>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  //Method  to Create and Upload a new Document.
  CreateApplication(application:APPLICATION):Observable<APPLICATION>
  {
    return this.http.post<APPLICATION>(this.req,application,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  UpdateApplications(id:number,application:APPLICATION):Observable<any>
  {
    return this.http.put<any>(this.req+"/"+id,application,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

}
