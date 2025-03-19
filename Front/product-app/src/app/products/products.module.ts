import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

// Módulos de PrimeNG
import { TableModule } from 'primeng/table'; 
import { ButtonModule } from 'primeng/button'; 
import { InputTextModule } from 'primeng/inputtext'; 
import { CardModule } from 'primeng/card'; 
import { ToastModule } from 'primeng/toast'; 
import { ConfirmDialogModule } from 'primeng/confirmdialog'; // 

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ProductsRoutingModule,
    // Módulos de PrimeNG
    TableModule,
    ButtonModule,
    InputTextModule,
    CardModule, 
    ToastModule, 
    ConfirmDialogModule, 
  ],
})
export class ProductsModule {}