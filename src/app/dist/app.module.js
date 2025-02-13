"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var routes_1 = require("./routes");
var product_list_component_1 = require("./product-list/product-list.component");
var contact_list_component_1 = require("./contact-list/contact-list.component");
var product_alerts_component_1 = require("./product-alerts/product-alerts.component");
var router_1 = require("@angular/router");
var product_details_component_1 = require("./product-details/product-details.component");
var cart_component_1 = require("./cart/cart.component");
var shipping_component_1 = require("./shipping/shipping.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                contact_list_component_1.ContactListComponent,
                product_alerts_component_1.ProductAlertsComponent,
                product_details_component_1.ProductDetailsComponent,
                cart_component_1.CartComponent,
                shipping_component_1.ShippingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
