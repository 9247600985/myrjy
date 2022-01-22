import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminnewsComponent } from './adminnews/adminnews.component';
import { AdmintoolsComponent } from './admintools/admintools.component';
import { AdmintravelsComponent } from './admintravels/admintravels.component';
import { AdsComponent } from './ads/ads.component';
import { JobsComponent } from './jobs/jobs.component';


const routes: Routes = [
  { path:'admin', 
  component: AdminComponent,
  children: [
    {
      path:'tools', component: AdmintoolsComponent
    },
    {
      path:'ads', component: AdsComponent
    },
    {
      path:'jobs', component: JobsComponent
    },   
    {
      path:'adminnews',component:AdminnewsComponent
    },
    {
      path:'travels',component:AdmintravelsComponent
    }
  ] },
];

export const AdmiRoutes = RouterModule.forChild(routes);
