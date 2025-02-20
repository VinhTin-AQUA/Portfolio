import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgOutlineIconComponent } from '../svg-outline-icon/svg-outline-icon.component';

@Component({
	selector: 'app-header',
	imports: [CommonModule, RouterLink, RouterLinkActive, SvgOutlineIconComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	showSideBar: boolean = false;
	items: any = [
		{
			name: 'Home',
			url: 'home',
			icon: 'home',
		},
        {
			name: 'Experience',
			url: 'experience',
			icon: 'experience',
		},
        {
			name: 'Projects',
			url: 'projects',
			icon: 'project',
		},
        {
			name: 'Hobbies',
			url: 'hobbies',
			icon: 'hobby',
		},
	];

	constructor() {}

	onShowSideBar(flag: boolean | null = null) {
        if(!flag) {
            this.showSideBar = !this.showSideBar;
        }
		else {
            this.showSideBar = flag;
        }
	}
}
