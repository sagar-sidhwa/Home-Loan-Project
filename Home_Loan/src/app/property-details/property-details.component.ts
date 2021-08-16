import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROPERTY } from '../Models/property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  properties :PROPERTY[]=[];
  property:PROPERTY={
    propertyName:"",
    location:"",
    inId:0,
    cid:0,
  };

  salary:number=0;

  constructor(private obj:PropertyService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    ///this.property.inId=1;
    ///this.property.cid=1005;
    ///this.salary = 25000;
    this.property.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.property.inId=(this.route.snapshot.paramMap.get('inId')) as unknown as number;
    this.salary=(this.route.snapshot.paramMap.get('monthlySalary')) as unknown as number;
  }

  post_property(data:any):void
  {
    //this.obj.CreateProperty(this.property).subscribe();
    console.log(this.property.prId);
    data.cid=this.property.cid;
    data.inId=this.property.inId;
    this.property=data;
    console.log(data)
    console.log(this.property);

    this.obj.CreateProperty(data).subscribe(response=>{
      //Logging the response received from web api.
      this.router.navigate(['/LoanDetails'+'/'+response.cid+'/'+response.inId+'/'+response.prId+'/'+this.salary]);
      });
      //this.router.navigate(['/LoanDetails'+'/'+data.cid+'/'+data.inId+'/'+2+'/'+this.salary]);
  }
}
