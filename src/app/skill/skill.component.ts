import { Component } from '@angular/core';
import { skills } from './sills.data';
import { SvgComponent } from '../components/svgs/svg/svg.component';

@Component({
	selector: 'app-skill',
	imports: [SvgComponent],
	templateUrl: './skill.component.html',
	styleUrl: './skill.component.scss',
})
export class SkillComponent {
	skills: any = skills;
}
