import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
