import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:string = '';
  creditCard:string = '';
  @ViewChild('lgForm') form:any;
  @ViewChild('cCard') ccInput:ElementRef | undefined;	

  constructor() { }

  ngOnInit(): void {
  }

  validate(): boolean {
    return this.userName.length > 0 && this.creditCard.length > 0;
  }

  login(data:any): void {
    console.log('Login', this.userName);
    console.log('Login', data);
    console.log('Login', this.form);
    console.log('Login', this.ccInput);
  }

}
