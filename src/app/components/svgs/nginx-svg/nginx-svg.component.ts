import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nginx-svg',
  imports: [],
  templateUrl: './nginx-svg.component.html',
  styleUrl: './nginx-svg.component.scss'
})
export class NginxSvgComponent {
    @Input() classes: string = '';
}
