import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
	NavigationEnd,
	Router,
	RouterLink,
	RouterLinkActive,
} from '@angular/router';
import { SvgOutlineIconComponent } from '../svg-outline-icon/svg-outline-icon.component';
import { filter } from 'rxjs';

@Component({
	selector: 'app-header',
	imports: [CommonModule, RouterLink, RouterLinkActive, SvgOutlineIconComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	showSideBar: boolean = false;
	activatedItem: any = {
        name: 'Home',
        url: 'home',
        icon: 'home',
    };

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

	constructor(private router: Router) {}
	ngOnInit() {
		this.router.events
			.pipe(filter((event: any) => event instanceof NavigationEnd))
			.subscribe((event: any) => {
                const item = this.items.find((x: any) => x.url === event.url.split('/')[1])
                if(item) {
                    this.activatedItem.name = item.name
                    this.activatedItem.url = item.url
                    this.activatedItem.icon = item.icon
                }
			});
	}

	onShowSideBar(flag: boolean | null = null) {
		if (!flag) {
			this.showSideBar = !this.showSideBar;
		} else {
			this.showSideBar = flag;
		}
	}

	onChangeRoute(item: any) {
		this.onShowSideBar(false);
		this.activatedItem = item;
	}
}
