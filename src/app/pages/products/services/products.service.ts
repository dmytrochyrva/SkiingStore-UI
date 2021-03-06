// Libraries Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Project Imports
import { environment } from 'src/environments/environment';
import {
  IProduct,
  ICategory,
  IProductResponse,
  IProductFilters,
} from 'src/app/core/models';

@Injectable()
export class ProductsService {
  private readonly endpoint = `${environment.apiBaseUrl}/products`;

  constructor(private http: HttpClient) {}

  public getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.endpoint}/${id}`);
  }

  public addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.endpoint}`, product);
  }

  public patchProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.endpoint}`, product);
  }

  public getProducts(params?: IProductFilters): Observable<IProductResponse> {
    return this.http.get<IProductResponse>(this.endpoint, {
      params: { ...params },
    });
  }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.endpoint}/categories`);
  }
}
