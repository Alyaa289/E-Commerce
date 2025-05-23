import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StaticProductService } from '../../../services/static-product.service';
import { Iproduct } from '../../../models/iproduct';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product?: Iproduct;
  selectedQuantity: number = 1;
  relatedProducts: Iproduct[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: StaticProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(this.productId);
    this.loadRelatedProducts();
  }

  increaseQuantity(): void {
    if (this.product && this.selectedQuantity < this.product.quantity) {
      this.selectedQuantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }

  getRelatedProducts(): Iproduct[] {
    return this.relatedProducts;
  }

  private loadRelatedProducts(): void {
    // Get all products except the current one
    const allProducts = this.productService.getAllProducts();
    this.relatedProducts = allProducts
      .filter(p => p.id !== this.productId)
      .slice(0, 4); // Show only 4 related products
  }
}
