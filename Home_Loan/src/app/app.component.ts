import { Component } from '@angular/core';
import { DocumentsService } from './documents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeLoan';

  ngOnInit(): void {
    localStorage.setItem('token','100');
  }

  loggedin(){
    return localStorage.getItem('token');
  }

  loggedout(){
    return localStorage.removeItem('token');
  }
  
}
