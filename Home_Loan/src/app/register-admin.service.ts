import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ADMIN } from './Models/registeradmin';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RegisterAdminService {

  constructor(private http:HttpClient) { }

  req:string="https://localhost:44302/api/Admins";

  getAdmins():Observable<ADMIN[]>
  {
    return this.http.get<ADMIN[]>(this.req);
  }

  CreateAdmin(admin:ADMIN):Observable<ADMIN>
  {
    return this.http.post<ADMIN>(this.req,admin,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  getAdminsbyID(id:number):Observable<ADMIN[]>
  {
    return this.http.get<ADMIN[]>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  UpdateAdmin(id:number,admin:ADMIN):Observable<any>
  {
    return this.http.put<any>(this.req+"/"+id,admin,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

}
