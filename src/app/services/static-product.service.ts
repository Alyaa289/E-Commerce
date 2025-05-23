import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  productList:Iproduct[]=[];

  constructor() {
    this.productList =[
      {
        id: '1',
        name: 'Modern Office Chair',
        price: 299,
        img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
        quantity: 0
      },
      {
        id: '2',
        name: 'Wooden Dining Table',
        price: 599,
        img: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop',
        quantity: 12
      },
      {
        id: '3',
        name: 'Luxury Sofa',
        price: 899,
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
        quantity: 8
      },
      {
        id: '4',
        name: 'Modern Bookshelf',
        price: 399,
        img: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop',
        quantity: 5
      },
      {
        id: '5',
        name: 'Coffee Table',
        price: 249,
        img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
        quantity: 15
      },
      {
        id: '6',
        name: 'Desk Lamp',
        price: 89,
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        quantity: 25
      },
    ];
  }
  getAllProducts():Iproduct[]{
    return this.productList;
  }
  getProductById(id:string):Iproduct | undefined{
    return this.productList.find(prod=>prod.id==id)!;
  }
  addNewProduct(product:Iproduct){
    return this.productList.push(product);
  }

  addProduct(product: Iproduct): void {
    this.productList.push(product);
  }

  editProduct(id:string,product:Iproduct){

  }

  updateProduct(updatedProduct: Iproduct): void {
    const index = this.productList.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.productList[index] = updatedProduct;
    }
  }
  deleteProduct(productId:string){
    this.productList= this.productList.filter((product)=>product.id!= productId);
    return this.productList;
  }
}
