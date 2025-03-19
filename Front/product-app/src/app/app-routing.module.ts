import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) 
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/products' }, // Redirige cualquier ruta no encontrada a /products
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule {}