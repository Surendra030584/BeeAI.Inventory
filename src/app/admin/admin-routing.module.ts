import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { Configuration1Component } from './configuration/configuration1/configuration1.component';
import { SubscriptionManagerComponent } from './configuration/subscription-manager/subscription-manager.component';

const routes: Routes = [

  {

    path: '',
    component: AdminlayoutComponent, children: [
      { path: '', component: DasboardComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DasboardComponent, pathMatch: 'full' },
      {
        path: 'configuration',
      component:Configuration1Component
      },
     {path:'subscription-manager',component:SubscriptionManagerComponent}
  
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
