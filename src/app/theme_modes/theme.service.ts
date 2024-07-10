import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	darkMode = signal<string>('light');
	private readonly themeKey = 'theme-setting';

	constructor() {}

	init() {
		const themeSetting = localStorage.getItem(this.themeKey);

		if (themeSetting === null || themeSetting === undefined) {
			this.darkMode.set('light');
			localStorage.setItem(this.themeKey, 'light');
		} else {
			this.darkMode.set(themeSetting);
		}
	}

	update() {
		this.darkMode.update(mode => {
			var newMode = mode === 'dark' ? 'light' : 'dark';
			localStorage.setItem(this.themeKey, newMode);
			console.log(newMode);
			
			return newMode;
		});
	}
}
