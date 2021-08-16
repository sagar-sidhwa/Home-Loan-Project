import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ACCOUNT } from './Models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44302/api/Accounts";

  //Method to get the list of all Dcouments from the API.
  getAccounts():Observable<ACCOUNT[]>
  {
    return this.http.get<ACCOUNT[]>(this.req);
  }

  getAccountsbyID(id:number):Observable<ACCOUNT[]>
  {
    return this.http.get<ACCOUNT[]>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  CreateAccount(account:ACCOUNT):Observable<ACCOUNT>
  {
    return this.http.post<ACCOUNT>(this.req,account,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  UpdateAccounts(id:number,account:ACCOUNT):Observable<any>
  {
    return this.http.put<any>(this.req+"/"+id,account,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

}
