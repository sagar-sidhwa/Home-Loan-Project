import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN } from '../Models/registeradmin';
import { RegisterAdminService } from '../register-admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admins:ADMIN[]=[];

  admin:ADMIN ={
    aid:0,
    firstName : "",
    middleName :"",
    lastName : "",
    gender : "",
    phoneNumber : 0,
    email : "",
    nationality : "",
    bankName : "",
    password : "",
    confirmPassword : "",
  }

  constructor(private obja:RegisterAdminService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //localStorage.setItem('token','100');
  }

  lflag:boolean=false;
  message:string="";

  login(data:any)
  {
    console.log(data.email,data.password);

    this.obja.getAdmins().subscribe(adata=>{
      this.admins=adata;

      for(let a of this.admins)
      {
        if(data.email == a.email && data.password == a.password)
        {
          this.lflag=true;
          this.router.navigate(['/AApplicationDetails'+'/'+a.aid]);
        }
      }

      if(this.lflag==false)
      {
        console.log(this.message);
        this.message="*Enter Your Details Correctly";
      }
    });

  }

}
