import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-gym-svg',
	imports: [],
	templateUrl: './gym-svg.component.html',
	styleUrl: './gym-svg.component.scss',
})
export class GymSvgComponent {
	@Input() classes: string = '';
}
