"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, formBuilder) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }
    CartComponent.prototype.ngOnInit = function () {
        this.items = this.cartService.getItems();
    };
    CartComponent.prototype.onSubmit = function (customerData) {
        // Process checkout data here
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
        console.warn('Your order has been submitted', customerData);
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.scss']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
