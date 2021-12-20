import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdmintoolsComponent } from './admintools/admintools.component';
import { AdmintravelsComponent } from './admintravels/admintravels.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
   
  ],
  declarations: [AdminComponent,
                AdmintoolsComponent,
                AdmintravelsComponent
              ]
})
export class AdminModule { }
