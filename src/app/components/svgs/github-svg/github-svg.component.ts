import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-github-svg',
	imports: [],
	templateUrl: './github-svg.component.html',
	styleUrl: './github-svg.component.scss',
})
export class GithubSvgComponent {
	@Input() classes: string = '';
}
