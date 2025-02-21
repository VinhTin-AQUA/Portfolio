import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sdl-svg',
  imports: [],
  templateUrl: './sdl-svg.component.html',
  styleUrl: './sdl-svg.component.scss'
})
export class SdlSvgComponent {
    @Input() classes: string = '';
}
