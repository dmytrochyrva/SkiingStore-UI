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

  public getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => loadProductsSuccess({ products })),
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
