import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-javascript-svg',
  imports: [],
  templateUrl: './javascript-svg.component.html',
  styleUrl: './javascript-svg.component.scss'
})
export class JavascriptSvgComponent {
    @Input() classes: string = '';
}
