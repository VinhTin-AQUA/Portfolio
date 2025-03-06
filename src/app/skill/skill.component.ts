import { Component } from '@angular/core';
import { knowledgeOf, skilledIn, tools } from './skills.data';
import { SvgComponent } from '../components/svgs/svg/svg.component';

@Component({
	selector: 'app-skill',
	imports: [SvgComponent],
	templateUrl: './skill.component.html',
	styleUrl: './skill.component.scss',
})
export class SkillComponent {
	knowledgeOf: any = knowledgeOf;
	skilledIn: any = skilledIn;
	tools: any = tools;
}
