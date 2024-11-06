import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DasboardComponent } from './dasboard/dasboard.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';


@NgModule({
  declarations: [DasboardComponent, AdminlayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
