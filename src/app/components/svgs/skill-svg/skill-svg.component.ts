import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-svg',
  imports: [],
  templateUrl: './skill-svg.component.html',
  styleUrl: './skill-svg.component.scss'
})
export class SkillSvgComponent {
    @Input() classes: string = '';
    @Input() stroke: string = '';
    @Input() fill: string = '';
}
