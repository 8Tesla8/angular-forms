import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }
  
  public gender = ['female', 'men'];

  public userInfo: FormGroup;

  ngOnInit() {
    //first parameter in FormControl is value

    this.userInfo = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(5)]),
      age: new FormControl('',[Validators.required, Validators.min(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required)
   });
  }

  public onClickSubmit(value : UserInfo): void{
    debugger;
  }
}

export class UserInfo{
  public name: string;
  public age: string;
  public email: string;
  public gender: string;
}