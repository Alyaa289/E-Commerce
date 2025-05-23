import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { StaticProductService } from '../../../services/static-product.service';
import { Iproduct } from '../../../models/iproduct';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;

  productData: any = {
    id: '',
    name: '',
    price: 0,
    quantity: 0,
    img: '',
    category: '',
    description: '',
    features: ['']
  };

  isEditMode = false;
  isSubmitting = false;
  productId: string | null = null;

  defaultImage = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: StaticProductService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId && this.productId !== '0') {
      this.isEditMode = true;
      this.loadProduct();
    } else {
      this.isEditMode = false;
      this.generateNewId();
    }
  }

  loadProduct() {
    if (this.productId) {
      const product = this.productService.getProductById(this.productId);
      if (product) {
        this.productData = {
          ...product,
          category: product.category || '',
          description: product.description || '',
          features: product.features || ['']
        };
      }
    }
  }

  generateNewId() {
    const products = this.productService.getAllProducts();
    const maxId = Math.max(...products.map(p => parseInt(p.id)), 0);
    this.productData.id = (maxId + 1).toString();
  }

  onSubmit() {
    if (!this.productData.name || !this.productData.price || this.productData.quantity < 0) {
      return;
    }

    this.isSubmitting = true;

    // Clean up features array
    this.productData.features = this.productData.features.filter((f: string) => f.trim() !== '');

    // Simulate API call
    setTimeout(() => {
      try {
        if (this.isEditMode) {
          this.productService.updateProduct(this.productData);
        } else {
          this.productService.addNewProduct(this.productData);
        }

        this.router.navigate(['/products']);
      } catch (error) {
        console.error('Error saving product:', error);
      } finally {
        this.isSubmitting = false;
      }
    }, 1500);
  }

  resetForm() {
    if (this.isEditMode) {
      this.loadProduct();
    } else {
      this.productData = {
        id: this.productData.id,
        name: '',
        price: 0,
        quantity: 0,
        img: '',
        category: '',
        description: '',
        features: ['']
      };
    }
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.productData.img = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addFeature() {
    this.productData.features.push('');
  }

  removeFeature(index: number) {
    if (this.productData.features.length > 1) {
      this.productData.features.splice(index, 1);
    }
  }
}
