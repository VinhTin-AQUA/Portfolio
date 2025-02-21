import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-svg',
  imports: [],
  templateUrl: './fruit-svg.component.html',
  styleUrl: './fruit-svg.component.scss'
})
export class FruitSvgComponent {
    @Input() classes: string = '';
}
