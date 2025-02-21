import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nestjs-svg',
  imports: [],
  templateUrl: './nestjs-svg.component.html',
  styleUrl: './nestjs-svg.component.scss'
})
export class NestjsSvgComponent {
    @Input() classes: string = '';
}
