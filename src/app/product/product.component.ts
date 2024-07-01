import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    // Angular Core
    CommonModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  title = 'Phone Gallery';
  products: Product[] = []; // Khai báo danh sách sản phẫm kiểu mảng có interface là Product
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log('hello');
    this.title =
      'Phone Gallery. Giá trị của tôi đc gán tại ngOnInit. Giá trị khởi tạo ban đầu là Phone Gallery';
    this.products = [
      {
        id: 1,
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/1d/f3/d5/b99e40c2263cef2b7f01f403a1950bac.jpg.webp',
        alt: 'Phone 1',
        name: 'SAMSUNG GALAXY A05',
        price: 'GIÁ: 2.790.000 đồng',
      },
      {
        id: 2,
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/1d/f3/d5/b99e40c2263cef2b7f01f403a1950bac.jpg.webp',
        alt: 'Phone 2',
        name: 'SAMSUNG GALAXY A06',
        price: 'GIÁ: 2.790.000 đồng',
      },
      {
        id: 3,
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/1d/f3/d5/b99e40c2263cef2b7f01f403a1950bac.jpg.webp',
        alt: 'Phone 1',
        name: 'SAMSUNG GALAXY A07',
        price: 'GIÁ: 2.790.000 đồng',
      },
      {
        id: 3,
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/1d/f3/d5/b99e40c2263cef2b7f01f403a1950bac.jpg.webp',
        alt: 'Phone 1',
        name: 'SAMSUNG GALAXY A08',
        price: 'GIÁ: 2.790.000 đồng',
      },
      {
        id: 3,
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/1d/f3/d5/b99e40c2263cef2b7f01f403a1950bac.jpg.webp',
        alt: 'Phone 1',
        name: 'SAMSUNG GALAXY A05',
        price: 'GIÁ: 2.790.000 đồng',
      },
      {
        id: 3,
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/1d/f3/d5/b99e40c2263cef2b7f01f403a1950bac.jpg.webp',
        alt: 'Phone 1',
        name: 'SAMSUNG GALAXY A09',
        price: 'GIÁ: 2.790.000 đồng',
      },
      {
        id: 3,
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/1d/f3/d5/b99e40c2263cef2b7f01f403a1950bac.jpg.webp',
        alt: 'Phone 1',
        name: 'SAMSUNG GALAXY A10',
        price: 'GIÁ: 2.790.000 đồng',
      },
      {
        id: 3,
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/1d/f3/d5/b99e40c2263cef2b7f01f403a1950bac.jpg.webp',
        alt: 'Phone 1',
        name: 'SAMSUNG GALAXY A11',
        price: 'GIÁ: 2.790.000 đồng',
      },
    ];
  }

  // Vòng đời của 1 component trong angular. Từ khi khởi tạo đến khi kết thúc.. em đọc thêm tài liệu về Anguar Component life circle. Để nắm thêm hàm ngOnInit kia vì sao đuiợc khai báo vào đây
  //ex: Nó là hàm để khởi tạo dữ liệu để gán giá trị cho các biến. cụ thể là danh sách các products.
  onClick(item: Product) {
    this.router.navigate(['/products', item.id]);
  }
}
