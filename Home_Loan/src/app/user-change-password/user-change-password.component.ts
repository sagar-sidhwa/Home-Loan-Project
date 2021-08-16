import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USER } from '../Models/user';
import { RegisterUserService } from '../register-user.service';


@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {

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

  msgdisplay:string=""
  dis:boolean=false;
  success:boolean=false;
  successmsg:string=""
  userdetail:any="";
  userid:any="";
  ChangePassForm={
    cpassemail:"",
    cpasspass:"",
    cpnewpass:"",
    confirmcpnewpass:""
  }

  constructor(private obj:RegisterUserService,private route:ActivatedRoute,private router:Router) {
    this.user.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    console.log(this.user.cid);
  }

  ngOnInit(): void {
  }

  Passchange(){
    this.obj.getAllUsers().subscribe(response=>{let userfound=false;
      for(let user of response){
        if(user.email==this.ChangePassForm.cpassemail && user.password==this.ChangePassForm.cpasspass){
          userfound=true;
          user.password=this.ChangePassForm.cpnewpass
          user.confirmPassword=this.ChangePassForm.confirmcpnewpass
          this.userid=user.cid;
          this.userdetail=user;
          
          break;
        }
      }
      if(userfound){
        this.success=true;
        this.successmsg="Your Password Has been Changed Successfully.Press OK to Proceed!"
        this.obj.UpdateUser(this.userid,this.userdetail).subscribe();
        
      }
      else{
        this.msgdisplay="No Such Record Exists!"
        this.dis=true;
      }
    })

  }


}
