import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemgroupComponent } from './inventorymaster/itemgroup/itemgroup.component';
import { ItemcategoryComponent } from './inventorymaster/itemcategory/itemcategory.component';
import { ItemcreationComponent } from './inventorymaster/itemcreation/itemcreation.component';
import { SuppliertypeComponent } from './inventorymaster/suppliertype/suppliertype.component';
import { TaxComponent } from './inventorymaster/tax/tax.component';
import { ItemunitComponent } from './inventorymaster/itemunit/itemunit.component';
import { ItemcolorComponent } from './inventorymaster/itemcolor/itemcolor.component';

const routes: Routes = [
  { path: 'itemgroup', component: ItemgroupComponent, pathMatch: 'full' },
  { path: 'itemcategory', component: ItemcategoryComponent, pathMatch: 'full' },
  { path: 'itemcreation', component: ItemcreationComponent, pathMatch: 'full' },
  { path: 'suppliertype', component: SuppliertypeComponent, pathMatch: 'full' },
  { path: 'tax', component: TaxComponent, pathMatch: 'full' },
  { path: 'itemunit', component: ItemunitComponent, pathMatch: 'full' },
  { path: 'itemcolor', component: ItemcolorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
