import { Routes } from '@angular/router';
import { AdoptPetComponent } from './projects/adopt-pet/adopt-pet.component';
import { BookingComponent } from './projects/booking/booking.component';

export const routes: Routes = [
	{ path: '', loadChildren: () => import('./home/home.routes').then(r => r.routes) },
	{
		path: 'project',
		children: [
			{ path: 'adopt-pet', component: AdoptPetComponent, title: 'Pet Adoption' },
			{ path: 'booking', component: BookingComponent, title: 'Booking' },
		],
	},
	{ path: '**', redirectTo: '' },
];
