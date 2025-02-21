import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flutter-svg',
  imports: [],
  templateUrl: './flutter-svg.component.html',
  styleUrl: './flutter-svg.component.scss'
})
export class FlutterSvgComponent {
    @Input() classes: string = '';
}
