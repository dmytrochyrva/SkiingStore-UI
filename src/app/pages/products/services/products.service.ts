// Libraries Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Project Imports
import { environment } from 'src/environments/environment';
import { IProduct, ICategory } from 'src/app/core/models';

@Injectable()
export class ProductsService {
  private readonly endpoint = `${environment.apiBaseUrl}/products`;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.endpoint);
  }

  public getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.endpoint}/${id}`);
  }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.endpoint}/categories`);
  }
}
