import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swagger-svg',
  imports: [],
  templateUrl: './swagger-svg.component.html',
  styleUrl: './swagger-svg.component.scss'
})
export class SwaggerSvgComponent {
    @Input() classes: string = '';
}
