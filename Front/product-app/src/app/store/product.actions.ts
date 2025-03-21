import { createAction, props } from '@ngrx/store';
import { ProductDTO } from '../products/models/product.model'; // Ruta relativa

// Acción para cargar productos
export const loadProducts = createAction('[Product] Load Products');

// Acción para cargar productos exitosamente
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: ProductDTO[] }>()
);

// Acción para eliminar un producto
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: number }>()
);

// Acción para eliminar un producto exitosamente
export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ id: number }>()
);