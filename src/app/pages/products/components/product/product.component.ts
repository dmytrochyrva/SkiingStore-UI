// Libraries Imports
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Project Imports
import { IProduct } from 'src/app/core/models';

// Local Imports
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public product$ = this.productsService.getProduct(
    this.route.snapshot.paramMap.get('id')!
  );

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
}
