import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  cards = [
  {
    title: 'Robusta Beans',
    imageUrl: '/assets/Mask.png',
    description: 'Medium Roasted',
   
  },
]
}
