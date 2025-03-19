import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }, // Ruta principal para la lista de productos
  { path: 'new', component: ProductFormComponent }, // Ruta para agregar un nuevo producto
  { path: 'edit/:id', component: ProductFormComponent }, // Ruta para editar un producto existente
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule],
})
export class ProductsRoutingModule {}