import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photography-svg',
  imports: [],
  templateUrl: './photography-svg.component.html',
  styleUrl: './photography-svg.component.scss'
})
export class PhotographySvgComponent {
    @Input() classes: string = '';
}
