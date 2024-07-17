import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product-model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product-service';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  imports: [
    CommonModule
  ],
})
export class ProductDetailComponent {
  product$!: Observable<Product>;
  constructor(private _route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this.product$ = this._productService.getProductsById(Number(id));
  }
}
