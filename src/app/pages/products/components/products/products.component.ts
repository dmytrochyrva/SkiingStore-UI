// Libraries Imports
import { Component } from '@angular/core';

// Local Imports
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products = this.productsService.getProducts();

  constructor(private productsService: ProductsService) {}
}
