import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DocumentsService } from '../documents.service';
import { DOCUMENT } from '../Models/documents';
import { error } from '@angular/compiler/src/util';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../application.service';
import { APPLICATION } from '../Models/application';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

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

  constructor(private http:HttpClient,private obja:ApplicationService,private obj:DocumentsService,private route: ActivatedRoute,private router:Router) { 
    //this.cuid = this.route.snapshot.params.id;
    //console.log(this.cuid);
  }

  ngOnInit(): void {

    this.document.cid=(this.route.snapshot.paramMap.get('cid')) as unknown as number;
    this.document.inId=(this.route.snapshot.paramMap.get('inId')) as unknown as number;
    this.document.prId=(this.route.snapshot.paramMap.get('prId')) as unknown as number;
    this.document.lId=(this.route.snapshot.paramMap.get('lId')) as unknown as number;
    console.log(this.document);
  }

  cuid:number=0;

  documents:DOCUMENT[]=[];

  applications:APPLICATION[]=[];

  message:string="";

  //@Output() public onUploadFinished = new EventEmitter();


  id:number=9; //Using this Default for Primary key access

  application:APPLICATION={
    loanStatus : "Sent for Verification",
    lId : this.document.lId,
    prId : this.document.prId,
    inId : this.document.inId,
    cid: this.document.cid,
    aid : 2504,
  }

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


  docc_api = (data1:any,data2:any,data3:any,data4:any,data5:any,data6:any) =>
  {
    console.log()
    let temp:any;
    let f1:File[]=data1;
    let f2:File[]=data2;
    let f3:File[]=data3;
    let f4:File[]=data4;
    let f5:File[]=data5;
    let f6:File[]=data6;

    let fname1:any;
    let fname2:any;
    let fname3:any;
    let fname4:any;
    let fname5:any;
    let fname6:any;

    const formData1 = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();
    const formData4 = new FormData();
    const formData5 = new FormData();
    const formData6 = new FormData();

    fname1=Array.from(f1).map((file, index) => {
    fname1=this.document.lId+file.name;
    formData1.append('file'+index, file,fname1);
    return fname1;
    });

    this.http.post('https://localhost:44302/api/Documents/PostDoc',formData1).subscribe(event => {
    });

    fname2=Array.from(f2).map((file, index) => {
    fname2=this.document.lId+file.name;
    formData2.append('file'+index, file,fname2);
    return fname2;
    });

    this.http.post('https://localhost:44302/api/Documents/PostDoc',formData2).subscribe(event => {
    });

    fname3=Array.from(f3).map((file, index) => {
    fname3=this.document.lId+file.name;
    formData3.append('file'+index, file,fname3);
    return fname3;
    });

    this.http.post('https://localhost:44302/api/Documents/PostDoc',formData3).subscribe(event => {
    });

    fname4=Array.from(f4).map((file, index) => {
    fname4=this.document.lId+file.name;
    formData4.append('file'+index, file,fname4);
    return fname4;
    });

    this.http.post('https://localhost:44302/api/Documents/PostDoc',formData4).subscribe(event => {
    });

    fname5=Array.from(f5).map((file, index) => {
    fname5=this.document.lId+file.name;
    formData5.append('file'+index, file,fname5);
    return fname5;
    });

    this.http.post('https://localhost:44302/api/Documents/PostDoc',formData5).subscribe(event => {
    });

    fname6=Array.from(f6).map((file, index) => {
    fname6=this.document.lId+file.name;
    formData6.append('file'+index, file,fname6);
    return fname6;
    });

    this.http.post('https://localhost:44302/api/Documents/PostDoc',formData6).subscribe(event => {
    });


    let str="https://localhost:44302/Resources/UDocuments";
    this.document.pancard="https://localhost:44302/Resources/UDocuments/"+fname1;
    this.document.voterId="https://localhost:44302/Resources/UDocuments/"+fname2;
    this.document.salarySlip="https://localhost:44302/Resources/UDocuments/"+fname3;
    this.document.loa="https://localhost:44302/Resources/UDocuments/"+fname4;
    this.document.noc="https://localhost:44302/Resources/UDocuments/"+fname5;
    this.document.agreement="https://localhost:44302/Resources/UDocuments/"+fname6;

    console.log(fname1,fname2,fname3,fname4,fname5,fname6);
    this.obj.UploadDocuments(this.document).subscribe(data=>{
        //Logging the response received from web api.
        console.log(data);
        console.log(this.document);

        this.application.loanStatus="Sent for Verification",
        this.application.lId = this.document.lId,
        this.application.prId = this.document.prId,
        this.application.inId = this.document.inId,
        this.application.cid = this.document.cid,
        this.application.aid = 2504,


        this.obja.CreateApplication(this.application).subscribe(adata=>{
          
          this.router.navigate(['/TrackLoan'+'/'+adata.cid+'/'+adata.inId+'/'+adata.prId+'/'+adata.lId+'/'+data.dId+'/'+adata.applicationNumber]);

        });

        });
  }



  doc_api = (data:any) =>
  {
    //console.log(data);
    let filesToUpload : File[] = data;
    const formData = new FormData();
    
    Array.from(filesToUpload).map((file, index) => {
    return formData.append('file'+index, file, file.name);
    });

    this.http.post('https://localhost:44302/api/Documents', formData).subscribe(event => {
        console.log(event);
      });

  }



  //Upload Files Dynamic
  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    console.log(fileToUpload);
    const formData = new FormData();
    formData.append('pancard', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:44302/api/Documents', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        console.log(event);
      });

  }




  postt_api(data:any):void //Create New Use POST
  {
    console.log(data);
    data.lId = this.document.lId;
    data.prId = this.document.prId;
    data.inId = this.document.inId;
    data.cid = this.document.cid;
    console.log(data);
    console.log(this.document);
  }

  get_api():void //Get All Documents Details
  {
    this.obj.getDocuments().subscribe(data=>{
      this.documents=data;
      this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.documents);
    });
  }


  get_apibyID(data:any):void //Get Document Details by ID
  {
    console.log(data);
    console.log(typeof(data.dId));
    this.id = data.dId;
    this.obj.getDocumentsbyID(this.id).subscribe(data=>{
      this.documents=data;
      //Logging the response recieved from web api.
      console.log(this.documents);
    });
  }

  post_api(data:any):void //Create New Use POST
  {
    console.log(data);
    console.log(this.document);
    data.lId = this.document.lId;
    data.prId = this.document.prId;
    data.inId = this.document.inId;
    data.cid = this.document.cid;
    this.obj.UploadDocuments(data).subscribe(data=>{
    this.msg="Successfully created "+data.dId;
    //Logging the response received from web api.
    console.log(data);
    console.log(this.document);
    
    });
  }


  put_api(id:number,data:any):void  //UPDATE Existing Use PUT
  {
    this.obj.UpdateDocuments(id,data).subscribe(data=>{
      this.u_msg="Successfully Updated Documents"+id;
      console.log(data);
    })

  }

  delete_api(id:number):void  //DELETE Existing Use Delete
  {
    this.obj.DeleteDocument(id).subscribe(data=>{
      this.d_msg="Successfully Deleted Document Record"+id;
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

  btn_post():void
  {
    this.flag_get=false;
    this.flag_post=true;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=false;
  }

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


}
