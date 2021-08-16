import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USER } from '../Models/user';
import { RegisterUserService } from '../register-user.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
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

    public salary:number=0;
    public Rate:number=8.5;
    public amount:number=0;
    public emi:number=0;
    public years:number=0;
    public loanAmount:number=0;

  constructor(private obju:RegisterUserService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    console.log(this.user.cid);
  }

  public Eligibility(){
    this.amount=60*(0.6*this.salary);
  }

  public EMI(){
    this.Rate=0.085;
    //this.emi=((this.loanAmount*this.Rate*(Math.pow(1+this.Rate,this.years))/(Math.pow(1+this.Rate,this.years)-1)))/12;
    let i:number=this.Rate/100;
    this.emi=((this.loanAmount*i*(Math.pow(1+i,this.years))/(Math.pow(1+i,this.years)-1)))/12;
  }


}
