import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selenium-svg',
  imports: [],
  templateUrl: './selenium-svg.component.html',
  styleUrl: './selenium-svg.component.scss'
})
export class SeleniumSvgComponent {
    @Input() classes: string = '';
}
