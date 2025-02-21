import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-net-core-svg',
  imports: [],
  templateUrl: './net-core-svg.component.html',
  styleUrl: './net-core-svg.component.scss'
})
export class NetCoreSvgComponent {
    @Input() classes: string = '';
}
