import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration1Component } from './configuration1/configuration1.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
