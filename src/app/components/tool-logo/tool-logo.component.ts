import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-tool-logo',
	imports: [],
	templateUrl: './tool-logo.component.html',
	styleUrl: './tool-logo.component.scss',
})
export class ToolLogoComponent {
	@Input() iconName!: string; // Tên icon
	@Input() classes: string = 'w-6 h-6'; // Mặc định dùng màu của văn bản
}
