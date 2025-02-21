import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-svg',
  imports: [],
  templateUrl: './home-svg.component.html',
  styleUrl: './home-svg.component.scss'
})
export class HomeSvgComponent {
    @Input() classes: string = 'w-6 h-6';
    @Input() stroke: string = 'white';
}
