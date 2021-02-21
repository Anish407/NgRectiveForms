import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';


function rangeValidation(control: AbstractControl): { [key: string]: boolean } {
  if (control.value > 5 && control.value < 10) {
    return { range: true }
  }

  return null;
}

function validationsWithPArams(min: number, max:number): ValidatorFn {

  return (control: AbstractControl): { [key: string]: boolean }=>{
    if (control.value > min && control.value < max) {
      return { range: true }
    }

    return null;
  }

}

@Component({
  selector: 'app-validationss',
  templateUrl: './validationss.component.html',
  styleUrls: ['./validationss.component.css']
})


export class ValidationssComponent implements OnInit {

  validationform: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validationform = this.fb.group({
      msgtype: ['sms'],
      emailid: [''],
      phone: [''],
      address: [null, [rangeValidation]],
      advc: [null,validationsWithPArams(2,20)]
    });

    //listen to changes
    this.validationform.get('msgtype').valueChanges.subscribe(value=> this.msgTypeSelected(value));
  }

  msgTypeSelected(messagetype:string) {
    if (messagetype === "email") {
      this.setmsgTypeValidation('emailid', 'phone', [Validators.required]);
    }
    else {
      this.setmsgTypeValidation('phone', 'emailid', [Validators.required, Validators.email]);
    }
  }

  setmsgTypeValidation(enable: string, disable: string, validations: ValidatorFn[]): void {
    this.validationform.get(enable).setValidators([Validators.required]);
    this.validationform.controls[disable].disable();
    this.validationform.controls[enable].enable();
    this.validationform.controls[disable].clearValidators();
    this.validationform.updateValueAndValidity();
  }

}
