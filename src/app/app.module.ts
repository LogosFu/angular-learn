import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertComponent} from './product-alert/product-alert.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
            {path: 'products/:Id', component: ProductDetailComponent},
            {path: 'cart', component: CartComponent},
            {path: 'shipping', component: ShippingComponent}
        ])
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertComponent,
        ProductDetailComponent,
        CartComponent,
        ShippingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
