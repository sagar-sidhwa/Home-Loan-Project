import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN } from '../Models/registeradmin';
import { USER } from '../Models/user';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  
  users:USER[]=[];
  users1:USER[]=[];
    user:USER={
      cid:0,
      firstName:"",
      middleName:"",
      lastName:"",
      gender:"",
      address:"",
      phoneNumber:"",
      age:0,
      email:"",
      nationality:"",
      aadharNo:0,
      panNo:"",
      password:"",
      confirmPassword:""
    };

  constructor(private obju:RegisterUserService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.admin.aid=(this.route.snapshot.paramMap.get('aid')) as unknown as number;
    console.log(this.user.cid);
    console.log(this.admin.aid);


  }

  lflag:boolean=false;
  message:string="";

  login(data:any)
  {
    console.log(data.email,data.password);

    this.obju.getAllUsers().subscribe(cdata=>{
      this.users=cdata;

      for(let u of this.users)
      {
        if(data.email == u.email && data.password == u.password)
        {
          this.lflag=true;
          this.router.navigate(['/ApplicationDetails'+'/'+u.cid]);
        }
      }

      if(this.lflag==false)
      {
        console.log(this.message);
        this.message="*Enter Your Details Correctly";
      }
    });

  }

  /*

  lflag:boolean=true;

  loggedin(){
    return localStorage.getItem('token');
  }

  loggedout(){
    return localStorage.removeItem('token');
  }

  login(){
    this.lflag=false;
  }

  */

}
