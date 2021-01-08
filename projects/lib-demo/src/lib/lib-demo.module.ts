import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { LibDemoComponent } from './lib-demo.component';
import { CardComponent } from './card/card.component';
import { PillComponent } from './pill/pill.component';



@NgModule({
  declarations: [LibDemoComponent, CardComponent, PillComponent],
  imports: [
    CommonModule
  ],
  exports: [LibDemoComponent, CardComponent, PillComponent]
})
export class LibDemoModule { }
