import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dart-svg',
  imports: [],
  templateUrl: './dart-svg.component.html',
  styleUrl: './dart-svg.component.scss'
})
export class DartSvgComponent {
    @Input() classes: string = '';
}
