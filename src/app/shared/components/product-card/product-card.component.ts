// Libraries Imports
import { Component, Input } from '@angular/core';

// Project Imports
import { IProduct } from 'src/app/core/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: IProduct;
}
