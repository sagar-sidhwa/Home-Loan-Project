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
import { ADMIN } from '../Models/registeradmin';
import { USER } from '../Models/user';
import { PropertyService } from '../property.service';
import { RegisterAdminService } from '../register-admin.service';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
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

  accounts:ACCOUNT[]=[];
  account:ACCOUNT={
    accountNumber:0,
    balance:0,
    cid:0,
  }
  incomes:INCOME[]=[];
  properties:PROPERTY[]=[];
  loans:LOAN[]=[];
  documents:DOCUMENT[]=[];
  users:USER[]=[];
  ausers:USER[]=[];


  constructor(private objad:RegisterAdminService,private objc:RegisterUserService,private obji:IncomeService,private objp:PropertyService,private objl:LoanService,private objd:DocumentsService,private obja:AccountService ,private obj:ApplicationService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.admin.aid=(this.route.snapshot.paramMap.get('aid')) as unknown as number;
    this.application.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.application.aid=(this.route.snapshot.paramMap.get('aid')) as unknown as number;
    this.application.inId=(this.route.snapshot.paramMap.get('inId')) as unknown as number;
    this.application.prId=(this.route.snapshot.paramMap.get('prId')) as unknown as number;
    this.application.lId=(this.route.snapshot.paramMap.get('lId')) as unknown as number;
    this.application.dId=(this.route.snapshot.paramMap.get('dId')) as unknown as number;
    this.application.applicationNumber=(this.route.snapshot.paramMap.get('applicationNumber')) as unknown as number;
    console.log(this.application);

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

    this.obj.getApplications().subscribe(apldata=>{
      this.applications=apldata;
      console.log(this.applications);
    });

    this.obja.getAccounts().subscribe(adata=>{
      this.accounts=adata;
    });
  }

  btnflag:boolean=true;
  accflag:boolean=false;

  status:string="Sent for Verification";
  loanamt:any;
  accno:any;
  bal:any;


  UpdateStatus(){

    //Find Loan
    for(let l of this.loans)
    {
      if(this.application.lId==l.lId)
      {
        this.loanamt=l.loanAmt;
      }
    }

    //Find have any Account No
    for(let a of this.accounts)
    {
      if(this.application.cid==a.cid)
      {
        this.accflag=true;
        this.accno = a.accountNumber;
        this.bal = a.balance;
      }
    }

    if(this.status == "Sent for Verification")
      {
        this.application.loanStatus=this.status;
        this.obj.UpdateApplications(this.application.applicationNumber,this.application).subscribe(apdata=>{
          console.log(apdata)
          this.application=apdata;
          this.router.navigate(['/AApplicationDetails'+'/'+this.admin.aid]);
        });
      }
      if(this.status == "Verified and Sent for Final Approval")
      {
        console.log(this.application.applicationNumber,this.application);
        this.application.loanStatus=this.status;
        this.obj.UpdateApplications(this.application.applicationNumber,this.application).subscribe(apdata=>{
          console.log(apdata)
          this.application=apdata;
          this.router.navigate(['/AApplicationDetails'+'/'+this.admin.aid]);
        });
      }
      if(this.status == "Approved")
      {
        if(this.accflag)
        {
          for(let a of this.accounts)
          {
            if(this.application.cid==a.cid)
            {
              //Update Account
              a.balance=a.balance+this.loanamt;
              let ano:any;
              ano=a.accountNumber;
              this.obja.UpdateAccounts(ano,a).subscribe(adata=>{
              console.log(adata)
              this.account=adata;

              this.application.loanStatus=this.status;
              this.obj.UpdateApplications(this.application.applicationNumber,this.application).subscribe(apdata=>{
              console.log(apdata)
              this.application=apdata;

              this.router.navigate(['/AApplicationDetails'+'/'+this.admin.aid]);
              });

            });
          }
          }
        }

        else
        {
          this.account.balance=this.loanamt;
          this.account.cid=this.application.cid;
          this.obja.CreateAccount(this.account).subscribe(adata=>{
              console.log(adata)
              this.account=adata;

              this.application.loanStatus=this.status;
              this.obj.UpdateApplications(this.application.applicationNumber,this.application).subscribe(apdata=>{
                console.log(apdata)
                this.application=apdata;

                this.router.navigate(['/AApplicationDetails'+'/'+this.admin.aid]);
              });

            });
        }

      }


      if(this.status == "Rejected")
      {
        this.application.loanStatus=this.status;
        this.obj.UpdateApplications(this.application.applicationNumber,this.application).subscribe(apdata=>{
          console.log(apdata)
          this.application=apdata;

          this.router.navigate(['/AApplicationDetails'+'/'+this.admin.aid]);
        });
      }

  }

}
