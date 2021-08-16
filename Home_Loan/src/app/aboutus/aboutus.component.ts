import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USER } from '../Models/user';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  
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

  constructor(private obju:RegisterUserService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    console.log(this.user.cid);
  }

}
