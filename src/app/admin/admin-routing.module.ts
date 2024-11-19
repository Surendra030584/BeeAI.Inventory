import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { DasboardComponent } from './dasboard/dasboard.component'; 

const routes: Routes = [

  {

    path: '',
    component: AdminlayoutComponent, children: [
      { path: '', component: DasboardComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DasboardComponent, pathMatch: 'full' },
     
      {
        path: 'configuration',
        loadChildren: () => import('../admin/configuration/configuration.module').then(m => m.ConfigurationModule),
      },
      {
        path: 'inventory',
        loadChildren: () => import('../../app/admin/inventory/inventory.module').then(m => m.InventoryModule),
      },
  
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
