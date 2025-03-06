import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vercel-svg',
  imports: [],
  templateUrl: './vercel-svg.component.html',
  styleUrl: './vercel-svg.component.scss'
})
export class VercelSvgComponent {
    @Input() classes: string = '';
}
