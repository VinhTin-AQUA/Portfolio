import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-svg',
  imports: [],
  templateUrl: './experience-svg.component.html',
  styleUrl: './experience-svg.component.scss'
})
export class ExperienceSvgComponent {
    @Input() classes: string = '';
    @Input() stroke: string = '';
}
