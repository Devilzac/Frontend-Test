import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';

const routes: Routes = [
  { path: 'libros', component: LibrosComponent },  
  { path: '',   redirectTo: 'libros', pathMatch: 'full' },
  { path: '**', component: LibrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
