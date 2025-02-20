import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const projectRoutes: Routes = [
	{
		path: '',
		component: ProjectsComponent,
		children: [
			{ path: '', component: ProjectListComponent, title: 'List projects' },
			{ path: '**', redirectTo: '', pathMatch: 'full' },
		],
	},
];
