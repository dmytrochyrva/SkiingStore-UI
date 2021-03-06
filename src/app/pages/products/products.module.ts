// Libraries Imports
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

// Projects Imports
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import {
  productsReducer,
  ProductsEffects,
  PRODUCTS_REDUCER_KEY,
} from './+store';
import { ProductsService } from './services/products.service';
import { FiltersComponent } from './components/products/partials/filters/filters.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CeProductComponent } from './components/ce-product/ce-product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, FiltersComponent, CeProductComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    StoreModule.forFeature(PRODUCTS_REDUCER_KEY, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
