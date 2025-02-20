import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
	
	{ path: 'home', component: HomeComponent, title: 'Home' },
	{ path: 'experience', component: ExperienceComponent, title: 'Experience' },
	{ path: 'projects', component: ProjectsComponent, title: 'Projects' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
