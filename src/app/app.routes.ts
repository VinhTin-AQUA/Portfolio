import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/ho-vinh-tin', pathMatch: 'full' },
	{ path: 'ho-vinh-tin', component: HomeComponent, title: 'Hồ Vĩnh Tín' },
];
