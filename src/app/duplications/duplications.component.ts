import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-duplications',
  templateUrl: './duplications.component.html',
  styleUrls: ['./duplications.component.css']
})
export class DuplicationsComponent implements OnInit {
  states:any[]
  duplicateform:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.states=[
      {name:"kerala", id:1},
      {name:"Tamil nadu", id:2},
      {name:"Karnataka", id:3},
      {name:"Bihar", id:4},
      {name:"Bengal", id:5},
    ]

    this.duplicateform= this.fb.group({
      addresses: this.fb.array([this.addNewAddressBlock()])
      // this.addNewAddressBlock()
    })
  }

  getAddresses():FormArray{
    return <FormArray>this.duplicateform.get('addresses');
  }

  addNewAddressBlock():FormGroup{
    return this.fb.group({
      addresstype:['office',[Validators.required]],
      street:['',[Validators.required]],
      City:'',
      selectedstate:this.states[0].id
    });
  }

  addAddress():void{
     this.getAddresses().push(this.addNewAddressBlock());
  }
  removeAddress(index:number):void{
    this.getAddresses().removeAt(index);
  }

}


