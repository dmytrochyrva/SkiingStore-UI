// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

// Local Imports
import { selectProducts, loadProducts } from '../../+store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products$ = this.store.select(selectProducts);

  constructor(private store: Store) {
    this.store.dispatch(loadProducts());
  }
}
