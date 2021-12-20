import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-admintools',
  templateUrl: './admintools.component.html',
  styleUrls: ['./admintools.component.css']
})
export class AdmintoolsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  comupdate=new FormGroup({
    cname:new FormControl('',[Validators.required]),
    phno:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    selectCategory:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required])
  })
  onSubmit(){
    console.log(this.comupdate.value);
  }
  get cname()
 {
    return this.comupdate.get('cname');
 }

 get phno()
 {
    return this.comupdate.get('phno');
 }

 get address()
 {
    return this.comupdate.get('address');
 }

 get selectCategory()
 {
    return this.comupdate.get('selectCategory');
 }
 get img()
 {
    return this.comupdate.get('img');
 }
url1 = [];
onselectFiless(e:any) {
  if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url1=event.target.result;
      }
  }
}
}
