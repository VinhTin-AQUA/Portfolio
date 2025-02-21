import { Component } from '@angular/core';
import { experience } from './experience.data';
import { SvgComponent } from '../components/svgs/svg/svg.component';

@Component({
	selector: 'app-experience',
	imports: [SvgComponent],
	templateUrl: './experience.component.html',
	styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
	experience: any = experience;

	constructor() {}
}
