import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  custodianid: any;
  password: any;
  custodianData: any = [];
  constructor(private http: HttpClient, private dataSvc: DataService,private router:Router) {
    this.custodianData = this.getData('');
    this.custodianid='DBS001';
    this.password='DBS001';

  }

  ngOnInit(): void {
  }
  getData(url:string){
    return this.dataSvc.getDataFromApi('');
  }
  handleLogin(){
    this.router.navigate(['dashboard']);
  }

}
