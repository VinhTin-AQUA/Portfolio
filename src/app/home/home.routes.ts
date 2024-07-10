import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: '', redirectTo: 'about', pathMatch: 'full' },
			{ path: 'about', component: AboutComponent, title: 'About' },
			{ path: 'experience', component: ExperienceComponent, title: 'Experience' },
			{ path: 'projects', component: ProjectComponent, title: 'Projects' },
			{ path: 'skills', component: SkillComponent, title: 'Skills' },
		],
	},
];
