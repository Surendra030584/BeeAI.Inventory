import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulemasterComponent } from './modulemaster/modulemaster.component';
const routes: Routes = [
      
      { path: 'modulemaster/:Id', component: ModulemasterComponent, pathMatch: 'full' },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
