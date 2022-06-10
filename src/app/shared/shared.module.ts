// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Local Imports
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    ProductCardComponent,
    DropdownComponent,
  ],
  imports: [CommonModule, RouterModule, BsDropdownModule],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    ProductCardComponent,
    DropdownComponent,
  ],
})
export class SharedModule {}
