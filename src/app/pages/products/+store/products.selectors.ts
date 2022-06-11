// Libraries Imports
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Local Imports
import { PRODUCTS_REDUCER_KEY, ProductsState } from './products.reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>(PRODUCTS_REDUCER_KEY);

export const selectProduct = createSelector(
  selectProductsState,
  (state) => state.product
);

export const selectProducts = createSelector(
  selectProductsState,
  (state) => state.productsData?.products
);

export const selectPageNumber = createSelector(
  selectProductsState,
  (state) => state.productsData?.pageNumber
);

export const selectTotalItems = createSelector(
  selectProductsState,
  (state) => state.productsData?.totalItems
);

export const selectCategories = createSelector(
  selectProductsState,
  (state) => state.categories
);
