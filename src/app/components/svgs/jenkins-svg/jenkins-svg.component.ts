import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jenkins-svg',
  imports: [],
  templateUrl: './jenkins-svg.component.html',
  styleUrl: './jenkins-svg.component.scss'
})
export class JenkinsSvgComponent {
    @Input() classes: string = '';
}
