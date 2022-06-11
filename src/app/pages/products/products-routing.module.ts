// Libraries Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local Imports
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { CeProductComponent } from './components/ce-product/ce-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: CeProductComponent },
  { path: 'edit/:id', component: CeProductComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
