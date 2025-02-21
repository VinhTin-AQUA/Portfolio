import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-plus-plus-svg',
  imports: [],
  templateUrl: './c-plus-plus-svg.component.html',
  styleUrl: './c-plus-plus-svg.component.scss'
})
export class CPlusPlusSvgComponent {
    @Input() classes: string = '';
}
