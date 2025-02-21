import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-gaming-svg',
	imports: [],
	templateUrl: './gaming-svg.component.html',
	styleUrl: './gaming-svg.component.scss',
})
export class GamingSvgComponent {
	@Input() classes: string = '';
}
