// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Project Imports
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import { SandboxComponent } from './components/sandbox/sandbox.component';

const routes: Routes = [{ path: '', component: SandboxComponent }];

@NgModule({
  declarations: [SandboxComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SandboxModule {}
