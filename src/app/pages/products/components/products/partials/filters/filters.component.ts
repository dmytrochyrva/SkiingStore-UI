// Libraries Imports
import { Component, OnInit } from '@angular/core';

// Project Imports
import { IDropdownOption } from 'src/app/core/models';

// Local Imports
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  public categories!: IDropdownOption[];

  constructor(private productsService: ProductsService) {
    this.productsService.getCategories().subscribe((categories) => {
      this.categories = categories?.map((category, index) => {
        const categoryOption = {
          name: category.name,
          value: category.id,
        };

        return index === 0
          ? { ...categoryOption, default: true }
          : categoryOption;
      });
    });
  }

  public ngOnInit(): void {}
}
