import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SigninComponent } from './signin/signin.component';
import { SignedupComponent } from './signedup/signedup.component';

const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'login',component:SigninComponent},
  {path:'reg',component:SignedupComponent},
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/admin/configuration/configuration.module').then(m => m.ConfigurationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
