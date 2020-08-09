import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: HeaderComponent,
        data: {
          title: 'Dashboard 1'
        }
      },
      {
        path: 'dashboard2',
        component: SidenavComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
