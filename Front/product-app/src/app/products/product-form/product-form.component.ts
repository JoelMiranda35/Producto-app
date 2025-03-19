import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductDTO } from '../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup; // Formulario reactivo
  isEditMode = false; // Indica si estamos en modo edición
  productId: number | null = null; // ID del producto en modo edición

  constructor(
    private fb: FormBuilder, // Inyecta FormBuilder para crear el formulario
    private productService: ProductService, // Inyecta el servicio de productos
    private router: Router, // Inyecta el Router para navegación
    private route: ActivatedRoute // Inyecta ActivatedRoute para obtener parámetros de la ruta
  ) {
    // Inicializa el formulario reactivo
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Verifica si estamos en modo edición
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = +params['id'];
        this.loadProduct(this.productId); // Carga el producto si estamos editando
      }
    });
  }

  // Método para cargar un producto en modo edición
  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.productForm.patchValue(product); // Rellena el formulario con los datos del producto
      },
      error: (err) => {
        console.error('Error al cargar el producto:', err); // Manejo de errores
      },
    });
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.productForm.invalid) return; // Si el formulario es inválido, no hace nada

    const product: ProductDTO = this.productForm.value; // Obtiene los valores del formulario

    if (this.isEditMode && this.productId) {
      // Si estamos en modo edición, actualiza el producto
      this.productService.updateProduct(this.productId, product).subscribe({
        next: () => {
          this.router.navigate(['/products']); // Navega a la lista de productos
        },
        error: (err) => {
          console.error('Error al actualizar el producto:', err); // Manejo de errores
        },
      });
    } else {
      // Si estamos en modo creación, agrega un nuevo producto
      this.productService.createProduct(product).subscribe({
        next: () => {
          this.router.navigate(['/products']); // Navega a la lista de productos
        },
        error: (err) => {
          console.error('Error al crear el producto:', err); // Manejo de errores
        },
      });
    }
  }

  // Método para volver a la lista de productos
  onBack(): void {
    this.router.navigate(['/products']); // Navega a la lista de productos
  }
}