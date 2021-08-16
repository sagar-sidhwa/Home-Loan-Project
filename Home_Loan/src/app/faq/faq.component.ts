import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN } from '../Models/registeradmin';
import { USER } from '../Models/user';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

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

  state1:string="active"
  state2:string=""
  state3:string=""
  state4:string=""
  state5:string=""

  constructor(private obju:RegisterUserService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.admin.aid=(this.route.snapshot.paramMap.get('aid')) as unknown as number;
    console.log(this.user.cid);
  }

  ChangeState1(){
    this.state1="active";
    this.state2="";
    this.state3="";
    this.state4="";
    this.state5="";
  }
  ChangeState2(){
    this.state2="active";
    this.state1="";
    this.state3="";
    this.state4="";
    this.state5="";
  }
  ChangeState3(){
    this.state3="active";
    this.state2="";
    this.state1="";
    this.state4="";
    this.state5="";
  }
  ChangeState4(){
    this.state4="active";
    this.state2="";
    this.state3="";
    this.state1="";
    this.state5="";
  }
  ChangeState5(){
    this.state5="active";
    this.state2="";
    this.state3="";
    this.state4="";
    this.state1="";
  }

}
