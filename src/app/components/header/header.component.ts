import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	imports: [CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	showSideBar: boolean = true;
	items: any = [
		{
			name: 'Home',
			url: 'home',
			icon: 'svgs/home.svg',
		},
        {
			name: 'Experience',
			url: 'experience',
			icon: 'svgs/experience.svg',
		},
        {
			name: 'Projects',
			url: 'projects',
			icon: 'svgs/project.svg',
		},
        {
			name: 'Hobbies',
			url: 'hobbies',
			icon: 'svgs/hobby.svg',
		},
	];

	constructor() {}

	onShowSideBar() {
		this.showSideBar = !this.showSideBar;
	}
}
