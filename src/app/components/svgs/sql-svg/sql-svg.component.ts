import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sql-svg',
  imports: [],
  templateUrl: './sql-svg.component.html',
  styleUrl: './sql-svg.component.scss'
})
export class SqlSvgComponent {
    @Input() classes: string = '';
}
