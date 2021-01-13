import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridColumnsOneSixSystemComponent} from './grid-columns-one-six-system/grid-columns-one-six-system.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'grid16',
    component: GridColumnsOneSixSystemComponent
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
