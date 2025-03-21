import { createReducer, on } from '@ngrx/store';
import { loadProductsSuccess, deleteProductSuccess } from './product.actions';
import { ProductDTO } from '../products/models/product.model';

export interface ProductState {
  products: ProductDTO[];
}

export const initialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(deleteProductSuccess, (state, { id }) => ({
    ...state,
    products: state.products.filter(product => product.id !== id),
  }))
);