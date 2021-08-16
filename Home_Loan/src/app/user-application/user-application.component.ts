import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../application.service';
import { DocumentsService } from '../documents.service';
import { APPLICATION } from '../Models/application';
import { DOCUMENT } from '../Models/documents';
import { USER } from '../Models/user';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-user-application',
  templateUrl: './user-application.component.html',
  styleUrls: ['./user-application.component.css']
})
export class UserApplicationComponent implements OnInit {

  users:USER[]=[];
  users1:USER[]=[];
    user:USER={
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

  constructor(private objd:DocumentsService,private obju:RegisterUserService,private obja:ApplicationService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.application.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.document.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
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