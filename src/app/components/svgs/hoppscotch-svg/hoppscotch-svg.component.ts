import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hoppscotch-svg',
  imports: [],
  templateUrl: './hoppscotch-svg.component.html',
  styleUrl: './hoppscotch-svg.component.scss'
})
export class HoppscotchSvgComponent {
    @Input() classes: string = '';
}
