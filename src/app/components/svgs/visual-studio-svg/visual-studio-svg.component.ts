import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visual-studio-svg',
  imports: [],
  templateUrl: './visual-studio-svg.component.html',
  styleUrl: './visual-studio-svg.component.scss'
})
export class VisualStudioSvgComponent {
    @Input() classes: string = '';
}
