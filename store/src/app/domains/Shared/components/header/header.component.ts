import { Component, Input, signal } from '@angular/core';
import { product } from '../counter/models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input() cart: product[] = [];

  toggleSideMenu()
  {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
