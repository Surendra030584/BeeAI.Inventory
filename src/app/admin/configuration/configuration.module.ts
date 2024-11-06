import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { Configuration1Component } from './configuration1/configuration1.component';
import { SubscriptionManagerComponent } from './subscription-manager/subscription-manager.component';


@NgModule({
  declarations: [
    Configuration1Component,
    SubscriptionManagerComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
