import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqlite-svg',
  imports: [],
  templateUrl: './sqlite-svg.component.html',
  styleUrl: './sqlite-svg.component.scss'
})
export class SqliteSvgComponent {
    @Input() classes: string = '';
}
