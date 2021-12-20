import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
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
        path:'home', component: HomeComponent,
        children: [
          {
            path:'travel', component: TourcardComponent
          },
          {
            path:'news', component: NewsComponent
          },
        ]
      }
    ]
  },

];

export const UserRoutes = RouterModule.forChild(routes);
