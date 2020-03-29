import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  message: string = 'Hello';
  printtable = false;
  contacts = [{
    id: 1,
    name: 'tiep phan',
    jod: '0web developer',
    avatar: {
      url: 'https://picsum.photos/id/237/200'
    }
  }, {
    id: 2,
    name: 'Doe',
    jod: '0web developer',
    avatar: {
      url: 'https://picsum.photos/id/237/200'
    }
  }
  ];
}
