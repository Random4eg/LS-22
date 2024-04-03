import { Component } from '@angular/core';


@Component({
  selector: 'app-bean-carousel',
  templateUrl: './bean-carousel.component.html',
  styleUrl: './bean-carousel.component.scss'
})
export class BeanCarouselComponent {
  cards = [
  {
    title: 'Robusta Beans',
    imageUrl: '/assets/Mask.png',
    description: 'Medium Roasted',
   
  },
  {
    title: 'Cappuccino',
    imageUrl: '/assets/Mask-1.png',
    description: 'With Steamed Milk',
   
  },
  {
    title: 'Cappuccino',
    imageUrl: '/assets/Mask-2.png',
    description: 'With Steamed Milk',
    
  },
  {
    title: 'Cappuccino',
    imageUrl: '/assets/Mask-3.png',
    description: 'With Steamed Milk',  }
];
}