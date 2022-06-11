// Libraries Imports
import { createReducer, on } from '@ngrx/store';

// Project Imports
import { IProduct, ICategory } from 'src/app/core/models';

// Local Imports
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailed,
  loadProduct,
  loadProductSuccess,
  loadProductFailed,
  loadCategories,
  loadCategoriesSuccess,
  loadCategoriesFailed,
} from './products.actions';

export const PRODUCTS_REDUCER_KEY = 'productsState';

export interface ProductsState {
  product: IProduct | null;
  products: IProduct[] | null;
  categories: ICategory[] | null;
}

const initialState: ProductsState = {
  product: null,
  products: null,
  categories: null,
};

export const productsReducer = createReducer(
  initialState,
  // Product
  on(loadProduct, (state) => state),
  on(loadProductSuccess, (state, action) => ({
    ...state,
    product: action.product,
  })),
  on(loadProductFailed, (state) => state),

  // Products
  on(loadProducts, (state) => state),
  on(loadProductsSuccess, (state, action) => ({
    ...state,
    products: action.products,
  })),
  on(loadProductsFailed, (state) => state),

  // Categories
  on(loadCategories, (state) => state),
  on(loadCategoriesSuccess, (state, action) => ({
    ...state,
    categories: action.categories,
  })),
  on(loadCategoriesFailed, (state) => state)
);
