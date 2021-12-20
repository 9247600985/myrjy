import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $:any;
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
 
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }
}
