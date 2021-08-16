import { Component, OnInit } from '@angular/core';
import { RegisterAdminService } from '../register-admin.service';
import { ADMIN } from '../Models/registeradmin';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  admins:ADMIN[]=[];

  admin:ADMIN ={
    aid:0,
    firstName : "",
    middleName :"",
    lastName : "",
    gender : "MALE",
    email : "",
    nationality : "",
    bankName : "",
    password : "",
    confirmPassword : "",
  }

  adid:number=0;
  //Other required variables.
  msg:string="";
  u_msg:string="";
  d_msg:string="";
  e_msg:string="";

  flag_get:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_delete:boolean=false;
  flag_register:boolean=false;

  update_id:number=0;
  delete_id:number=0;

  constructor(private obj:RegisterAdminService, private route: ActivatedRoute,private router: Router) {
    
    this.adid = this.route.snapshot.params.id;
    console.log(this.adid);
  }

  ngOnInit(): void {

  }


  get_api():void
  {
    this.obj.getAdmins().subscribe(data=>{
      this.admins=data;
      this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.admins);
    });
  }

  post_api(data:any):void //Create New Use POST
  {
    console.log(data);
    console.log(this.admin);
    //this.router.navigate(['/AdminLogin']);

    this.obj.CreateAdmin(data).subscribe(data=>{
      this.msg="Successfully created "+data.aid;
      //Logging the response received from web api.
      console.log(data);
      console.log(this.admin);
      alert("Registeration Done! Please Login!!");
      this.router.navigate(['/AdminLogin']);
      });
    
  }

  /*
  put_api(id:number,data:any):void  //UPDATE Existing Use PUT
  {
    this.obj.updateUser(id,data).subscribe(data=>{
      this.u_msg="Successfully updated player with jersey "+id;
      console.log(data);
    })

  }

  delete_api(id:number):void  //DELETE Existing Use Delete
  {
    this.obj.deleteUser(id).subscribe(data=>{
      this.d_msg="Successfully deleted player with jersey "+id;
      console.log(data);
    })
    
  }

  error_api():void 
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=true;

    this.obj.register().subscribe((data)=>{
    console.log(data);
    },
    (error)=>{
    this.e_msg=error;
    }
    );
  }
*/
  btn_post():void
  {
    this.flag_get=false;
    this.flag_post=true;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=false;
  }
  /*
  btn_put():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=true;
    this.flag_delete=false;
    this.flag_register=false;
  }

  btn_delete():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_delete=true;
    this.flag_register=false;
  }
  */

}
