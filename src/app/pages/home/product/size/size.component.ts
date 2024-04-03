import { Component } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrl: './size.component.scss'
})
export class SizeComponent {
  activeButton: string | null = null;

  getStyle(button: string) {
    if (button === this.activeButton) {
      return { backgroundColor: '#141921', color: '#d17842', border: '2px solid #d17842' };
    } else {
      return { backgroundColor: '#141921', color: '#aeaeae', border: '0' };
    }
  }

  changeColor(button: string) {
    // Перевіряємо, чи ця кнопка є активною
    if (button === this.activeButton) {
      // Якщо так, робимо її неактивною
      this.activeButton = null;
    } else {
      // Якщо ні, робимо цю кнопку активною
      this.activeButton = button;
    }
  }
}