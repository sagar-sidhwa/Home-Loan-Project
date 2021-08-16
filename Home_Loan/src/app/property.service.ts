import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { PROPERTY } from './Models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  req:string="https://localhost:44302/api/Properties";

  GetAllProperties():Observable<PROPERTY[]>
  {
    return this.http.get<PROPERTY[]>(this.req);
  }

  //Method  to Create and Upload a new Document.
  CreateProperty(property:PROPERTY):Observable<PROPERTY>
  {
    return this.http.post<PROPERTY>(this.req,property,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
