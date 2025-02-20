import { Component } from '@angular/core';
import { SvgLogoComponent } from '../components/svg-logo/svg-logo.component';

@Component({
	selector: 'app-experience',
	imports: [SvgLogoComponent],
	templateUrl: './experience.component.html',
	styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
	experience: any = [
		{
			companyName: 'COLIV HOME JOINT STOCK company',
			position: 'Backend Developer',
			time: '05/2024 - 02/2025',
			techStackIcons: [
				{
                    name: '.net',
                    classes:'w-10 h-10'
                },
                {
                    name: 'sql',
                    classes:'w-10 h-10'
                },
                {
                    name: 'angular',
                    classes:'w-10 h-10'
                },
                {
                    name: 'nestjs',
                    classes:'w-10 h-10'
                },
                {
                    name: 'mongodb',
                    classes:'w-10 h-10'
                },
                {
                    name: 'nginx',
                    classes:'w-10 h-10'
                },
                {
                    name: 'docker',
                    classes:'w-10 h-10'
                },
                {
                    name: 'redis',
                    classes:'w-10 h-10'
                },
                {
                    name: 'minio',
                    classes:'w-10 h-10'
                },
                {
                    name: 'linux',
                    classes:'w-10 h-10'
                },
			],
			mainTasks: [
				'✅ Backend development (API for contract, finance, building management)',
				'✅ Design an optimal relational database for contract and finance data',
				'✅ Integrate login system, authorization between landlord and broker',
			],
			description:
				'☑️ Building management and real estate brokerage system. Build web applications that help landlords manage buildings, rental rooms, contracts, finances, and profits. The system also provides a platform for real estate brokers to find suitable apartments for customers.',
		},
	];

	constructor() {}
}
