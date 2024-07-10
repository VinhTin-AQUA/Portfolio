import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme_modes/theme.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'Portfolio';
	themeService = inject(ThemeService);


	constructor() {}
	ngOnInit() {
		this.themeService.init();
	}
}
