import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tailwind-svg',
  imports: [],
  templateUrl: './tailwind-svg.component.html',
  styleUrl: './tailwind-svg.component.scss'
})
export class TailwindSvgComponent {
@Input() classes: string = '';
}
