import { IProduct } from './product.model';

export interface IProductResponse {
  totalItems: number;
  pageNumber: number;
  products: IProduct[];
}
