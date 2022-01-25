import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TourcardComponent } from './tourcard/tourcard.component';
import { SliderComponent } from './slider/slider.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRoutes } from './user.routing';
import { NewsComponent } from './news/news.component';
import { CovidComponent } from './covid/covid.component';
import { JobComponent } from './job/job.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
   UserRoutes
  ],
  declarations: [UserComponent,
                 HomeComponent,
                 ToolsComponent,                 
                 TourcardComponent,
                 SliderComponent,
                 SidenavbarComponent,
                 FooterMenuComponent,
                 UserDashboardComponent,
                 NewsComponent,
                 CovidComponent,
                 JobComponent,
  ],
  exports:[
    HomeComponent,
    CommonModule,
    TourcardComponent,
    NewsComponent,  
    CovidComponent ,
    JobComponent 
  ]
})
export class UserModule { }
