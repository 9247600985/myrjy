import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdmintoolsComponent } from './admintools/admintools.component';
import { AdmintravelsComponent } from './admintravels/admintravels.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JobsComponent } from './jobs/jobs.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdsComponent } from './ads/ads.component';
import { AdmiRoutes } from './admi.routing';
import { AdminnewsComponent } from './adminnews/adminnews.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AdmiRoutes
  ],
  declarations: [AdminComponent,
                AdmintoolsComponent,
                AdmintravelsComponent,
                JobsComponent,
                AdmindashboardComponent,
                AdminnewsComponent,
                AdsComponent,
              ],
 exports:[CommonModule,
                AdmintoolsComponent,
                AdmintravelsComponent,
                AdsComponent,
                JobsComponent,
                AdminnewsComponent
              ]
})
export class AdminModule { }
