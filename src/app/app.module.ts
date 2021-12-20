import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserModule } from './user/user.module';
import { OfferscardComponent } from './offerscard/offerscard.component';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [				
    AppComponent,
      LoginComponent,
      RegisterComponent,
      OfferscardComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ReactiveFormsModule,
    AdminModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
