import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from './Models/documents';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DocumentsService {

  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44302/api/Documents";

  
  //Method to get the list of all Dcouments from the API.
  getDocuments():Observable<DOCUMENT[]>
  {
    return this.http.get<DOCUMENT[]>(this.req);
  }

  getDocumentsbyID(id:number):Observable<DOCUMENT[]>
  {
    return this.http.get<DOCUMENT[]>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  //Method  to Create and Upload a new Document Dynamic.




  //Method  to Create and Upload a new Document.
  UploadDocuments(document:DOCUMENT):Observable<DOCUMENT>
  {
    return this.http.post<DOCUMENT>(this.req+"/Upload",document,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  //Method to Update an Existing Document.
  UpdateDocuments(id:number,document:DOCUMENT):Observable<any>
  {
    return this.http.put<any>(this.req+"/"+id,document,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  //Method to Delete an Existing Dcoument.
  DeleteDocument(id:number):Observable<any>
  {
    return this.http.delete<any>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  //Method to test Error Handling.
  register():Observable<any>
  {
    //Giving incorrect URL.
    return this.http.get<any>('https://localhost:44302/api/Documents')
          .pipe(catchError(this.manageError));
  }

  //Method to handle errors.
  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }

}
