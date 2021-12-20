import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-admintravels',
  templateUrl: './admintravels.component.html',
  styleUrls: ['./admintravels.component.css']
})
export class AdmintravelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  travel=new FormGroup({
    tname:new FormControl('',[Validators.required]),
    tdistance:new FormControl('',[Validators.required]),
    tspecials:new FormControl('',[Validators.required]),
    timg:new FormControl('',[Validators.required])
  })
  onSubmit(){
    console.log(this.travel.value);
  }
  get tname()
 {
    return this.travel.get('tname');
 }

 get tdistance()
 {
    return this.travel.get('tdistance');
 }

 get tspecials()
 {
    return this.travel.get('tspecials');
 }

 get timg()
 {
    return this.travel.get('timg');
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
