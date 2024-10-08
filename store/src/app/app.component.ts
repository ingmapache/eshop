import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./domains/Shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: '<div class="container mx-auto"><app-header></app-header><router-outlet /></div>'
})
export class AppComponent {
  title = 'store';
}
