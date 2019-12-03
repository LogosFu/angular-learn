import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         { path: 'products/:Id', component: ProductDetailComponent}
      ])
   ],
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAlertComponent,
      ProductDetailComponent
   ],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
