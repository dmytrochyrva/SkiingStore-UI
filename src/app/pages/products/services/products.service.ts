// Libraries Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Project Imports
import { IProduct } from 'src/app/core/models';
import { environment } from 'src/environments/environment';

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
}
