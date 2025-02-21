import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-coding-svg',
	imports: [],
	templateUrl: './coding-svg.component.html',
	styleUrl: './coding-svg.component.scss',
})
export class CodingSvgComponent {
	@Input() classes: string = '';
}
