// Libraries Imports
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Project Imports
import { IDropdownOption, IProductFilters } from 'src/app/core/models';

// Local Imports
import { selectCategories, loadCategories } from '../../../../+store';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() params?: IProductFilters;

  @Output() filtersUpdated = new EventEmitter<{
    [key: string]: string | number | null;
  }>();

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

  constructor(private store: Store) {
    this.store.dispatch(loadCategories());
  }

  public categoryUpdate(option: IDropdownOption) {
    this.filtersUpdated.emit({ category: option.value || null });
  }

  public priceRangeUpdate(event: any) {
    this.filtersUpdated.emit({ [event.target.id]: event.target.value || null });
  }
}
