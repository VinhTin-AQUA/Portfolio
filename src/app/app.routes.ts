import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

export const routes: Routes = [
	
	{ path: 'home', component: HomeComponent, title: 'Home' },
	{ path: 'experience', component: ExperienceComponent, title: 'Experience' },
	{ path: 'hobbies', component: HobbiesComponent, title: 'Hobbies' },
	{ path: 'projects', loadChildren:() => import('./projects/projects.routes').then(r => r.projectRoutes) },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
