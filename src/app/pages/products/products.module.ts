// Libraries Imports
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';

// Projects Imports
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import {
  productsReducer,
  ProductsEffects,
  PRODUCTS_REDUCER_KEY,
} from './+store';
import { ProductsService } from './services/products.service';
import { ProductComponent } from './components/product/product.component';
import { FiltersComponent } from './components/products/partials/filters/filters.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  declarations: [ProductsComponent, ProductComponent, FiltersComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(PRODUCTS_REDUCER_KEY, productsReducer),
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
