import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from '../themes/theme.service';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	themeService = inject(ThemeService);

	constructor() {}

	onChangeTheme() {
    this.themeService.update();
  }

	scrollToAbout(elementId: string) {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
}
