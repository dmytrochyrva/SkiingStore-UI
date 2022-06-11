// Libraries Imports
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Project Imports
import { IDropdownOption } from 'src/app/core/models';

// Local Imports
import {
  selectCategories,
  loadCategories,
  loadProducts,
} from '../../../../+store';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  public categories$ = this.store.select(selectCategories).pipe(
    map((categories) => {
      const options = categories?.map((category) => {
        return {
          name: category.name,
          value: category.name,
          default: false,
        };
      });

      options?.unshift({ name: 'All', value: '', default: true });

      return options;
    })
  );

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.store.dispatch(loadCategories());

    this.route.queryParams.subscribe((params) => {
      this.store.dispatch(loadProducts(params));
    });
  }

  public categoryUpdate(option: IDropdownOption) {
    this.updateRoute({ category: option.value || null });
  }

  public priceRangeUpdate(event: any) {
    this.updateRoute({ [event.target.id]: event.target.value || null });
  }

  private updateRoute(queryParams: object) {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
