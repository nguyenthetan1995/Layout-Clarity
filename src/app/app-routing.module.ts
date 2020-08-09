import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LayoutComponent} from './layout/layout.component'
export const Full_ROUTES: Routes = [
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  }
]
const appRoutes: Routes = [
 
  { path: '', component: LayoutComponent,children: Full_ROUTES, data: { title: 'layout Views' }},
  {
    path: '**',
    redirectTo: 'pages/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
