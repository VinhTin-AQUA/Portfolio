import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-docker-svg',
  imports: [],
  templateUrl: './docker-svg.component.html',
  styleUrl: './docker-svg.component.scss'
})
export class DockerSvgComponent {
    @Input() classes: string = '';
}
