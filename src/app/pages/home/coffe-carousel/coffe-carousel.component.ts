import { Component } from '@angular/core';

@Component({
  selector: 'app-coffe-carousel',
  templateUrl: './coffe-carousel.component.html',
  styleUrl: './coffe-carousel.component.scss'
})
export class CoffeCarouselComponent {
  cards= [
  {
    title: 'Cappuccino',
    imageUrl: '/assets/Group10.png',
    description: 'With Steamed Milk',
    price:'$ 4.20 +'
  },
  {
    title: 'Cappuccino',
    imageUrl: '/assets/Group10-1.png',
    description: 'With Foam',
    price:'$ 4.20 +'
  },
  {
    title: 'Cappuccino',
    imageUrl: '/assets/Group10.png',
    description: 'With Steamed Milk',
    price:'$ 4.20 +'
  }
];
}