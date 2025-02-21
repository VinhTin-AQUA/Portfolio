import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mongodb-svg',
  imports: [],
  templateUrl: './mongodb-svg.component.html',
  styleUrl: './mongodb-svg.component.scss'
})
export class MongodbSvgComponent {
    @Input() classes: string = '';
}
