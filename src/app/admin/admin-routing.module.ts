import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dashboard',pathMatch:'full',
  },
  {
    path:'dashboard',component:DashboardComponent,children:[
      {
        path:'accueil',component:AccueilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
