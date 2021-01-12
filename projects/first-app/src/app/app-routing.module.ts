import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridColumnsSystemComponent} from './grid-columns-system/grid-columns-system.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'grid12',
    component: GridColumnsSystemComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
