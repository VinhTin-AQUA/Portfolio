import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kafka-svg',
  imports: [],
  templateUrl: './kafka-svg.component.html',
  styleUrl: './kafka-svg.component.scss'
})
export class KafkaSvgComponent {
    @Input() classes: string = '';
}
