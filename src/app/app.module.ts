import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

import { ProductService } from './product.service';
import { ProductTracklistingComponent } from './product-tracklisiing/product-tracklisiing.component';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes:Routes = [
  {
  path: 'products',
  component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  }
] ;

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
