import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-html-svg',
	imports: [],
	templateUrl: './html-svg.component.html',
	styleUrl: './html-svg.component.scss',
})
export class HtmlSvgComponent {
	@Input() classes: string = '';
}
