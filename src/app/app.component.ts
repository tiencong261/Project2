import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    AppRoutingModule,
    ProductComponent,
    ProductDetailComponent,
  ],
})
export class AppComponent {}

/*@Component({
  selector: 'app-product',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class ProductComponent {
  productName: string = 'DTC';
}*/
