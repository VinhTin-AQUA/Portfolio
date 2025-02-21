import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-linux-svg',
	imports: [],
	templateUrl: './linux-svg.component.html',
	styleUrl: './linux-svg.component.scss',
})
export class LinuxSvgComponent {
	@Input() classes: string = '';
}
