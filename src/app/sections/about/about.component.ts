import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  habilidades = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node.js',
    'HTML',
    'CSS',
  ];
}
