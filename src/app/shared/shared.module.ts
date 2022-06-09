// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Local Imports
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent, ProductCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, NotFoundComponent, ProductCardComponent],
})
export class SharedModule {}
