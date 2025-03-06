import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ubuntu-svg',
  imports: [],
  templateUrl: './ubuntu-svg.component.html',
  styleUrl: './ubuntu-svg.component.scss'
})
export class UbuntuSvgComponent {
    @Input() classes: string = '';
}
