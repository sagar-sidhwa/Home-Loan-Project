import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER } from './Models/user';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }

  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44302/api/PersonalDetails";

  //Method to get the list of all user from the API.
  getAllUsers():Observable<USER[]>
  {
    return this.http.get<USER[]>(this.req);
  }

   //Method  to create a new user.
  CreateUser(user:USER):Observable<USER>
  {
    // return this.httpClient.post<Flight>(this.FlightApiUrl + '/Flights/', JSON.stringify(flight), this.httpOptions)    
    return this.http.post<USER>(this.req,user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  getusersbyID(id:number):Observable<USER[]>
  {
    return this.http.get<USER[]>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  UpdateUser(id:number,user:USER):Observable<any>
  {
    return this.http.put<any>(this.req+"/"+id,user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

}
