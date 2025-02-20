import { Component } from '@angular/core';
import { SvgLogoComponent } from '../components/svg-logo/svg-logo.component';
import { experience } from './experience.data';
import { ToolLogoComponent } from '../components/tool-logo/tool-logo.component';

@Component({
	selector: 'app-experience',
	imports: [SvgLogoComponent, ToolLogoComponent],
	templateUrl: './experience.component.html',
	styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
	experience: any = experience;

	constructor() {}
}
