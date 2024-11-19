import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventorymasterRoutingModule } from './inventorymaster-routing.module';
import { ItemgroupComponent } from './itemgroup/itemgroup.component';
import { ItemcreationComponent } from './itemcreation/itemcreation.component';
import { ItemcategoryComponent } from './itemcategory/itemcategory.component';
import { SuppliertypeComponent } from './suppliertype/suppliertype.component';
import { SupplierComponent } from './supplier/supplier.component';
import { TaxComponent } from './tax/tax.component';
import { ItemunitComponent } from './itemunit/itemunit.component';
import { ItemcolorComponent } from './itemcolor/itemcolor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ItemcreationComponent,
    SuppliertypeComponent,
    SupplierComponent,
    TaxComponent,
    ItemunitComponent,
 
  ],
  imports: [ ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
      
    InventorymasterRoutingModule
  ]
})
export class InventorymasterModule { }
