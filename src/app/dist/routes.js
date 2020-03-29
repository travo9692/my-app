"use strict";
exports.__esModule = true;
var product_list_component_1 = require("./product-list/product-list.component");
var product_details_component_1 = require("./product-details/product-details.component");
var cart_component_1 = require("./cart/cart.component");
var shipping_component_1 = require("./shipping/shipping.component");
exports.appRoutes = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'products/:productId', component: product_details_component_1.ProductDetailsComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: 'shipping', component: shipping_component_1.ShippingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
