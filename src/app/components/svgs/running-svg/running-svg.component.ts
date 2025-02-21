import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-running-svg',
  imports: [],
  templateUrl: './running-svg.component.html',
  styleUrl: './running-svg.component.scss'
})
export class RunningSvgComponent {
    @Input() classes: string = '';
}
