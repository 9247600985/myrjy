import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { NewsComponent } from './news/news.component';
import { ToolsComponent } from './tools/tools.component';
import { TourcardComponent } from './tourcard/tourcard.component';
import { UserComponent } from './user.component';

const routes: Routes = [
 { path:'user', 
    component: UserComponent,
    children: [
      {
        path:'travel', component: TourcardComponent
      },
      {
        path:'news', component: NewsComponent
      },
      {
        path:'tools', component: ToolsComponent
      },
      {
        path:'covid', component: CovidComponent
      },
      {
        path:'job', component: JobComponent
      },
      {
        path:'home', component: HomeComponent,
        children: [
          {
            path:'travel', component: TourcardComponent
          },
          {
            path:'news', component: NewsComponent
          },
          {
            path:'tools', component: ToolsComponent
          },
          {
            path:'tools', component: ToolsComponent
          },
          {
            path:'covid', component: CovidComponent
          },
          {
            path:'job', component: JobComponent
          },
        ]
      }
    ]
  },

];

export const UserRoutes = RouterModule.forChild(routes);
