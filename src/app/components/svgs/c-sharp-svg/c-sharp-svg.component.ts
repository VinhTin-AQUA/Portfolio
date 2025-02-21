import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-sharp-svg',
  imports: [],
  templateUrl: './c-sharp-svg.component.html',
  styleUrl: './c-sharp-svg.component.scss'
})
export class CSharpSvgComponent {
    @Input() classes: string = '';
}
