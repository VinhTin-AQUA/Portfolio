import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typescript-svg',
  imports: [],
  templateUrl: './typescript-svg.component.html',
  styleUrl: './typescript-svg.component.scss'
})
export class TypescriptSvgComponent {
    @Input() classes: string = '';
}
