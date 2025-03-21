import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProducts, deleteProduct } from '../../store/product.actions'; // Importa las acciones
import { selectProducts } from '../../store/product.selectors'; // Importa el selector
import { ProductDTO } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$ = this.store.select(selectProducts); // Observable de productos
  filteredProducts: ProductDTO[] = []; // Lista filtrada de productos

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts()); // Cargar productos al iniciar
    this.products$.subscribe(products => {
      this.filteredProducts = products; // Inicializa la lista filtrada
    });
  }

  // Método para aplicar filtros
  applyFilter(event: Event, field: string): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.products$.subscribe(products => {
      this.filteredProducts = products.filter(product =>
        String(product[field as keyof ProductDTO]).toLowerCase().includes(filterValue)
      );
    });
  }

  // Método para navegar al formulario de creación de producto
  addProduct(): void {
    this.router.navigate(['/products/new']);
  }

  // Método para navegar al formulario de edición de producto
  editProduct(id: number): void {
    this.router.navigate([`/products/edit/${id}`]);
  }

  // Método para eliminar un producto
  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.store.dispatch(deleteProduct({ id })); // Despacha la acción de eliminar
    }
  }
}