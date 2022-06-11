// Libraries Imports
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Project Imports
import { IProduct } from 'src/app/core/models';

// Local Imports
import {
  selectProduct,
  loadProduct,
  addProduct,
  patchProduct,
} from '../../+store';

@Component({
  selector: 'app-ce-product',
  templateUrl: './ce-product.component.html',
  styleUrls: ['./ce-product.component.scss'],
})
export class CeProductComponent implements OnInit {
  public id = this.route.snapshot.paramMap.get('id');
  public productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public submitForm() {
    const value: IProduct = {
      id: this.id,
      imageUrl: '',
      ...this.productForm.value,
    };

    if (this.id) {
      this.store.dispatch(patchProduct({ product: value }));
    } else {
      this.store.dispatch(addProduct({ product: value }));
    }

    this.router.navigate(['products']);
  }

  private initForm() {
    if (this.id) {
      this.store.dispatch(loadProduct({ id: this.id }));
      this.store
        .select(selectProduct)
        .pipe(take(2))
        .subscribe((product) => {
          this.createForm(product!);
        });
    } else {
      this.createForm();
    }
  }

  private createForm(product?: IProduct) {
    this.productForm = this.fb.group({
      name: product?.name || '',
      price: product?.price || '',
      description: product?.description || '',
    });
  }
}
