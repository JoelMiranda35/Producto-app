import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../products/services/product.service';
import { loadProducts, loadProductsSuccess, deleteProduct, deleteProductSuccess } from './product.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
  // Efecto para cargar productos
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(products => loadProductsSuccess({ products }))
        )
      )
    )
  );

  // Efecto para eliminar un producto
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      mergeMap(({ id }) =>
        this.productService.deleteProduct(id).pipe(
          map(() => deleteProductSuccess({ id }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}