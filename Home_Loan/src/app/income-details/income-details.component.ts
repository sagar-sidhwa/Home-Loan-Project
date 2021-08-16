import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Console } from 'console';
import { IncomeService } from '../income.service';
import { INCOME } from '../Models/income';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent implements OnInit {

  incomesbyid:any[]=[]
  id:any;
  msg:string="";

  tid:number=0;

  iflag1:boolean=false;
  iflag2:boolean=false;

  dtemp:any;
  
  incomes:INCOME[]=[];
  income:INCOME={
    typeEmployment:"Salaried",
    organizationType:"",
    organizationName:"",
    organizationAddress:"",
    cid:0,
  }

  constructor(private obj:IncomeService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.income.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    //console.log(this.income.cid)
  }

  post_Income(data:any):void
  {
    data.cid=this.income.cid;
    console.log(data);
    this.income=data;
    console.log(this.income);

    this.obj.CreateIncome(data).subscribe(response=>{
      //Logging the response received from web api.
      this.router.navigate(['/PropertyDetails'+'/'+response.cid+'/'+response.inId+'/'+response.monthlySalary]);
      });

    //this.router.navigate(['/PropertyDetails'+'/'+this.income.cid+'/'+5+'/'+this.income.monthlySalary]);
  }

  postt_Income():void
  {
    console.log(this.income);
    this.obj.GetAllIncomes().subscribe(response=>{
      this.dtemp = response;
      //console.log(this.dtemp);
      //console.log(this.income);
      for(let c of this.dtemp)
      {
        if((this.income.cid==c.cid) && (this.income.typeEmployment==c.typeEmployment) &&(this.income.organizationType==c.organizationType) && (this.income.organizationName==c.organizationName) && (this.income.organizationAddress==c.organizationAddress) && (this.income.monthlySalary==c.monthlySalary))
        {
          console.log(c.monthlySalary);
          this.router.navigate(['/PropertyDetails'+'/'+c.cid+'/'+c.inId+'/'+c.monthlySalary]);
          break;
        }
      }
      //this.router.navigate(['/PropertyDetails'+'/'+this.income.cid+'/'+this.income.inId+'/'+this.income.monthlySalary])

    });
  }

  enablenew(){
    this.iflag1=true;
    this.iflag2=false;
    this.incomes=[];
  }

  checkselected(data:any){
    console.log(data);
    console.log(data.iiId);

  }

  Get_api_cid(){
    this.iflag1=false;
    this.iflag2=true;
    this.obj.GetAllIncomes().subscribe(response=>{
      response.forEach(element => {if(element.cid==this.income.cid){
        console.log(element);
        this.incomes.push(element);
        console.log(this.incomes);
      }
      });
    })
  }

  
}
