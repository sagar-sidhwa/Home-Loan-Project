import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

//Importing Directive
import { CompareValidatorDirective } from './user-change-password/CustomPasswordValidator';

//Loading @Angular Material Here
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoanTrackerComponent } from './loan-tracker/loan-tracker.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AdminApplicationComponent } from './admin-application/admin-application.component';
import { UserApplicationComponent } from './user-application/user-application.component';
import { DetailsComponent } from './details/details.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UpdateAdminDetailsComponent } from './update-admin-details/update-admin-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DocumentsComponent,
    HomeComponent,
    AdminLoginComponent,
    LoanTrackerComponent,
    RegisterAdminComponent,
    RegisterUserComponent,
    PropertyDetailsComponent,
    IncomeDetailsComponent,
    LoanDetailsComponent,
    AccountDetailsComponent,
    AdminApplicationComponent,
    UserApplicationComponent,
    DetailsComponent,
    AdminChangePasswordComponent,
    UserChangePasswordComponent,
    AboutusComponent,
    FaqComponent,
    UpdateUserDetailsComponent,
    UpdateAdminDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'Home/:cid', component:HomeComponent},
      {path:'AdminHome/:aid', component:HomeComponent},
      {path:'AdminLogin', component:AdminLoginComponent},
      {path:'RegisterAdmin', component:RegisterAdminComponent},
      {path:'RegisterAdmin/:id', component:RegisterAdminComponent},
      {path:'RegisterUser', component:RegisterUserComponent},
      {path:'RegisterUser/:id', component:RegisterUserComponent},
      {path:'UpdateUserPassword', component:UserChangePasswordComponent},
      {path:'UpdateUserPassword/:cid', component:UserChangePasswordComponent},
      {path:'UpdateAdminPassword', component:AdminChangePasswordComponent},
      {path:'UpdateAdminPassword/:aid', component:AdminChangePasswordComponent},
      {path:'ApplicationDetails', component:UserApplicationComponent},
      {path:'ApplicationDetails/:cid', component:UserApplicationComponent},
      {path:'AApplicationDetails', component:AdminApplicationComponent},
      {path:'AApplicationDetails/:aid', component:AdminApplicationComponent},
      {path:'Details', component:DetailsComponent},
      {path:'Details/:aid/:cid/:inId/:prId/:lId/:dId/:applicationNumber', component:DetailsComponent},
      {path:'IncomeDetails', component:IncomeDetailsComponent},
      {path:'IncomeDetails/:cid', component:IncomeDetailsComponent},
      {path:'PropertyDetails', component:PropertyDetailsComponent},
      {path:'PropertyDetails/:cid/:inId/:monthlySalary', component:PropertyDetailsComponent},
      {path:'LoanDetails', component:LoanDetailsComponent},
      {path:'LoanDetails/:cid/:inId/:prId/:monthlySalary', component:LoanDetailsComponent},
      {path:'AddDocuments', component:DocumentsComponent},
      {path:'AddDocuments/:id', component:DocumentsComponent},
      {path:'AddDocuments/:cid/:inId/:prId/:lId', component:DocumentsComponent},
      {path:'TrackLoan', component:LoanTrackerComponent},
      {path:'TrackLoan/:cid/:inId/:prId/:lId/:dId/:applicationNumber', component:LoanTrackerComponent},
      {path:'EMICalculator', component:CalculatorComponent},
      {path:'EMICalculator/:cid', component:CalculatorComponent},
      {path:'Faq', component:FaqComponent},
      {path:'Faq/:cid', component:FaqComponent},
      {path:'AdminFaq/:aid', component:FaqComponent},
      {path:'Account', component:AccountDetailsComponent}
    ]),
    BrowserAnimationsModule,
    MatDialogModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
