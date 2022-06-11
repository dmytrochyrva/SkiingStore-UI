// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Project Imports
import { IProductFilters } from 'src/app/core/models';

// Local Imports
import { selectProducts, selectTotalItems, loadProducts } from '../../+store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products$ = this.store.select(selectProducts);
  public totalItems$ = this.store.select(selectTotalItems);

  public params!: IProductFilters;
  public pageSize = 6;
  public currentPage = 1;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params: IProductFilters) => {
      this.params = params;
      this.currentPage = parseInt(params?.pageNumber || '1');

      this.store.dispatch(
        loadProducts({ filters: { ...params, pageSize: `${this.pageSize}` } })
      );
    });
  }

  public updateRoute(queryParams: object) {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
