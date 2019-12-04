import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    sendUserInfoForm;

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ) {
        this.items = this.cartService.getItems();
        this.sendUserInfoForm = formBuilder.group({
            name: '',
            address: '',
            userAgent: navigator.userAgent
        });
    }

    ngOnInit() {
    }

    onSubmit(userInfo) {
        console.log('u send user Info : ', userInfo);
        this.cartService.clearCart();
        this.sendUserInfoForm.reset();
    }
}
