import { Injectable } from '@angular/core';
import { LOAN } from './Models/loan';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from './Models/documents';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }

  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44302/api/Loans";

  GetAllLoans():Observable<LOAN[]>
  {
    return this.http.get<LOAN[]>(this.req);
  }

  //Method  to Create and Upload a new Document.
  CreateLoan(loan:LOAN):Observable<LOAN>
  {
    return this.http.post<LOAN>(this.req,loan,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
