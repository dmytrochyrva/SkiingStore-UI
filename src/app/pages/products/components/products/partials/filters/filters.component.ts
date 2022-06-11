// Libraries Imports
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

// Local Imports
import { selectCategories, loadCategories } from '../../../../+store';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  public categories$ = this.store.select(selectCategories).pipe(
    map((categories) =>
      categories?.map((category, index) => {
        const categoryOption = {
          name: category.name,
          value: category.id,
        };

        return index === 0
          ? { ...categoryOption, default: true }
          : categoryOption;
      })
    )
  );

  constructor(private store: Store) {
    this.store.dispatch(loadCategories());
  }
}
