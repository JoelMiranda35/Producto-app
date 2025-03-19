import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductDTO } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: ProductDTO[] = []; // Lista de productos

  constructor(
    private productService: ProductService, 
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.loadProducts(); // Carga los productos al iniciar el componente
  }

  // Método para cargar la lista de productos
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products; // Asigna los productos obtenidos
      },
      error: (err) => {
        console.error('Error al cargar los productos:', err); // Manejo de errores
      },
    });
  }

 
  addProduct(): void {
    this.router.navigate(['/products/new']);
  }

  
  editProduct(id: number): void {
    this.router.navigate([`/products/edit/${id}`]);
  }


  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.loadProducts(); // Recarga la lista después de eliminar
        },
        error: (err) => {
          console.error('Error al eliminar el producto:', err); // Manejo de errores
        },
      });
    }
  }
}