import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product-model';
import { ProductService } from '../service/product-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ProductListComponent implements OnInit {
  title = 'Phone Gallery';
  products: Product[] = []
  constructor(private _productService: ProductService) { }
  ngOnInit() {
    // test
    this.getProducts()
  }

  getProducts() {
    this._productService.getProducts().subscribe(next => {
      this.products = next
    })
  }
}
