// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Local Imports
import { selectProduct, loadProduct } from '../../+store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public product$ = this.store.select(selectProduct);

  constructor(private store: Store, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.store.dispatch(loadProduct({ id }));
  }
}
