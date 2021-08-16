import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN } from '../Models/registeradmin';
import { RegisterAdminService } from '../register-admin.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {

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

  msgdisplay:string=""
  dis:boolean=false;
  success:boolean=false;
  successmsg:string=""
  admindetail:any="";
  adminid:any="";

  ChangePassFormAdmin={
    adminemail:"",
    adminoldpass:"",
    adminnewpass:"",
    adminconfirmpass:""
  }

  constructor(private obj:RegisterAdminService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.admin.aid=(this.route.snapshot.paramMap.get('aid')) as unknown as number;
    console.log(this.admin.aid);
  }

  Passchange(){
    this.obj.getAdmins().subscribe(response=>{let adminfound=false;
      for(let admin of response){
        if(admin.email==this.ChangePassFormAdmin.adminemail && admin.password==this.ChangePassFormAdmin.adminoldpass){
          adminfound=true;
          admin.password=this.ChangePassFormAdmin.adminnewpass
          admin.confirmPassword=this.ChangePassFormAdmin.adminconfirmpass
          this.adminid=admin.aid;
          this.admindetail=admin;
          break;
        }
      }
      if(adminfound){
        this.success=true;
        this.successmsg="Your Password Has been Changed Successfully.Press OK to Proceed!"
        this.obj.UpdateAdmin(this.adminid,this.admindetail).subscribe();
        
      }
      else{
        this.msgdisplay="No Such Record Exists!"
        this.dis=true;
      }
    })

  }


}
