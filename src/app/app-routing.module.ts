// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local Imports
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'sandbox',
    loadChildren: () =>
      import('./pages/sandbox/sandbox.module').then((m) => m.SandboxModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
