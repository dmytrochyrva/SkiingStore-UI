// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';

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
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule,
    HttpClientModule,
    PaginationModule,
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    ProductCardComponent,
    DropdownComponent,
    HttpClientModule,
    PaginationModule,
  ],
})
export class SharedModule {}
