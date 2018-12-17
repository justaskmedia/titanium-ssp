import { Component } from '@angular/core';
import { useAnimation, transition, trigger, style, animate } from '@angular/animations';
import { smoothHeight } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [smoothHeight]
})
export class AppComponent {
  title = 'titanium';
  
}
