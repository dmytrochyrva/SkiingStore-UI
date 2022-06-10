// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Projects Imports
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import { ProductsService } from './services/products.service';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
