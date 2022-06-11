// Libraries Imports
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

// Project Imports
import {
  IProduct,
  ICategory,
  IProductFilters,
  IProductResponse,
} from 'src/app/core/models';

export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ filters: IProductFilters }>()
);
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ response: IProductResponse }>()
);
export const loadProductsFailed = createAction(
  '[Products] Load Products Failed',
  props<{ error: HttpErrorResponse }>()
);

export const loadProduct = createAction(
  '[Products] Load Product',
  props<{ id: string }>()
);
export const loadProductSuccess = createAction(
  '[Products] Load Product Success',
  props<{ product: IProduct }>()
);
export const loadProductFailed = createAction(
  '[Products] Load Product Failed',
  props<{ error: HttpErrorResponse }>()
);

export const loadCategories = createAction('[Products] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Products] Load Categories Success',
  props<{ categories: ICategory[] }>()
);
export const loadCategoriesFailed = createAction(
  '[Products] Load Categories Failed',
  props<{ error: HttpErrorResponse }>()
);
