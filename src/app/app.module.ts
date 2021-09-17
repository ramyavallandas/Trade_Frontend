import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
// For MDB Angular Pro
//import { MDBBootstrapModulesPro,DropdownModule, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { OmsComponent } from './oms/oms.component';
import { TradingHistoryComponent } from './trading-history/trading-history.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    OmsComponent,
    TradingHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    // DropdownModule.forRoot(),
    // MatSidenavModule,MDBBootstrapModulesPro.forRoot(),
    RouterModule.forRoot([
      {
        path:'login', component: LoginComponent
      },
      {
        path:'dashboard', component: DashboardComponent,children:[
          { path: "", component:DashboardComponent}
        ]
      },
      {
        path:'oms', component:OmsComponent
      },
      {
        path:'trade', component:TradingHistoryComponent
      }
    ]),
    BrowserAnimationsModule
    ],
  providers: [DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
