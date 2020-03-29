import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{

  products = products;

  share() {
    window.alert('the product has been shared!')
  }

  onNotify() {
    window.alert('you will be notified when the product goes on sale')
  }

}
