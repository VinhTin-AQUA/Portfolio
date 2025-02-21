import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-android-studio-svg',
  imports: [],
  templateUrl: './android-studio-svg.component.html',
  styleUrl: './android-studio-svg.component.scss'
})
export class AndroidStudioSvgComponent {
    @Input() classes: string = '';
}
