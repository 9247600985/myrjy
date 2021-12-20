import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    register=new FormGroup({
      fname:new FormControl('',[Validators.required]),
      lname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phno:new FormControl('',[Validators.required]),
      
    })
    onsubmit(){
   console.log(this.register.value);
    }
    get fname()
    {
       return this.register.get('fname');
    }
    get email()
    {
       return this.register.get('email');
    }
}
