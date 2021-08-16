import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { ApplicationService } from '../application.service';
import { DocumentsService } from '../documents.service';
import { IncomeService } from '../income.service';
import { LoanService } from '../loan.service';
import { ACCOUNT } from '../Models/account';
import { APPLICATION } from '../Models/application';
import { DOCUMENT } from '../Models/documents';
import { INCOME } from '../Models/income';
import { LOAN } from '../Models/loan';
import { PROPERTY } from '../Models/property';
import { USER } from '../Models/user';
import { PropertyService } from '../property.service';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-loan-tracker',
  templateUrl: './loan-tracker.component.html',
  styleUrls: ['./loan-tracker.component.css']
})
export class LoanTrackerComponent implements OnInit {

  applications:APPLICATION[]=[];

  application ={
    applicationNumber:1320,
    loanStatus : "",
    lId :0,
    prId : 0,
    inId : 0,
    cid : 0,
    aid : 0,
    dId:0,
  }
  constructor(private objc:RegisterUserService,private obji:IncomeService,private objp:PropertyService,private objl:LoanService,private objd:DocumentsService,private obja:AccountService ,private obj:ApplicationService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.application.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.application.inId=(this.route.snapshot.paramMap.get('inId')) as unknown as number;
    this.application.prId=(this.route.snapshot.paramMap.get('prId')) as unknown as number;
    this.application.lId=(this.route.snapshot.paramMap.get('lId')) as unknown as number;
    this.application.dId=(this.route.snapshot.paramMap.get('dId')) as unknown as number;
    this.application.applicationNumber=(this.route.snapshot.paramMap.get('applicationNumber')) as unknown as number;
    console.log(this.application.cid);

    this.objc.getAllUsers().subscribe(cdata=>{
      this.users=cdata;
    });

    this.obji.GetAllIncomes().subscribe(idata=>{
      this.incomes=idata;
    });

    this.objp.GetAllProperties().subscribe(pdata=>{
      this.properties=pdata;
    });

    //console.log(this.properties);

    this.objl.GetAllLoans().subscribe(ldata=>{
      this.loans=ldata;
    });

    this.objd.getDocuments().subscribe(ddata=>{
      this.documents=ddata;
    });
  }

  accounts:ACCOUNT[]=[];
  incomes:INCOME[]=[];
  properties:PROPERTY[]=[];
  loans:LOAN[]=[];
  documents:DOCUMENT[]=[];

  users:USER[]=[];
  ausers:USER[]=[];
  
  account:ACCOUNT={
    balance:0,
    cid:this.application.cid,
  };

  id:number=0;
  temp:any;
  tt:any;
  btnclassname:string="btn";
  btnmsg:string="";
  btnflag:boolean=false;
  accflag:boolean=false;
  appmsg:string="";

  applicationNumber:number=0;
  phoneNumber:number=0;

  //Other required variables.
  btnflag1:boolean=false;
  btnflag2:boolean=true;
  msg:string="";
  alertmsg:string="";
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

  get_details(){
    this.btnflag1=false;
    this.btnflag2=true;
  }

  track(){
    this.btnflag1=true;
    this.btnflag2=false;
  }


  get_applicationsbyID(data:any):void //Get Document Details by ID
  {    
    this.id = data.applicationNumber;

    if(this.id==0 || data.phoneNumber==0)
    {
      this.accflag=false;
      this.btnflag = false;
      this.alertmsg="Enter Your Application Number and Mobile Number Properly"
    }

    else{
    this.objc.getusersbyID(this.application.cid).subscribe(udata=>{
      this.ausers = udata;


    this.obja.getAccounts().subscribe(acdata=>{
      this.accounts=acdata;

    this.obj.getApplicationsbyID(this.id).subscribe(adata=>{
      this.applications=adata;


      var k = Object.values(this.applications);
      this.tt=k[1];
      this.btnmsg = this.tt;

      let apno:number;
      this.tt=k[0];
      apno=this.tt;

      var c = Object.values(this.ausers);
      this.tt=c[6];
      let mno:number;
      mno=this.tt;
      
      if(this.application.applicationNumber==data.applicationNumber && data.phoneNumber==mno)
      {

        this.btnflag = true;

      if(this.btnmsg == "Sent for Verification")
      {
        this.btnclassname="alert-primary";
      }
      if(this.btnmsg == "Verified and Sent for Final Approval")
      {
        this.btnclassname="alert-warning";
      }
      if(this.btnmsg == "Approved")
      {
        this.appmsg="Congractulations Your Application Has Been Approved!"
        this.accflag=true;
        this.btnclassname="alert-success";
      }
      if(this.btnmsg == "Rejected")
      {
        this.btnclassname="alert-danger";
      }

    }

    else{
      this.accflag=false;
      this.btnflag = false;
      this.alertmsg="Enter Your Application Number and Mobile Number Properly"
    }

    });

    });

  });

  }

  }
}
