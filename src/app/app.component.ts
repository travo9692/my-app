import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  tabIndex: number = 1;

  changeTab(tabIndex){
    this.tabIndex = tabIndex;
  }
}
