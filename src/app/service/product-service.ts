import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product-model';
import { productDataMock } from '../mock-data/products-mock-data';

const products: Product[] = productDataMock  //
@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor() { }

    getProducts(): Observable<Product[]> {
        return of(products).pipe(delay(500));
    }

    getProductsById(id: number): Observable<Product> {
        const product = products.find(x => x.id == id) as Product
        return of(product).pipe(delay(500))
    }
}
