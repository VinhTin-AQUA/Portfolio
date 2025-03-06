import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mysql-svg',
  imports: [],
  templateUrl: './mysql-svg.component.html',
  styleUrl: './mysql-svg.component.scss'
})
export class MysqlSvgComponent {
    @Input() classes: string = '';
}
