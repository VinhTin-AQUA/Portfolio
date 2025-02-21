import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby-svg',
  imports: [],
  templateUrl: './hobby-svg.component.html',
  styleUrl: './hobby-svg.component.scss'
})
export class HobbySvgComponent {
    @Input() classes: string = '';
    @Input() stroke: string = '';
}
