import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-ffmpeg',
	imports: [],
	templateUrl: './ffmpeg.component.html',
	styleUrl: './ffmpeg.component.scss',
})
export class FfmpegComponent {
	@Input() classes: string = '';
}
