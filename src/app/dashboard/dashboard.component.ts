import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard,mat-drawer-content',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentDate:any;
  constructor() { 
    this.currentDate = new Date();
  }
  ngOnInit(): void {
  }

}