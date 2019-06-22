import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }
  
  public formdata: FormGroup;

  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl(Validators.required),
      age: new FormControl(Validators.required),
      email: new FormControl(Validators.required)
   });
  }



  public onClickSubmit(value : any): void{

  }
}
