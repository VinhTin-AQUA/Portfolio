import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-svg',
  imports: [],
  templateUrl: './angular-svg.component.html',
  styleUrl: './angular-svg.component.scss'
})
export class AngularSvgComponent {
    @Input() classes: string = '';
}
