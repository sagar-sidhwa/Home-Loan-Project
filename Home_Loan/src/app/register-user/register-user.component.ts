import { Component, OnInit } from '@angular/core';
import { USER } from '../Models/user';
import { RegisterUserService } from '../register-user.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  id:number=2;
  users:USER[]=[];
  user:USER={
    cid:0,
    firstName:"",
    middleName:"",
    lastName:"",
    gender:"MALE",
    address:"",
    phoneNumber:"",
    dob:new Date(),
    email:"",
    nationality:"",
    panNo:"",
    password:"",
    confirmPassword:""
  };

  bform:number=0;

  constructor(private obj:RegisterUserService , private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  post_User():void
  {
    console.log(this.user);
    this.obj.CreateUser(this.user).subscribe(data=>{
      console.log(data);
      alert("Registeration Done! Please Login!!");
      this.router.navigate(['/']);
    });
  }
  
}
