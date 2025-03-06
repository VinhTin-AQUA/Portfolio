import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postman-svg',
  imports: [],
  templateUrl: './postman-svg.component.html',
  styleUrl: './postman-svg.component.scss'
})
export class PostmanSvgComponent {
    @Input() classes: string = '';
}
