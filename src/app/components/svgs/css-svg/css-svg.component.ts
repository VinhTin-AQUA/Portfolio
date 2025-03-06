import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-css-svg',
  imports: [],
  templateUrl: './css-svg.component.html',
  styleUrl: './css-svg.component.scss'
})
export class CssSvgComponent {
    @Input() classes: string = '';
}
