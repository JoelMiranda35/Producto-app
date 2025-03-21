import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

// Selecciona el estado de productos
export const selectProductState = createFeatureSelector<ProductState>('product');

// Selecciona la lista de productos
export const selectProducts = createSelector(
  selectProductState,
  (state) => state.products
);