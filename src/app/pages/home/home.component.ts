import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items = ['Елемент 1', 'Елемент 2', 'Елемент 3', 'Елемент 4', 'Елемент 5']; // Додано властивість items
  public coffeeData = [
    {
      title: 'All',
      id: 1,
    },
    {
      title: 'Cappucino',
      id: 2,
    },
    {
      title: 'Espresso',
      id: 3,
    },
    {
      title: 'Americano',
      id: 4,
    },
    {
      title: 'Macchiato',
      id: 5,
    },
    
  ]

}
