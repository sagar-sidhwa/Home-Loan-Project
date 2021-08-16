import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { LOAN } from '../Models/loan';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  constructor(private obj:LoanService,private route: ActivatedRoute,private router:Router) { }

  loans:LOAN[]=[];

  loan:LOAN={ 
    maxLoan:0,
    interestRate:8.5,
    tenure:1,
    loanAmt:0,
    prId:0,
    inId:0,
    cid:0
  };

  salary:number=0;

  ngOnInit(): void {
    this.loan.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.loan.inId=(this.route.snapshot.paramMap.get('inId')) as unknown as number;
    this.loan.prId=(this.route.snapshot.paramMap.get('prId')) as unknown as number;
    this.loan.interestRate=8.5;
    this.salary=(this.route.snapshot.paramMap.get('monthlySalary')) as unknown as number;
    this.loan.maxLoan = this.salary*36;
    this.loan.loanAmt=this.loan.maxLoan;
  }

  post_loan(data:any):void
  {
    data.cid=this.loan.cid;
    data.inId=this.loan.inId;
    data.prId=this.loan.prId;
    data.maxLoan=this.loan.maxLoan;
    this.loan=data;
    console.log(data);
    this.obj.CreateLoan(data).subscribe(ldata=>{
      this.loan=ldata;
        this.router.navigate(['/AddDocuments'+'/'+ldata.cid+'/'+ldata.inId+'/'+ldata.prId+'/'+ldata.lId]);
    });

    //console.log(this.loan);

    //this.router.navigate(['/AddDocuments'+'/'+data.cid+'/'+data.inId+'/'+data.prId+'/'+4]);
  }

}
