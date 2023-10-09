import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/User';
import IUser from '../services/UserModel';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:FormGroup;
  user:IUser = {id:0,userName:'',email:'',phone:''}
  constructor(private fb:FormBuilder, private userService: UserService) { 
    this.registerForm = this.fb.group({
      userName:['',Validators.required],
      email:[''],
      phone:[''],
      billingAddress:this.fb.group({  //nested form group
        city:[''],
        zip:['',[Validators.pattern('[0-9]{5}'),Validators.required]],
        doorNumber:[]})
      });

  }
  ngOnInit(): void {
    //fetch data from server and bind to form
  }
  register(): void {
    console.log('Register', this.registerForm.value);
    this.user = this.registerForm.value;
    this.user.id = 1;
    // post the data back end.
    this.userService.postUser(this.user).subscribe(response => {
      console.log(response);
    });
  } 
}
