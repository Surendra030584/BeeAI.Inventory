import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ModulemasterComponent } from './modulemaster/modulemaster.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionmanagerComponent } from './subscription-manager/subscription-manager.component';


@NgModule({
  declarations: [
    ModulemasterComponent,
    SubscriptionmanagerComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule 
  ]
})
export class ConfigurationModule { }
