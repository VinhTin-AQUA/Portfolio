import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-git-svg',
	imports: [],
	templateUrl: './git-svg.component.html',
	styleUrl: './git-svg.component.scss',
})
export class GitSvgComponent {
	@Input() classes: string = '';
}
