import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }
}
