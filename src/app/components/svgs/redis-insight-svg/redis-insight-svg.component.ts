import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-redis-insight-svg',
	imports: [],
	templateUrl: './redis-insight-svg.component.html',
	styleUrl: './redis-insight-svg.component.scss',
})
export class RedisInsightSvgComponent {
	@Input() classes: string = '';
}
