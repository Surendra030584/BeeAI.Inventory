import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemgroupComponent } from './inventorymaster/itemgroup/itemgroup.component';
import { ItemcategoryComponent } from './inventorymaster/itemcategory/itemcategory.component';
import { ItemcolorComponent } from './inventorymaster/itemcolor/itemcolor.component';


@NgModule({
  declarations: [ItemgroupComponent, ItemcategoryComponent,   ItemcolorComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
  ]
})
export class InventoryModule { }
