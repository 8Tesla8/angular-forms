import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-form',
  templateUrl: './static-form.component.html',
  styleUrls: ['./static-form.component.css']
})
export class StaticFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onClickSubmit(value: User): void {
    let valid = true;
    

    if (value.email === undefined ||
      value.email === null ||
      value.email === '') {
      alert('Email is emtpy');
      valid = false;
    }

    if (value.password === undefined ||
      value.password === null ||
      value.password === '') {
      alert('Password is emtpy');
      valid = false;
    }


    if(valid === false) 
      return;

    alert(
      'Email: ' + value.email + '\n' +
      'Password: ' + value.password
    );
  }
}

export class User {
  public email: string;
  public password: string;
}
