import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
//import { ChangePasswordComponent } from './change-password.component';
import { UserChangePasswordComponent } from './user-change-password.component';


@Directive({
  selector: '[PasswordValidator]',
  providers:[
    {provide:NG_VALIDATORS,useExisting:CompareValidatorDirective,multi:true}
  ]
})

export class CompareValidatorDirective implements Validator {
  validate(c:AbstractControl):ValidationErrors|null
  {
    let controlvalue:string=c.value;

    let comparevalue:string=c.root.get("newpass")?.value;
    console.log("Comparing" + comparevalue+ " " +controlvalue)
    if(!(controlvalue==comparevalue))
    {
    
    return {compare:true}
    
    }
return null;
  }

}