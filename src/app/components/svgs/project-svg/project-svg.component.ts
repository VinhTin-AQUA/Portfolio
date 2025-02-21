import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-svg',
  imports: [],
  templateUrl: './project-svg.component.html',
  styleUrl: './project-svg.component.scss'
})
export class ProjectSvgComponent {
    @Input() classes: string = '';
    @Input() stroke: string = '';
}
