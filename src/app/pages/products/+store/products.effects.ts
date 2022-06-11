// Libraries Imports
import { Injectable } from '@angular/core';
import { of, map, mergeMap, catchError } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

// Local Imports
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailed,
  loadProduct,
  loadProductSuccess,
  loadProductFailed,
  addProduct,
  addProductSuccess,
  addProductFailed,
  patchProduct,
  patchProductSuccess,
  patchProductFailed,
  loadCategories,
  loadCategoriesSuccess,
  loadCategoriesFailed,
} from './products.actions';
import { ProductsService } from '../services/products.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  public getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProduct),
      mergeMap(({ id }) =>
        this.productsService.getProduct(id).pipe(
          map((product) => loadProductSuccess({ product })),
          catchError((error) => of(loadProductFailed({ error })))
        )
      )
    )
  );

  public addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),
      mergeMap(({ product }) =>
        this.productsService.addProduct(product).pipe(
          map((product) => addProductSuccess({ product })),
          catchError((error) => of(addProductFailed({ error })))
        )
      )
    )
  );

  public patchProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(patchProduct),
      mergeMap(({ product }) =>
        this.productsService.patchProduct(product).pipe(
          map((product) => patchProductSuccess({ product })),
          catchError((error) => of(patchProductFailed({ error })))
        )
      )
    )
  );

  public getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(({ filters }) =>
        this.productsService.getProducts(filters).pipe(
          map((response) => loadProductsSuccess({ response })),
          catchError((error) => of(loadProductsFailed({ error })))
        )
      )
    )
  );

  public getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this.productsService.getCategories().pipe(
          map((categories) => loadCategoriesSuccess({ categories })),
          catchError((error) => of(loadCategoriesFailed({ error })))
        )
      )
    )
  );
}
