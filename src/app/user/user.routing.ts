import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { HomeComponent } from './home/home.component';
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
        ]
      }
    ]
  },

];

export const UserRoutes = RouterModule.forChild(routes);
