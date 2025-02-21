import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redis-svg',
  imports: [],
  templateUrl: './redis-svg.component.html',
  styleUrl: './redis-svg.component.scss'
})
export class RedisSvgComponent {
    @Input() classes: string = '';
}
