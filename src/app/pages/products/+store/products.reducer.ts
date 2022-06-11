// Libraries Imports
import { createReducer, on } from '@ngrx/store';

// Project Imports
import { IProduct, ICategory, IProductResponse } from 'src/app/core/models';

// Local Imports
import {
  loadProductsSuccess,
  loadProductSuccess,
  loadCategoriesSuccess,
} from './products.actions';

export const PRODUCTS_REDUCER_KEY = 'productsState';

export interface ProductsState {
  product: IProduct | null;
  productsData: IProductResponse | null;
  categories: ICategory[] | null;
}

const initialState: ProductsState = {
  product: null,
  categories: null,
  productsData: null,
};

export const productsReducer = createReducer(
  initialState,
  on(loadProductSuccess, (state, { product }) => ({
    ...state,
    product: product,
  })),
  on(loadProductsSuccess, (state, { response }) => ({
    ...state,
    productsData: {
      products: response.products,
      pageNumber: response.pageNumber,
      totalItems: response.totalItems,
    },
  })),
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories: categories,
  }))
);
