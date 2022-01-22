import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminnews',
  templateUrl: './adminnews.component.html',
  styleUrls: ['./adminnews.component.css']
})
export class AdminnewsComponent implements OnInit {
  adminnews:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder) { 
    this.adminnews = this.formbuilder.group({
      cname:['',Validators.required],
      phno:['',Validators.required]
    });
  }

  ngOnInit() {
    this.onSubmit();
  }
  get f() { return this.adminnews.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.adminnews.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.adminnews.value);
    }
  }

}
