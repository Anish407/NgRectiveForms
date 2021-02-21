import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from './models/Customer';

@Component({
  selector: 'app-reativeform1',
  templateUrl: './reativeform1.component.html',
  styleUrls: ['./reativeform1.component.css']
})
export class Reativeform1Component implements OnInit {

  loginMode: LoginModel;
  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: [{ value: "a@b.bom", disabled: false }, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberMe: true

    })



    // this.loginForm= new FormGroup({
    //     email:new FormControl(),
    //     password: new FormControl(),
    //     rememberMe: new FormControl(Boolean)
    // }) rather than using this approach use formbuilder to create forms

  }

  setAll() {
    this.loginForm.setValue({
      email: "anish",
      password: "samplepassword",
      rememberMe: false
    })
  }
  patchval() {
    this.loginForm.patchValue({
      rememberMe: true
    })
  }

}
