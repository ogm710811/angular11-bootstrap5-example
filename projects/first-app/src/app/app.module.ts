import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgChartsAngularModule} from 'ag-charts-angular';
import { LibDemoModule } from 'lib-demo';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridColumnsSystemComponent } from './grid-columns-system/grid-columns-system.component';
import { GridColumnsOneSixSystemComponent } from './grid-columns-one-six-system/grid-columns-one-six-system.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    GridColumnsSystemComponent,
    GridColumnsOneSixSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgChartsAngularModule,
    LibDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
