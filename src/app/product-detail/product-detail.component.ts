import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../product-list/product';
import {CartService} from '../cart.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    product;

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(param => {
            this.product = products[+param.get('productId')];
        });
    }

    addToCart(product) {
        window.alert('U product has been add to cart');
        this.cartService.addToCart(product);
    }

}
