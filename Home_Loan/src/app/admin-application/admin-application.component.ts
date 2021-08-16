import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../application.service';
import { DocumentsService } from '../documents.service';
import { APPLICATION } from '../Models/application';
import { DOCUMENT } from '../Models/documents';
import { ADMIN } from '../Models/registeradmin';
import { USER } from '../Models/user';
import { RegisterAdminService } from '../register-admin.service';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-admin-application',
  templateUrl: './admin-application.component.html',
  styleUrls: ['./admin-application.component.css']
})
export class AdminApplicationComponent implements OnInit {

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

  applications:APPLICATION[]=[];
    application ={
      applicationNumber:1320,
      loanStatus : "",
      lId :0,
      prId : 0,
      inId : 0,
      cid : 0,
      aid : 0,
    }

    documents:DOCUMENT[]=[];
    document:DOCUMENT={
      dId:0,
      pancard:"",
      voterId : "",
      salarySlip : "",
      loa : "",
      noc : "",
      agreement : "",
      lId : 0,
      prId : 0,
      inId : 0,
      cid : 0,
  };
  

  constructor(private objad:RegisterAdminService,private objd:DocumentsService,private obju:RegisterUserService,private obja:ApplicationService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.admin.aid=(this.route.snapshot.paramMap.get('aid')) as unknown as number;
    this.application.aid=(this.route.snapshot.paramMap.get('aid')) as unknown as number;
    
    this.objad.getAdminsbyID(this.admin.aid).subscribe(addata=>{
      this.admins=addata;
    });

    console.log(this.user.cid);
  }

  iflag:boolean=true;
  tflag:boolean=false;

  ViewDetails(){
    //this.acount=2;
    this.iflag=true;
    this.tflag=true;

    this.obju.getAllUsers().subscribe(cdata=>{
      this.users=cdata;
    });
    
    this.obja.getApplications().subscribe(adata=>{
      this.applications=adata;
    });

    this.objd.getDocuments().subscribe(ddata=>{
      this.documents=ddata;
    });
}

}
