import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [];
  filteredProducts: Iproduct[] = [];
  searchTerm: string = '';
  sortBy: string = '';
  viewMode: 'grid' | 'list' = 'grid';

  constructor(private productService: StaticProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.productList;
    this.filteredProducts = [...this.products];
  }

  onSearch() {
    this.filterProducts();
  }

  clearSearch() {
    this.searchTerm = '';
    this.filterProducts();
  }

  onSort() {
    this.sortProducts();
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
      this.loadProducts();
    }
  }

  private filterProducts() {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.sortProducts();
  }

  private sortProducts() {
    if (!this.sortBy) return;

    this.filteredProducts.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }

  // Statistics methods
  getTotalProducts(): number {
    return this.filteredProducts.length;
  }

  getInStockProducts(): number {
    return this.filteredProducts.filter(p => p.quantity > 0).length;
  }

  getOutOfStockProducts(): number {
    return this.filteredProducts.filter(p => p.quantity === 0).length;
  }

  getTotalValue(): number {
    return this.filteredProducts.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  }
}
