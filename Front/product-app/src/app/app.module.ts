import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulos de PrimeNG
import { TableModule } from 'primeng/table'; 
import { ButtonModule } from 'primeng/button'; 
import { InputTextModule } from 'primeng/inputtext'; 

// Módulos de NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './store/product.reducer'; // Importa el reducer
import { ProductEffects } from './store/product.effects'; // Importa los efectos

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule, 
    TableModule, 
    ButtonModule, 
    InputTextModule, 

    // Configuración de NGRX
    StoreModule.forRoot({ product: productReducer }), // Registra el reducer
    EffectsModule.forRoot([ProductEffects]), // Registra los efectos
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}