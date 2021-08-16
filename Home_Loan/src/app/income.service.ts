import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { INCOME } from './Models/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http:HttpClient) { }

  req:string="https://localhost:44302/api/IncomeDetails";

  GetAllIncomes():Observable<INCOME[]>
  {
    return this.http.get<INCOME[]>(this.req);
  }

  //Method  to create a new admin.
  CreateIncome(income:INCOME):Observable<INCOME>
  {
    return this.http.post<INCOME>(this.req,income,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  GetIncomeById(id:number):Observable<any>
  {
    return this.http.get<any>(this.req+'/'+id);
    
  }
}
