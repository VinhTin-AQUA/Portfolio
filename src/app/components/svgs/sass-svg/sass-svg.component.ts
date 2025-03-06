import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sass-svg',
  imports: [],
  templateUrl: './sass-svg.component.html',
  styleUrl: './sass-svg.component.scss'
})
export class SassSvgComponent {
    @Input() classes: string = '';
}
